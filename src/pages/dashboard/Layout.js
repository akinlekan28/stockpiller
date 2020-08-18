import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser, me} from '../../store/actions/authActions'
import {getLastPlans} from '../../store/actions/planActions'
import './scss/nav.scss'
import './scss/dashboard.scss'

class DashboardLayout extends Component {
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
    };

    sideCon = (e) => {
        // if (e.path[0] === this.sidebarContainer.current) {
        //   this.toggleClass(this.sidenavDashboard, 'active-dashboard')
        //   setTimeout(() => {
        //     this.toggleClass(this.sidebarContainer.current, 'active-dashboard')
        //   }, 400)
        // }
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="container-dashboard">
                    <div className="sidenav__container-dashboard" ref={this.sidebarContainer} onClick={this.sideCon}>
                        <div className="sidebar-dashboard sidenav-dashboard" ref={this.sidenavDashboard}>
                            <div>
                                <Link className="logo-dashboard" to="/">
                                    Stockpiller
                                </Link>
                            </div>

                            <button className="sidenav-close-dashboard" onClick={this.closeNav}>
                                <img src="../assets/images/close.svg"/>
                            </button>
                            <div className="links-dashboard">
                                <div
                                    className={`link-dashboard ${this.props.name === 'dashboard' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="ic:baseline-dashboard" data-inline="false"/>
                                    <Link to="/dashboard">Dashboard</Link>
                                </div>
                                <div
                                    className={`link-dashboard ${this.props.name === 'plans' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="bx:bxs-bar-chart-alt-2" data-inline="false"/>
                                    <Link to="/plans">Plans</Link>
                                </div>
                                <div
                                    className={`link-dashboard ${this.props.name === 'transactions' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="bi:calculator-fill" data-inline="false"/>
                                    <Link to="/transactions">Transactions</Link>
                                </div>
                                <div
                                    className={`link-dashboard ${this.props.name === 'withdraw' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="ri:send-plane-fill" data-inline="false"/>
                                    <Link to="/withdraw">Withdraw</Link>
                                </div>
                                <div
                                    className={`link-dashboard ${this.props.name === 'cards' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="vaadin:wallet" data-inline="false"/>
                                    <Link to="/cards">Cards</Link>
                                </div>
                                <div
                                    className={`link-dashboard ${this.props.name === 'settings' && 'active-dashboard'}`}>
                                    <span className="iconify" data-icon="clarity:cog-line" data-inline="false"/>
                                    <Link to="/settings">Settings</Link>
                                </div>
                            </div>
                            <a className="logout__link-dashboard" href="#" onClick={this.logout}>
                                <span className="iconify" data-icon="ri:logout-box-line" data-inline="false"/>
                                Logout
                            </a>
                        </div>
                    </div>
                    <div className="sidebar-dashboard">
                        <div className="header-title">
                            <Link className="logo-dashboard" to="/">
                                Stockpiller
                            </Link>
                        </div>
                        <div className="links-dashboard">
                            <div className={`link-dashboard ${this.props.name === 'dashboard' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="ic:baseline-dashboard" data-inline="false"/>
                                <Link to="/dashboard">Dashboard</Link>
                            </div>
                            <div className={`link-dashboard ${this.props.name === 'plans' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="bx:bxs-bar-chart-alt-2" data-inline="false"/>
                                <Link to="/plans">Plans</Link>
                            </div>
                            <div
                                className={`link-dashboard ${this.props.name === 'transactions' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="bi:calculator-fill" data-inline="false"/>
                                <Link to="/transactions">Transactions</Link>
                            </div>
                            <div className={`link-dashboard ${this.props.name === 'withdraw' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="ri:send-plane-fill" data-inline="false"/>
                                <Link to="/withdraw">Withdraw</Link>
                            </div>
                            <div className={`link-dashboard ${this.props.name === 'cards' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="vaadin:wallet" data-inline="false"/>
                                <Link to="/cards">Cards</Link>
                            </div>
                            <div className={`link-dashboard ${this.props.name === 'settings' && 'active-dashboard'}`}>
                                <span className="iconify" data-icon="clarity:cog-line" data-inline="false"/>
                                <Link to="/settings">Settings</Link>
                            </div>
                        </div>
                        <a className="logout__link-dashboard" ref="#" onClick={this.logout}>
                            <span className="iconify" data-icon="ri:logout-box-line" data-inline="false"/>
                            Logout
                        </a>
                    </div>

                    <div className="main-dashboard">
                        <div className="top-dashboard">
                            <button className="sidenav-btn-dashboard" onClick={this.sidenav}>
                                <div className="bar-dashboard"/>
                                <div className="bar-dashboard"/>
                                <div className="bar-dashboard"/>
                            </button>
                            <div className="back-dashboard">
                                <img src="../assets/images/back.svg" alt=""/>
                                <a href="">Back</a>
                            </div>
                            <div className="aligned">
                                <div className="notifications-dashboard">
                                    <img src="../assets/images/notifications.svg" alt=""/>
                                </div>
                                <div className="user-dashboard">
                                    <img src="../assets/images/user.svg" alt=""/>
                                </div>
                                <button className="logout-dashboard" onClick={this.logout}>
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div >
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({plans: state.plan, auth: state.auth,})
const mapDispatchToProps = {logoutUser, getLastPlans, me,};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)
