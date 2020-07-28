import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import "./home.scss";

class Home extends Component {
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
      <div className="home-wrapper-screen">
        <div className="sidenav__container-home">
          <div className="sidebar-home sidenav-home">
            <Link className="logo" to="/">
              Laybuy
            </Link>
            <button className="sidenav-close-home">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links-home active-home">
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
              <div className="link-home">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-home">
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
        </div>
        <div className="sidebar-home">
          <Link className="logo-home" to="/">
          Laybuy
          </Link>
          <div className="links-home">
            <div className="link-home active-home">
              <span
                className="iconify"
                data-icon="fa-regular:building"
                data-inline="false"
              ></span>
              <Link to="/home">Home</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="ic:baseline-dashboard"
                data-inline="false"
              ></span>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="link-home">
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
        <div className="cover-overlay-home"></div>

        <main>
          <div className="main-container-home">
            <div className="main-header-home">
              <div className="open-home">
                <div className="bar-home"></div>
                <div className="bar-home"></div>
                <div className="bar-home"></div>
              </div>
              <a href="http://" className="backlink-home">
                <div className="back-home">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  <h2>Back</h2>
                </div>
              </a>
              <table className="stocks-home">
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
                      className="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      className="up-arrow-home"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table>
              <div className="personalize-home">
                <img
                  className="notification-bell-home"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div className="avatar-home">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <p className="logoutNav-home" onClick={this.logout}>
                  Logout
                </p>
              </div>
            </div>

            <div className="main-body-home">
              <div className="steps-row-home">
                <div className="step-group-home type-1-home">
                  <div className="step-card-home yellow-home">
                    <h2>Step 1</h2>
                    <p>
                      Click on the{" "}
                      <span className="emphasis-home">Add New Plan Button</span>
                    </p>

                    <Link to="/plan/new" className="btn-link-home">
                      Add new plan
                    </Link>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803215/Group_94_wn0il2.svg"
                      alt="nav"
                      className="point-forward-home forwards-home"
                    />
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803340/Group_96_lazd0i.svg"
                      alt="nav"
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-1-home">
                  <div className="step-card-home pink-home">
                    <h2>Step 2</h2>
                    <p>Fill the form for the new plan</p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803215/Group_94_wn0il2.svg"
                      alt="nav"
                      className="point-backwards-home forwards-home"
                    />
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803340/Group_96_lazd0i.svg"
                      alt="nav"
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-2-home">
                  <div className="step-card-home blue-home">
                    <h2>Step 3</h2>
                    <p>
                      Add a valid debit card before you finish filling the new
                      plan form.
                    </p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803340/Group_96_lazd0i.svg"
                      alt=""
                      className="point-downawrd-home"
                    />
                  </div>
                </div>
              </div>
              <div className="steps-row-home reverse-home">
                <div className="step-group-home type-3-home">
                  <div className="step-card-home purple-home">
                    <h2>Step 6</h2>
                    <p>
                      Enjoying the depositing ride to withdraw building
                      materials in the future.
                    </p>
                  </div>
                  <div className="directional-arrow-home six-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803477/Group_95_eocjtk.svg"
                      alt=""
                      className="point-backwards-home forwards-home"
                    />
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803340/Group_96_lazd0i.svg"
                      alt=""
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-3-home">
                  <div className="step-card-home cyan-home">
                    <h2>Step 5</h2>
                    <p>Check our dashboard to see you updated plan</p>

                    <Link to="/dashboard" className="btn-link-home">
                      Dashboard
                    </Link>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803477/Group_95_eocjtk.svg"
                      alt=""
                      className="point-backwards-home forwards-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-2-home">
                  <div className="step-card-home green-home">
                    <h2>Step 4</h2>
                    <p>Submit the form</p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594803340/Group_96_lazd0i.svg"
                      alt=""
                      className="point-backwards-home down-home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-home">
            <div className="footer-inner-home">
              <table className="stocks-home">
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
                      className="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      className="up-arrow-home"
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
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logoutUser })(Home);
