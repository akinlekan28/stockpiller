import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {getPlans, withdrawPlan} from '../../store/actions/planActions'
import {logoutUser} from '../../store/actions/authActions'
import './scss/withdraw.scss'
import DashboardLayout from "../dashboard/Layout";

class Withdraw extends Component {
    constructor() {
        super()

        this.state = {
            plan_id: '',
            password: '',
            block_target: '',
            cement_target: '',
            address: '',
            location_type: '',
            isVarious: false,
            isSingle: true,
            errors: {},
        }

        this.hamburger = createRef()
        this.sliderClose = createRef()
        this.menuContainer = createRef()
        this.menu = createRef()
        this.overlay = createRef()

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        this.props.getPlans()
    }

    logout(e) {
        e.preventDefault()

        this.props.logoutUser()
    }

    openSlider = () => {
        this.overlay.current.style.display = 'block'
        this.menuContainer.current.classList.add('active-withdraw')
        this.menu.current.style.display = 'block'
        setTimeout(() => {
            this.menu.current.classList.add('active-withdraw')
        }, 100)
    }

    closeSlider = () => {
        this.menu.current.classList.remove('active-withdraw')
        this.menu.current.style.display = 'none'
        setTimeout(() => {
            this.menuContainer.current.classList.remove('active-withdraw')
            this.overlay.current.style.display = 'none'
        }, 400)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        this.props.withdrawPlan(formData)
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err))
    }

    render() {
        const {loading, plans} = this.props.plans
        const {plan_id} = this.state

        let planSelector
        if (loading) {
            planSelector = <h4>Loading plans...</h4>
        } else {
            if (Object.keys(plans).length > 0) {
                planSelector = (
                    <select
                        className="select-css"
                        value={plan_id}
                        name="plan_id"
                        onChange={this.onChange}
                    >
                        <option value="">Select plan</option>
                        {plans.map((p) => (
                            <option key={p.id.toString()} value={p.id}>
                                {p.plan_name}
                            </option>
                        ))}
                    </select>
                )
            } else {
                planSelector = <h4>You have no active plans</h4>
            }
        }
        const {isVarious, isSingle} = this.state
        return (
            <DashboardLayout name={'withdraw'}>
                <div className="withdraw-wrapper  pt-lg-4 pt-5 row">
                    <div className="mt-lg-0 mt-5 d-block w-100">
                        <div className="main-body-withdraw px-5 p-0 mt-0">
                            <div className="col-sm-8 card">
                                <div className="p-4">
                                    <form action="" onSubmit={this.onSubmit}>
                                        <div className="card-body">
                                            <div className="">
                                                <div className="py-2">
                                                    <h2>Select Plan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span className="ast">*</span></h2>
                                                </div>
                                                {planSelector}
                                                <br/><br/>
                                                <div className="form-check-inline">
                                                    <input type="checkbox" className="form-check" id="checkMe"/>
                                                    <label forHtml="checkMe" className="form-check-label fs-12">
                                                        &nbsp;&nbsp; Click here to schedule for material's
                                                        delivery to your construction site by our pick up
                                                        agents
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="py-2">
                                                <h2>Choose Location</h2>
                                            </div>
                                            <div className="aligned">
                                                <div className="radio-group-withdraw mr-5 aligned">
                                                    <input
                                                        type="radio"
                                                        name="location_type"
                                                        id="one"
                                                        style={{marginBottom: '3px'}}
                                                        onChange={() =>
                                                            this.setState({isSingle: !isSingle})
                                                        }
                                                        checked={isSingle}
                                                        value={isSingle ? isSingle : isVarious}
                                                    />
                                                    <label forHtml="one">&nbsp;&nbsp;One Location</label>
                                                </div>


                                                <div className="radio-group-withdraw aligned">
                                                    <input
                                                        type="radio"
                                                        name="location_type"
                                                        id="various"
                                                        style={{marginBottom: '3px'}}
                                                        onChange={() =>
                                                            this.setState({isVarious: !isVarious})
                                                        }
                                                        checked={isVarious}
                                                        value={isVarious ? isVarious : isSingle}
                                                    />
                                                    <label for="various">
                                                        &nbsp;&nbsp;Various Locations
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div className="py-2">
                                                <h2>Location</h2>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <label for="blocks-unit">Unit of Blocks</label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        name="block_target"
                                                        value={this.state.block_target}
                                                        onChange={this.onChange}
                                                        id="blocks-unit"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label for="cement-unit">Bags of Cement</label>
                                                    <input
                                                        type="number" min="1" id="cement-unit"
                                                        name="cement_target"
                                                        value={this.state.cement_target}
                                                        onChange={this.onChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type Your Address"
                                                name="address"
                                                onChange={this.onChange}
                                                value={this.state.address}
                                            />
                                            {/* <a href="/extra-location" className="add-location-withdraw">
                      Add Another Address
                    </a> */}
                                        </div>
                                        <div className="form-group-full-withdraw">
                                            <div className="form-group-header-withdraw">
                                                <h2>Password</h2>
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                className="form-input-full-withdraw"
                                                name="password"
                                                onChange={this.onChange}
                                                value={this.state.password}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn-withdraw plans-submit-withdraw"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    plans: state.plan,
    errors: state.errors,
})

const mapDispatchToProps = {
    logoutUser,
    getPlans,
    withdrawPlan,
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw)
