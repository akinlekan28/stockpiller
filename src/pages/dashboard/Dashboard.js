import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {logoutUser, me} from '../../store/actions/authActions'
import {getLastPlans} from '../../store/actions/planActions'
import Skeleton from '@yisheng90/react-loading'
import './scss/nav.scss'
import './scss/dashboard.scss'
import DashboardLayout from "./Layout";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)
        this.sidebarContainer = createRef()
        this.sidenavDashboard = createRef()
        this.sidenavClose = createRef()
    }

    componentDidMount() {
        this.props.getLastPlans()
        this.props.me()
        // const { auth } = this.props.auth;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.auth.userData !== this.props.auth.userData) {
            // if (this.props.auth.userData.is_verified === 0) {
            //   toast.error("Please verify your account");
            //   this.props.logoutUser();
            // }
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logoutUser()
    }

    sidenav = () => {
        this.toggleClass(this.sidebarContainer.current, 'active-dashboard')
        setTimeout(() => {
            this.toggleClass(this.sidenavDashboard.current, 'active-dashboard')
        }, 50)
    }

    toggleClass = (e, className) => {
        if (e.classList.contains(className)) {
            e.classList.remove(className)
        } else {
            e.classList.add(className)
        }
    }

    closeNav = () => {
        this.toggleClass(this.sidenavDashboard.current, 'active-dashboard')
        setTimeout(() => {
            this.toggleClass(this.sidebarContainer.current, 'active-dashboard')
        }, 400)
    }

    sideCon = (e) => {
        // if (e.path[0] === this.sidebarContainer.current) {
        //   this.toggleClass(this.sidenavDashboard, 'active-dashboard')
        //   setTimeout(() => {
        //     this.toggleClass(this.sidebarContainer.current, 'active-dashboard')
        //   }, 400)
        // }
    }

    render() {
        const {plans, loading} = this.props.plans

        let plansContainer

        if (loading) {
            plansContainer = (
                <>
                    <div className="card-dashboard brown-dashboard">
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={30}/>
                    </div>
                    <div className="card-dashboard blue-dashboard">
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={30}/>
                    </div>
                    <div className="card-dashboard pink-dashboard">
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={30}/>
                    </div>
                    <div className="card-dashboard green-dashboard">
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={40}/>
                        <Skeleton height={30}/>
                    </div>
                </>
            )
        } else {
            if (plans !== null && Object.keys(plans).length > 0) {
                plansContainer = (
                    <>
                        <div className="card-dashboard brown-dashboard">
                            <div className="header-dashboard">{plans[0].plan_name}</div>
                            <div className="content-dashboard">
                                <div className="content__properties-dashboard">
                                    <p className="content__properties__header-dashboard">
                                        List of Properties
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Units of Block</span>
                                        {/* <span className="amount-dashboard">
                      &#8358;{plans[0].deposit}/
                    </span> */}
                                        <span className="target-amount-dashboard">
                      {plans[0].block_target}
                    </span>
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Bags of Cement</span>
                                        <span className="amount-dashboard">
                      {plans[0].block_target}
                    </span>
                                        {/* <span className="target-amount-dashboard">
                      &#8358;{plans[0].deposit}
                    </span> */}
                                    </p>
                                </div>
                                <div className="content__amount__deposited-dashboard">
                                    <p className="content__amount__deposited__header-dashboard">
                                        Amount deposited
                                    </p>
                                    <p className="amount-dashboard">&#8358;{plans[0].deposit}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard blue-dashboard">
                            <div className="header-dashboard">{plans[1].plan_name}</div>
                            <div className="content-dashboard">
                                <div className="content__properties-dashboard">
                                    <p className="content__properties__header-dashboard">
                                        List of Properties
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Units of Block</span>
                                        {/* <span className="amount-dashboard">1000/</span> */}
                                        <span className="target-amount-dashboard">
                      {plans[1].block_target}
                    </span>
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Bags of Cement</span>
                                        <span className="amount-dashboard">
                      {plans[1].cement_target}
                    </span>
                                        {/* <span className="target-amount-dashboard">{plans[1].cement_target}</span> */}
                                    </p>
                                </div>
                                <div className="content__amount__deposited-dashboard">
                                    <p className="content__amount__deposited__header-dashboard">
                                        Amount deposited
                                    </p>
                                    <p className="amount-dashboard">&#8358;{plans[1].deposit}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard pink-dashboard">
                            <div className="header-dashboard">{plans[2].plan_name}</div>
                            <div className="content-dashboard">
                                <div className="content__properties-dashboard">
                                    <p className="content__properties__header-dashboard">
                                        List of Properties
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Units of Block</span>
                                        {/* <span className="amount-dashboard">1000/</span> */}
                                        <span className="target-amount-dashboard">
                      {plans[2].block_target}
                    </span>
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Bags of Cement</span>
                                        <span className="amount-dashboard">
                      {plans[2].cement_target}
                    </span>
                                        {/* <span className="target-amount-dashboard">100</span> */}
                                    </p>
                                </div>
                                <div className="content__amount__deposited-dashboard">
                                    <p className="content__amount__deposited__header-dashboard">
                                        Amount deposited
                                    </p>
                                    <p className="amount-dashboard">&#8358;{plans[2].deposit}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard green-dashboard">
                            <div className="header-dashboard">{plans[3].plan_name}</div>
                            <div className="content-dashboard">
                                <div className="content__properties-dashboard">
                                    <p className="content__properties__header-dashboard">
                                        List of Properties
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Units of Block</span>
                                        {/* <span className="amount-dashboard">1000/</span> */}
                                        <span className="target-amount-dashboard">{plans[3].block_target}</span>
                                    </p>
                                    <p className="content__properties__details-dashboard">
                                        <span className="title-dashboard">Bags of Cement</span>
                                        <span className="amount-dashboard">
                      {plans[3].cement_target}
                    </span>
                                        {/* <span className="target-amount-dashboard">100</span> */}
                                    </p>
                                </div>
                                <div className="content__amount__deposited-dashboard">
                                    <p className="content__amount__deposited__header-dashboard">
                                        Amount deposited
                                    </p>
                                    <p className="amount-dashboard">&#8358;{plans[3].deposit}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            } else {
                plansContainer = <h2>Welcome, You have no active plan!</h2>
            }
        }


        return (
            <DashboardLayout name={'dashboard'}>
                <div className="px-3 pt-5 pt-sm-0 ">
                    <Link className="new-plan-dashboard mx-3 mt-5 mt-sm-3" to="/plan/new">
                        New Plans
                    </Link>
                    <div className="cards-dashboard">
                        {plansContainer}
                    </div>
                </div>
            </DashboardLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    plans: state.plan,
    auth: state.auth,
})

const mapDispatchToProps = {
    logoutUser,
    getLastPlans,
    me,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
