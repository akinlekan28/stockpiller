import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import './scss/withdraw.scss'

class Withdraw extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    return (
      <div className="withdraw-wrapper">
        <div class="container-withdraw">
          <div class="sidenav__container-withdraw">
            <div class="sidebar-withdraw sidenav-withdraw">
              <Link class="logo" to="/">
              Laybuy
              </Link>
              <button class="sidenav-close-withdraw">
                <img src="../assets/images/close.svg" />
              </button>
              <div class="links-withdraw">
                <div className="link-withdraw">
                  <span
                    className="iconify"
                    data-icon="fa-regular:building"
                    data-inline="false"
                  ></span>
                  <Link to="/home">Home</Link>
                </div>
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
            <Link class="logo-withdraw" to="/">
            Laybuy
            </Link>
            <div class="links-withdraw">
              <div class="link-withdraw">
                <span
                  className="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
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
            <div class="overlay-withdraw">
              <div class="withdrawal-confirmation-withdraw">
                <div class="confirmation-header-withdraw">
                  <h2>
                    {" "}
                    <span class="underline-withdraw">WITH</span>DRAWAL
                    CONFIRMATION
                  </h2>
                  <img
                    src="../assets/images/cancel.svg"
                    class="x-button-withdraw"
                    alt=""
                  />
                </div>
                <div class="confirmation-body-withdraw">
                  <table class="popup-withdraw">
                    <thead>
                      <tr>
                        <th class="top-cell-withdraw left-cell-withdraw">
                          Plan Name
                        </th>
                        <th class="top-cell-withdraw">
                          Materials to be withdrawn
                        </th>
                        <th class="top-cell-withdraw right-cell-withdraw">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody class="rows-withdraw">
                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>

                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>

                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>

                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>

                      <tr>
                        <td class="left-cell-withdraw">Lagos House</td>
                        <td>
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="left-cell-withdraw bottom-cell-withdraw">
                          Lagos House
                        </td>
                        <td class="bottom-cell-withdraw">
                          <p>100 Bags of Cement</p>
                          <p>700 Units of Blocks</p>
                        </td>
                        <td class="right-cell-withdraw bottom-cell-withdraw">
                          <p>4, samuel Elegushi street, Lagos</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button class="confirm-withdraw">Confirm</button>
              </div>
              <div class="notify-img-container-withdraw">
                <img
                  src="../assets/images/cancel.svg"
                  class="close-img-withdraw x-button-withdraw"
                  alt=""
                />
                <img
                  src="../assets/images/Group 82.svg"
                  alt="success-img"
                  class="notify-img success-img-withdraw"
                />
                <img
                  src="../assets/images/Group 86.svg"
                  alt="failed-img"
                  class="notify-img failed-img-withdraw"
                />
              </div>
            </div>

            <div class="main-container-withdraw">
              <div class="main-header-withdraw">
                <div class="open-withdraw">
                  <div class="bar-withdraw"></div>
                  <div class="bar-withdraw"></div>
                  <div class="bar-withdraw"></div>
                </div>
                <a href="http://" class="backlink-withdraw">
                  <div class="back-withdraw">
                    <img src="../assets/images/Path 3 Copy.svg" alt="" />
                    <h2>Back</h2>
                  </div>
                </a>
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

                <div class="personalize-withdraw">
                  <img
                    class="notification-bell-withdraw"
                    src="../assets/images/Group 3.svg"
                    alt=""
                  />
                  <div class="avatar-withdraw">
                    <img src="../assets/images/Oval.svg" alt="" />
                  </div>
                  <a href="/logout" class="logoutNav-withdraw">
                    Logout
                  </a>
                </div>
              </div>

              <div class="main-body-withdraw">
                <form action="" class="plans-withdraw">
                  <div class="form-group-full-withdraw">
                  <div className="select select--inline form-group custom-select">
                    <div class="form-group-header-withdraw">
                      <h2>Select Plan </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="ast">*</span>
                    </div>
                    <select className="select-css" value={""}>
                      <option value="">Select country</option>
                      <option value="0">Plan 1</option>
                      <option value="1">Plan 2</option>
                      <option value="2">Plan 3</option>
                    </select>
                    <br/>
                    <div class="checkbox-div">
                      <input type="checkbox" id="checkMe" />
                      <label for="checkMe">&nbsp;&nbsp;
                        Click here to schedule for material's delivery to your
                        construction site by our pick up agents
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
                        <input type="radio" name="connected" id="one" style={{marginBottom: '3px'}} />
                        <label for="one">&nbsp;&nbsp;One Location</label>
                      </div>

                      <div class="radio-group-withdraw">
                        <input type="radio" name="connected" id="various" style={{marginBottom: '3px'}} />
                        <label for="various">&nbsp;&nbsp;Various Locations</label>
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
                    <input type="password" placeholder="Enter Password" class="form-input-full-withdraw" />
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
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
