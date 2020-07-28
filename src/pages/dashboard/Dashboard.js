import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import "./scss/nav.scss";
import "./scss/dashboard.scss";

class Dashboard extends Component {
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
      <div className="dashboard-wrapper">
        <div className="container-dashboard">
          <div class="sidenav__container-dashboard ">
            <div class="sidebar-dashboard sidenav-dashboard">
              <Link class="logo-dashboard" to="/">
                Laybuy
              </Link>
              <button class="sidenav-close-dashboard">
                <img src="../assets/images/close.svg" />
              </button>
              <div class="links-dashboard">
                <div class="link-dashboard">
                  <span
                    class="iconify"
                    data-icon="fa-regular:building"
                    data-inline="false"
                  ></span>
                  <Link to="/home">Home</Link>
                </div>
                <div class="link-dashboard active-dashboard">
                  <span
                    class="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div class="link-dashboard">
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
          <div class="sidebar-dashboard">
            <Link class="logo-dashboard" to="/">
              Laybuy
            </Link>
            <div class="links-dashboard">
              <div class="link-dashboard">
                <span
                  class="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
              <div class="link-dashboard active-dashboard">
                <span
                  class="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div class="link-dashboard">
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

          <div class="main-dashboard">
            <div class="top-dashboard">
              <button class="sidenav-btn-dashboard">
                <div class="bar-dashboard"></div>
                <div class="bar-dashboard"></div>
                <div class="bar-dashboard"></div>
              </button>
              <div class="back-dashboard">
                <img src="../assets/images/back.svg" alt="" />
                <a href="">Back</a>
              </div>
              <table class="rates-dashboard top">
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
              </table>
              <div class="user-controls-dashboard">
                <div class="notifications-dashboard">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div class="user-dashboard">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button class="logout-dashboard" onClick={this.logout}>Logout</button>
              </div>
            </div>
            <Link class="new-plan-dashboard" to="/plan/new">
              New Plans
            </Link>
            <div class="cards-dashboard">
              <div class="card-dashboard brown-dashboard">
                <div class="header-dashboard">Lagos House</div>
                <div class="content-dashboard">
                  <div class="content__properties-dashboard">
                    <p class="content__properties__header-dashboard">
                      List of Properties
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Units of Block</span>
                      <span class="amount-dashboard">1000/</span>
                      <span class="target-amount-dashboard">2000</span>
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Bags of Cement</span>
                      <span class="amount-dashboard">26/</span>
                      <span class="target-amount-dashboard">100</span>
                    </p>
                  </div>
                  <div class="content__amount__deposited-dashboard">
                    <p class="content__amount__deposited__header-dashboard">
                      Amount deposited
                    </p>
                    <p class="amount-dashboard">₦10,000</p>
                  </div>
                </div>
              </div>
              <div class="card-dashboard blue-dashboard">
                <div class="header-dashboard">America's House</div>
                <div class="content-dashboard">
                  <div class="content__properties-dashboard">
                    <p class="content__properties__header-dashboard">
                      List of Properties
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Units of Block</span>
                      <span class="amount-dashboard">1000/</span>
                      <span class="target-amount-dashboard">2000</span>
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Bags of Cement</span>
                      <span class="amount-dashboard">26/</span>
                      <span class="target-amount-dashboard">100</span>
                    </p>
                  </div>
                  <div class="content__amount__deposited-dashboard">
                    <p class="content__amount__deposited__header-dashboard">
                      Amount deposited
                    </p>
                    <p class="amount-dashboard">₦10,000</p>
                  </div>
                </div>
              </div>
              <div class="card-dashboard pink-dashboard">
                <div class="header-dashboard">Kenya House</div>
                <div class="content-dashboard">
                  <div class="content__properties-dashboard">
                    <p class="content__properties__header-dashboard">
                      List of Properties
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Units of Block</span>
                      <span class="amount-dashboard">1000/</span>
                      <span class="target-amount-dashboard">2000</span>
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Bags of Cement</span>
                      <span class="amount-dashboard">26/</span>
                      <span class="target-amount-dashboard">100</span>
                    </p>
                  </div>
                  <div class="content__amount__deposited-dashboard">
                    <p class="content__amount__deposited__header-dashboard">
                      Amount deposited
                    </p>
                    <p class="amount-dashboard">₦10,000</p>
                  </div>
                </div>
              </div>
              <div class="card-dashboard green-dashboard">
                <div class="header-dashboard">Kenya Office</div>
                <div class="content-dashboard">
                  <div class="content__properties-dashboard">
                    <p class="content__properties__header-dashboard">
                      List of Properties
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Units of Block</span>
                      <span class="amount-dashboard">1000/</span>
                      <span class="target-amount-dashboard">2000</span>
                    </p>
                    <p class="content__properties__details-dashboard">
                      <span class="title-dashboard">Bags of Cement</span>
                      <span class="amount-dashboard">26/</span>
                      <span class="target-amount-dashboard">100</span>
                    </p>
                  </div>
                  <div class="content__amount__deposited-dashboard">
                    <p class="content__amount__deposited__header-dashboard">
                      Amount deposited
                    </p>
                    <p class="amount-dashboard">₦10,000</p>
                  </div>
                </div>
              </div>
            </div>
            <table class="rates-dashboard bottom-dashboard">
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
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
