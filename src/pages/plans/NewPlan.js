import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../store/actions/authActions'
import './scss/plans.scss'
import DashboardLayout from "../dashboard/Layout";

class NewPlan extends Component {
    constructor() {
        super()

        this.state = {
            showDepositType: false,
        }

        this.hamburger = createRef()
        this.sliderClose = createRef()
        this.menuContainer = createRef()
        this.menu = createRef()
        this.overlay = createRef()
        this.toggleDeposit = this.toggleDeposit.bind(this)
        this.logout = this.logout.bind(this)
    }

    toggleDeposit(e) {
        this.setState({showDepositType: true})
    }

    logout(e) {
        e.preventDefault()

        this.props.logoutUser()
    }

    openSlider = () => {
        this.overlay.current.style.display = 'block'
        this.menuContainer.current.classList.add('active-home')
        this.menu.current.style.display = 'block'
        setTimeout(() => {
            this.menu.current.classList.add('active-home')
        }, 100)
    }

    closeSlider = () => {
        this.menu.current.classList.remove('active-home')
        this.menu.current.style.display = 'none'
        setTimeout(() => {
            this.menuContainer.current.classList.remove('active-home')
            this.overlay.current.style.display = 'none'
        }, 400)
    }

    render() {
        let type
        const {showDepositType} = this.state
        return (
            <DashboardLayout name={'plans'}>
                <div className="plans-wrapper px-4 pt-5 pt-lg-4">
                    <div class="main-body-home  mt-lg-0 mt-5">
                        <div class="empty-div-home">
                            {!showDepositType && (
                                <div
                                    class="add-plan-image-home"
                                    onClick={this.toggleDeposit}
                                    style={{height: '70vh'}}
                                >
                                    <img
                                        src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594885590/Group_5_upslqf.svg"
                                        alt=""
                                        class="Add-plan-home"
                                    />
                                </div>
                            )}
                            {showDepositType && (
                                <div
                                    class="choose-deposit-option-home"
                                    style={{display: 'flex', height: '70vh'}}
                                >
                                    <Link
                                        to={`/plan/create/${(type = 1)}`}
                                        class="plan-type-home plan-type-normal-home"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594885923/Group_89_fbogzq.svg"
                                            alt=""
                                        />
                                        <p>Recurrent deposit</p>
                                    </Link>
                                    <Link
                                        to={`/plan/create/${(type = 2)}`}
                                        class="plan-type-home plan-type-once-home"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594885923/Group_89_fbogzq.svg"
                                            alt=""
                                        />
                                        <p>One-time deposit</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DashboardLayout>

        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlan)
