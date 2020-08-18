import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { getPlans } from '../../store/actions/planActions'
import { logoutUser } from '../../store/actions/authActions'
import { withdrawPlan } from '../../store/actions/planActions'
import { Link } from 'react-router-dom'
import './scss/withdraw.scss'

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
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    this.props.withdrawPlan(formData)
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err))
  }

  render() {
    const { loading, plans } = this.props.plans
    const { plan_id } = this.state

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
    const { isVarious, isSingle } = this.state
    return (
      <div className="withdraw-wrapper">
        <div class="container-withdraw">
          <div class="sidenav__container-withdraw" ref={this.menuContainer}>
            <div class="sidebar-withdraw sidenav-withdraw">
              <div className="header-title">
                <Link class="logo" to="/">
                  Stockpiller
                </Link>
              </div>
              <button class="sidenav-close-withdraw">
                <img src="../assets/images/close.svg" />
              </button>
              <div class="links-withdraw">
                <div className="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div className="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div className="link-withdraw active-withdraw">
                  <span
                    className="iconify"
                    data-icon="ri:send-plane-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/withdraw">Withdraw</Link>
                </div>
                <div class="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div class="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="clarity:cog-line"
                    data-inline="false"
                  ></span>
                  <Link to="/settings">Settings</Link>
                </div>
              </div>

              <a
                className="logout__link-withdraw"
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
          </div>
          <div class="sidebar-withdraw" ref={this.menu}>
            <div className="header-title">
              <Link class="logo-withdraw" to="/">
                Stockpiller
              </Link>
            </div>
            <button
              className="sidenav-close-withdraw"
              onClick={this.closeSlider}
            >
              <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597702029/close_junhc8.svg" />
            </button>
            <div class="links-withdraw">
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div class="link-withdraw active-withdraw">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a className="logout__link-withdraw" href="#" onClick={this.logout}>
              <span
                className="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>
              Logout
            </a>
          </div>

          <div
            class="cover-overlay-withdraw"
            onClick={this.closeSlider}
            ref={this.overlay}
          ></div>

          <main>
            <div class="main-container-withdraw">
              <div class="main-header-withdraw">
                <div class="open-withdraw" onClick={this.openSlider}>
                  <div class="bar-withdraw"></div>
                  <div class="bar-withdraw"></div>
                  <div class="bar-withdraw"></div>
                </div>
                <a href="#" class="backlink-withdraw">
                  <div class="back-withdraw">
                    <img src="../assets/images/Path 3 Copy.svg" alt="" />
                    {/* <h2>Back</h2> */}
                  </div>
                </a>

                <div class="personalize-withdraw">
                  <img
                    class="notification-bell-withdraw"
                    src="../assets/images/Group 3.svg"
                    alt=""
                  />
                  <div class="avatar-withdraw">
                    <img src="../assets/images/Oval.svg" alt="" />
                  </div>
                  <a href="#" class="logoutNav-withdraw" onClick={this.logout}>
                    Logout
                  </a>
                </div>
              </div>

              <div class="main-body-withdraw">
                <form action="" class="plans-withdraw" onSubmit={this.onSubmit}>
                  <div class="form-group-full-withdraw">
                    <div className="select select--inline form-group">
                      <div class="form-group-header-withdraw">
                        <h2>Select Plan </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="ast">*</span>
                      </div>
                      {planSelector}
                      <br />
                      <div class="checkbox-div">
                        <input type="checkbox" id="checkMe" />
                        <label for="checkMe">
                          &nbsp;&nbsp; Click here to schedule for material's
                          delivery to your construction site by our pick up
                          agents
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group-full-withdraw">
                    <div class="form-group-header-withdraw">
                      <h2>Choose Location</h2>
                    </div>
                    <div class="select-group-withdraw">
                      <div class="radio-group-withdraw">
                        <input
                          type="radio"
                          name="location_type"
                          id="one"
                          style={{ marginBottom: '3px' }}
                          onChange={() =>
                            this.setState({ isSingle: !isSingle })
                          }
                          checked={isSingle}
                          value={isSingle ? isSingle : isVarious}
                        />
                        <label for="one">&nbsp;&nbsp;One Location</label>
                      </div>

                      <div class="radio-group-withdraw">
                        <input
                          type="radio"
                          name="location_type"
                          id="various"
                          style={{ marginBottom: '3px' }}
                          onChange={() =>
                            this.setState({ isVarious: !isVarious })
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
                  <div class="form-group-full-withdraw">
                    <div class="form-group-header-withdraw">
                      <h2>Location</h2>
                    </div>
                    <div class="units-of-withdraw">
                      <div class="half-groups-withdraw">
                        <label for="blocks-unit">Unit of Blocks</label>
                        <input
                          type="number"
                          min="1"
                          name="block_target"
                          value={this.state.block_target}
                          onChange={this.onChange}
                          id="blocks-unit"
                          class="half-input-withdraw"
                        />
                      </div>

                      <div class="half-groups-withdraw">
                        <label for="cement-unit">Bags of Cement</label>
                        <input
                          type="number"
                          min="1"
                          id="cement-unit"
                          name="cement_target"
                          value={this.state.cement_target}
                          onChange={this.onChange}
                          class="half-input-withdraw"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-input-full-withdraw"
                      placeholder="Type Your Address"
                      name="address"
                      onChange={this.onChange}
                      value={this.state.address}
                    />
                    {/* <a href="/extra-location" class="add-location-withdraw">
                      Add Another Address
                    </a> */}
                  </div>
                  <div class="form-group-full-withdraw">
                    <div class="form-group-header-withdraw">
                      <h2>Password</h2>
                    </div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      class="form-input-full-withdraw"
                      name="password"
                      onChange={this.onChange}
                      value={this.state.password}
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn-withdraw plans-submit-withdraw"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="footer-withdraw">
              <div class="footer-inner-withdraw"></div>
            </div>
          </main>
        </div>
      </div>
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
