import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlans } from '../../store/actions/planActions'
import { logoutUser } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import './scss/withdraw.scss'

class Withdraw extends Component {
  constructor() {
    super()

    this.state = {
      plan_id: '',
    }

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
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
          <select className="select-css" value={plan_id} name="plan_id">
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
    console.log(plans)
    return (
      <div className="withdraw-wrapper">
        <div class="container-withdraw">
          <div class="sidenav__container-withdraw">
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
          <div class="sidebar-withdraw">
            <div className="header-title">
              <Link class="logo-withdraw" to="/">
                Stockpiller
              </Link>
            </div>
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

          <div class="cover-overlay-withdraw"></div>

          <main>
            <div class="main-container-withdraw">
              <div class="main-header-withdraw">
                <div class="open-withdraw">
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
                <form action="" class="plans-withdraw">
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
                          name="connected"
                          id="one"
                          style={{ marginBottom: '3px' }}
                        />
                        <label for="one">&nbsp;&nbsp;One Location</label>
                      </div>

                      <div class="radio-group-withdraw">
                        <input
                          type="radio"
                          name="connected"
                          id="various"
                          style={{ marginBottom: '3px' }}
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
                          class="half-input-withdraw"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-input-full-withdraw"
                      placeholder="Type Your Address"
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
                    />
                  </div>
                  <button class="btn-withdraw plans-submit-withdraw">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="footer-withdraw">
              <div class="footer-inner-withdraw">
                <table class="stocks-withdraw">
                  <tr>
                    <td>Rates</td>
                    <td>Blocks</td>
                    <td>Cement</td>
                  </tr>
                  <tr>
                    <td>Local</td>
                    <td>
                      <img src="../assets/images/Group 44.svg" alt="" />
                      <h3>&#8358 200</h3>
                    </td>
                    <td>
                      <img src="../assets/images/Group 38.svg" alt="" />
                      <h3>&#8358 200</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>Internatinal</td>
                    <td>
                      <img
                        class="down-arrow-withdraw"
                        src="../assets/images/Group 44.svg"
                        alt=""
                      />
                      <h3>$2</h3>
                    </td>
                    <td>
                      <img
                        class="up-arrow-withdraw"
                        src="../assets/images/Group 38.svg"
                        alt=""
                      />
                      <h3>$2</h3>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plans: state.plan,
})

const mapDispatchToProps = {
  logoutUser,
  getPlans,
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw)
