import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import "./scss/plans.scss";

class NewPlan extends Component {
  constructor() {
    super();

    this.state = {
      showDepositType: false,
    };

    this.toggleDeposit = this.toggleDeposit.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleDeposit(e) {
    this.setState({ showDepositType: true });
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    let type;
    const { showDepositType } = this.state;
    return (
      <div className="plans-wrapper">
        <div className="sidenav__container-home">
          <div className="sidebar-home sidenav-home">
            <div className="header-title">
              <Link className="logo" to="/">
                Stockpiller
              </Link>
            </div>
            <button className="sidenav-close-home">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links-home">
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-home active-home">
                <span
                  class="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div className="link-home">
                <span
                  class="iconify"
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
                class="iconify"
                data-icon="ic:baseline-dashboard"
                data-inline="false"
              ></span>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="link-home active-home">
              <span
                class="iconify"
                data-icon="bx:bxs-bar-chart-alt-2"
                data-inline="false"
              ></span>
              <Link to="/plans">Plans</Link>
            </div>
            <div className="link-home">
              <span
                class="iconify"
                data-icon="bi:calculator-fill"
                data-inline="false"
              ></span>
              <Link to="/transactions">Transactions</Link>
            </div>
            <div className="link-home">
              <span
                class="iconify"
                data-icon="ri:send-plane-fill"
                data-inline="false"
              ></span>
              <Link to="/withdraw">Withdraw</Link>
            </div>
            <div className="link-home">
              <span
                class="iconify"
                data-icon="vaadin:wallet"
                data-inline="false"
              ></span>
              <Link to="/cards">Cards</Link>
            </div>
            <div className="link-home">
              <span
                class="iconify"
                data-icon="clarity:cog-line"
                data-inline="false"
              ></span>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
          <a className="logout__link-home" href="#" onClick={this.logout}>
            <span
              class="iconify"
              data-icon="ri:logout-box-line"
              data-inline="false"
            ></span>
            Logout
          </a>
        </div>
        <div className="cover-overlay-home"></div>

        <main>
          <div class="main-container-home">
            <div class="main-header-home">
              <div class="open-home">
                <div class="bar-home"></div>
                <div class="bar-home"></div>
                <div class="bar-home"></div>
              </div>
              <a href="#" class="backlink-home">
                <div class="back-home">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  {/* <h2>Back</h2> */}
                </div>
              </a>
              <div class="personalize-home">
                <img
                  class="notification-bell-home"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div class="avatar-home">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <a href="#" class="logoutNav-home" onClick={this.logout}>
                  Logout
                </a>
              </div>
            </div>
            <div class="main-body-home">
              <div class="empty-div-home">
                {!showDepositType && (
                  <div class="add-plan-image-home" onClick={this.toggleDeposit} style={{height: '70vh'}}>
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
                    style={{ display: "flex", height: '70vh' }}
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
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlan);
