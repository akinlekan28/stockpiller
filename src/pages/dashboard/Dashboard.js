import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser, me } from '../../store/actions/authActions'
import { getLastPlans } from '../../store/actions/planActions'
import Skeleton from '@yisheng90/react-loading'
import './scss/nav.scss'
import './scss/dashboard.scss'
import { toast } from 'react-toastify'

class Dashboard extends Component {
  constructor() {
    super()

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
    e.preventDefault()

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
    const { plans, loading } = this.props.plans

    let plansContainer

    if (loading) {
      plansContainer = (
        <>
          <div class="card-dashboard brown-dashboard">
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={30} />
          </div>
          <div class="card-dashboard blue-dashboard">
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={30} />
          </div>
          <div class="card-dashboard pink-dashboard">
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={30} />
          </div>
          <div class="card-dashboard green-dashboard">
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={30} />
          </div>
        </>
      )
    } else {
      if (plans !== null && Object.keys(plans).length > 0) {
        plansContainer = (
          <>
            <div class="card-dashboard brown-dashboard">
              <div class="header-dashboard">{plans[0].plan_name}</div>
              <div class="content-dashboard">
                <div class="content__properties-dashboard">
                  <p class="content__properties__header-dashboard">
                    List of Properties
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Units of Block</span>
                    {/* <span class="amount-dashboard">
                      &#8358;{plans[0].deposit}/
                    </span> */}
                    <span class="target-amount-dashboard">
                      {plans[0].block_target}
                    </span>
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Bags of Cement</span>
                    <span class="amount-dashboard">
                      {plans[0].block_target}
                    </span>
                    {/* <span class="target-amount-dashboard">
                      &#8358;{plans[0].deposit}
                    </span> */}
                  </p>
                </div>
                <div class="content__amount__deposited-dashboard">
                  <p class="content__amount__deposited__header-dashboard">
                    Amount deposited
                  </p>
                  <p class="amount-dashboard">&#8358;{plans[0].deposit}</p>
                </div>
              </div>
            </div>
            <div class="card-dashboard blue-dashboard">
              <div class="header-dashboard">{plans[1].plan_name}</div>
              <div class="content-dashboard">
                <div class="content__properties-dashboard">
                  <p class="content__properties__header-dashboard">
                    List of Properties
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Units of Block</span>
                    {/* <span class="amount-dashboard">1000/</span> */}
                    <span class="target-amount-dashboard">
                      {plans[1].block_target}
                    </span>
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Bags of Cement</span>
                    <span class="amount-dashboard">
                      {plans[1].cement_target}
                    </span>
                    {/* <span class="target-amount-dashboard">{plans[1].cement_target}</span> */}
                  </p>
                </div>
                <div class="content__amount__deposited-dashboard">
                  <p class="content__amount__deposited__header-dashboard">
                    Amount deposited
                  </p>
                  <p class="amount-dashboard">&#8358;{plans[1].deposit}</p>
                </div>
              </div>
            </div>
            <div class="card-dashboard pink-dashboard">
              <div class="header-dashboard">{plans[2].plan_name}</div>
              <div class="content-dashboard">
                <div class="content__properties-dashboard">
                  <p class="content__properties__header-dashboard">
                    List of Properties
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Units of Block</span>
                    {/* <span class="amount-dashboard">1000/</span> */}
                    <span class="target-amount-dashboard">
                      {plans[2].block_target}
                    </span>
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Bags of Cement</span>
                    <span class="amount-dashboard">
                      {plans[2].cement_target}
                    </span>
                    {/* <span class="target-amount-dashboard">100</span> */}
                  </p>
                </div>
                <div class="content__amount__deposited-dashboard">
                  <p class="content__amount__deposited__header-dashboard">
                    Amount deposited
                  </p>
                  <p class="amount-dashboard">&#8358;{plans[2].deposit}</p>
                </div>
              </div>
            </div>
            <div class="card-dashboard green-dashboard">
              <div class="header-dashboard">{plans[3].plan_name}</div>
              <div class="content-dashboard">
                <div class="content__properties-dashboard">
                  <p class="content__properties__header-dashboard">
                    List of Properties
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Units of Block</span>
                    {/* <span class="amount-dashboard">1000/</span> */}
                    <span class="target-amount-dashboard">
                      {plans[3].block_target}
                    </span>
                  </p>
                  <p class="content__properties__details-dashboard">
                    <span class="title-dashboard">Bags of Cement</span>
                    <span class="amount-dashboard">
                      {plans[3].cement_target}
                    </span>
                    {/* <span class="target-amount-dashboard">100</span> */}
                  </p>
                </div>
                <div class="content__amount__deposited-dashboard">
                  <p class="content__amount__deposited__header-dashboard">
                    Amount deposited
                  </p>
                  <p class="amount-dashboard">&#8358;{plans[3].deposit}</p>
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
      <div className="dashboard-wrapper">
        <div className="container-dashboard">
          <div
            className="sidenav__container-dashboard"
            ref={this.sidebarContainer}
            onClick={this.sideCon}
          >
            <div
              className="sidebar-dashboard sidenav-dashboard"
              ref={this.sidenavDashboard}
            >
              <div>
                <Link className="logo-dashboard" to="/">
                  Stockpiller
                </Link>
              </div>

              <button
                className="sidenav-close-dashboard"
                onClick={this.closeNav}
              >
                <img src="../assets/images/close.svg" />
              </button>
              <div className="links-dashboard">
                <div className="link-dashboard active-dashboard">
                  <span
                    className="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="link-dashboard">
                  <span
                    className="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div class="link-dashboard">
                  <span
                    className="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div class="link-dashboard">
                  <span
                    className="iconify"
                    data-icon="ri:send-plane-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/withdraw">Withdraw</Link>
                </div>
                <div class="link-dashboard">
                  <span
                    className="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div class="link-dashboard">
                  <span
                    className="iconify"
                    data-icon="clarity:cog-line"
                    data-inline="false"
                  ></span>
                  <Link to="/settings">Settings</Link>
                </div>
              </div>
              <a class="logout__link-dashboard" href="#" onClick={this.logout}>
                <span
                  className="iconify"
                  data-icon="ri:logout-box-line"
                  data-inline="false"
                ></span>
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
              <div className="link-dashboard active-dashboard">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-dashboard">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div className="link-dashboard">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="link-dashboard">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className="link-dashboard">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div className="link-dashboard">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a
              className="logout__link-dashboard"
              href="#"
              onClick={this.logout}
            >
              <span
                className="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>
              Logout
            </a>
          </div>

          <div className="main-dashboard">
            <div className="top-dashboard">
              <button className="sidenav-btn-dashboard" onClick={this.sidenav}>
                <div className="bar-dashboard"></div>
                <div className="bar-dashboard"></div>
                <div className="bar-dashboard"></div>
              </button>
              <div className="back-dashboard">
                <img src="../assets/images/back.svg" alt="" />
                {/* <a href="">Back</a> */}
              </div>
              {/* <table className="rates-dashboard top">
                <tr>
                  <td>Rates</td>
                  <td>Block</td>
                  <td>Cement</td>
                </tr>
                <tr>
                  <td>Local</td>
                  <td>
                    <img src="../assets/images/rate-down.svg" alt="" />
                    &#8358 200
                  </td>
                  <td>
                    <img src="../assets/images/rate-up.svg" alt="" />
                    &#8358 2000
                  </td>
                </tr>
                <tr>
                  <td>International</td>
                  <td>
                    <img src="../assets/images/rate-down.svg" alt="" />
                    $2
                  </td>
                  <td>
                    <img src="../assets/images/rate-up.svg" alt="" />
                    $2
                  </td>
                </tr>
              </table> */}
              <div className="user-controls-dashboard">
                <div className="notifications-dashboard">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div className="user-dashboard">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button className="logout-dashboard" onClick={this.logout}>
                  Logout
                </button>
              </div>
            </div>
            <Link className="new-plan-dashboard" to="/plan/new">
              New Plans
            </Link>
            <div className="cards-dashboard">{plansContainer}</div>
            {/* <table class="rates-dashboard bottom-dashboard">
              <tr>
                <td>Rates</td>
                <td>Block</td>
                <td>Cement</td>
              </tr>
              <tr>
                <td>Local</td>
                <td>
                  <img src="../assets/images/rate-down.svg" />
                  &#8358 200
                </td>
                <td>
                  <img src="../assets/images/rate-up.svg" />
                  &#8358 2000
                </td>
              </tr>
              <tr>
                <td>International</td>
                <td>
                  <img src="../assets/images/rate-down.svg" />
                  $2
                </td>
                <td>
                  <img src="../assets/images/rate-up.svg" />
                  $2
                </td>
              </tr>
            </table> */}
          </div>
        </div>
      </div>
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
