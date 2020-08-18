import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlans } from '../../store/actions/planActions'
import { logoutUser } from '../../store/actions/authActions'
import Skeleton from '@yisheng90/react-loading'
import './scss/plans.scss'

class Plans extends Component {
  constructor() {
    super()

    this.hamburger = createRef()
    this.sliderClose = createRef()
    this.menuContainer = createRef()
    this.menu = createRef()
    this.overlay = createRef()
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
    const { plans, loading } = this.props.plans
    let i = 1

    let planContainer
    const formatMoney = (money) => {
      let formatedValue = money
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      return formatedValue
    }

    if (loading || plans === null) {
      planContainer = (
        <>
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
        </>
      )
    } else {
      if (Object.keys(plans).length > 0) {
        planContainer = plans.map((p) => (
          <div className="plan-group-home" key={p.id}>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                S/N :
              </p>
              <span className="response-home">{i++}</span>
            </div>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                Name:
              </p>
              <span className="response-home" style={{ fontSize: '18px' }}>
                {p.plan_name}
              </span>
            </div>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                {' '}
                Auto Deposits{' '}
              </p>
              <span className="response-home" style={{ fontSize: '18px' }}>
                &#8358;{formatMoney(p.deposit)}
              </span>
            </div>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                {' '}
                List Of Properties:{' '}
              </p>
              <span className="response-home">
                <p>{p.block_target} units of blocks</p>
                <p>{p.cement_target} bags of Cement</p>
              </span>
            </div>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                {' '}
                Start Date:{' '}
              </p>
              <span className="response-home" style={{ fontSize: '18px' }}>
                {p.start_date}
              </span>
            </div>
            <div className="detail-container-home">
              <p className="tag-home" style={{ fontSize: '22px' }}>
                {' '}
                Next Deposit Date:{' '}
              </p>
              <span className="response-home" style={{ fontSize: '18px' }}>
                {new Date(p.next_deposit_date).toISOString().substring(0, 10)}
              </span>
            </div>
            <div className="detail-container-actions-home">
              <Link to={`/editplans/${p.id}`}>
                <span
                  className="iconify"
                  data-icon="noto:fountain-pen"
                  data-inline="false"
                ></span>
              </Link>
              <Link to={`/viewplan/${p.id}`}>
                <span
                  className="iconify"
                  data-icon="bi:eye-fill"
                  data-inline="false"
                ></span>
              </Link>
            </div>
          </div>
        ))
      }
    }

    return (
      <div className="plans-wrapper">
        <div className="sidenav__container-home" ref={this.menuContainer}>
          <div className="sidebar-home sidenav-home" ref={this.menu}>
            <div className="header-title">
              <Link className="logo" to="/">
                Stockpiller
              </Link>
            </div>
            <button className="sidenav-close-home" onClick={this.closeSlider}>
              <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597702029/close_junhc8.svg" />
            </button>
            <div className="links-home">
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-home active-home">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a className="logout__link-home" href="#" onClick={this.logout}>
              <span
                className="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>{' '}
              Logout
            </a>
          </div>
        </div>
        <div className="sidebar-home">
          <div className="header-title">
            <Link className="logo-home" to="/">
              Stockpiller
            </Link>
          </div>
          <div className="links-home">
            <div className="link-home">
              <span
                className="iconify"
                data-icon="ic:baseline-dashboard"
                data-inline="false"
              ></span>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="link-home active-home">
              <span
                className="iconify"
                data-icon="bx:bxs-bar-chart-alt-2"
                data-inline="false"
              ></span>
              <Link to="/plans">Plans</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="bi:calculator-fill"
                data-inline="false"
              ></span>
              <Link to="/transactions">Transactions</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="ri:send-plane-fill"
                data-inline="false"
              ></span>
              <Link to="/withdraw">Withdraw</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="vaadin:wallet"
                data-inline="false"
              ></span>
              <Link to="/cards">Cards</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="clarity:cog-line"
                data-inline="false"
              ></span>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
          <a className="logout__link-home" href="#" onClick={this.logout}>
            <span
              className="iconify"
              data-icon="ri:logout-box-line"
              data-inline="false"
            ></span>
            Logout
          </a>
        </div>
        <div
          className="cover-overlay-home"
          onClick={this.closeSlider}
          ref={this.overlay}
        ></div>

        <main>
          <div className="main-container-home">
            <div className="main-header-home">
              <div className="open-home" onClick={this.openSlider}>
                <div className="bar-home"></div>
                <div className="bar-home"></div>
                <div className="bar-home"></div>
              </div>
              <div class="back-home">
                <img src="../assets/images/back.svg" alt="" />
                {/* <a href="">Back</a> */}
              </div>
              <div className="personalize-home">
                <img
                  className="notification-bell-home"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div className="avatar-home">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <a href="#" className="logoutNav-home" onClick={this.logout}>
                  Logout
                </a>
              </div>
            </div>

            <div className="main-body-home">
              <div className="header-bar-home">
                <h2 style={{ fontSize: '22px' }}>
                  {' '}
                  <span className="underline-home">My p</span>lans
                </h2>
                <Link to="/plan/new" className="new-plan-home">
                  <span
                    className="iconify"
                    data-icon="bx:bx-plus"
                    data-inline="false"
                    style={{
                      marginRight: '10px',
                      marginBottom: '5px',
                      fontSize: '22px',
                    }}
                  ></span>
                  <span className="" style={{ fontSize: '22px' }}>
                    New plan
                  </span>
                </Link>
              </div>
              <div className="plans-body-home">
                <div className="plan-Header-home">
                  <div className="detail-container-home">S/N</div>
                  <div className="detail-container-home">Name</div>
                  <div className="detail-container-home">Auto Deposits</div>
                  <div className="detail-container-home">
                    List Of Properties
                  </div>
                  <div className="detail-container-home">Start Date</div>
                  <div className="detail-container-home">Next Deposit Date</div>
                  <div className="detail-container-actions-home">Actions</div>
                </div>
                {planContainer}
              </div>
            </div>
          </div>
          <div className="footer-home">
            <div className="footer-inner-home"></div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plans: state.plan,
})

const mapDispatchToProps = {
  getPlans,
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)
