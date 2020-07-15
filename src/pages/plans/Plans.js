import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './plans.scss'

class Plans extends Component {
  render() {
    return (
      <div className="plans-wrapper">
        <div className="sidenav__container-home">
          <div className="sidebar-home sidenav-home">
            <Link className="logo" to="/">
              Stokkpile
            </Link>
            <button className="sidenav-close-home">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links-home">
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
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
            <a className="logout__link-home" href="./login.html">
              <img src="../assets/images/logout.svg" /> Logout
            </a>
          </div>
        </div>
        <div className="sidebar-home">
          <Link className="logo-home" to="/">
            Stokkpile
          </Link>
          <div className="links-home">
            <div className="link-home">
              <span
                class="iconify"
                data-icon="fa-regular:building"
                data-inline="false"
              ></span>
              <Link to="/home">Home</Link>
            </div>
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
          <a className="logout__link-home" href="/login">
            <span
              class="iconify"
              data-icon="ri:logout-box-line"
              data-inline="false"
            ></span>{' '}
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
              <a href="http://" class="backlink-home">
                <div class="back-home">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  <h2>Back</h2>
                </div>
              </a>
              <table class="stocks-home">
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
                      class="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      class="up-arrow-home"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table>
              <div class="personalize-home">
                <img
                  class="notification-bell-home"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div class="avatar-home">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <a href="./logout" class="logoutNav-home">
                  Logout
                </a>
              </div>
            </div>

            <div class="main-body-home">
              <div class="header-bar-home">
                <h2>
                  {' '}
                  <span class="underline-home">My p</span>lans
                </h2>
                <Link to="/plan/new" class="new-plan-home">
                  <span
                    class="iconify"
                    data-icon="bx:bx-plus"
                    data-inline="false"
                    style={{ marginRight: '10px', marginBottom: '-2px' }}
                  ></span>
                  <span class="">New plan</span>
                </Link>
              </div>
              <div class="plans-body-home">
                <div class="plan-Header-home">
                  <div class="detail-container-home">S/N</div>
                  <div class="detail-container-home">Name</div>
                  <div class="detail-container-home">Auto Deposits</div>
                  <div class="detail-container-home">List Of Properties</div>
                  <div class="detail-container-home">Start Date</div>
                  <div class="detail-container-home">Next Deposit Date</div>
                  <div class="detail-container-actions-home">Actions</div>
                </div>

                <div class="plan-group-home">
                  <div class="detail-container-home">
                    <p class="tag-home">S/N :</p>
                    <span class="response-home">1</span>
                  </div>
                  <div class="detail-container-home">
                    <p class="tag-home">Name:</p>
                    <span class="response-home">Lagos House</span>
                  </div>
                  <div class="detail-container-home">
                    <p class="tag-home"> Auto Deposits </p>
                    <span class="response-home">50,000.00</span>
                  </div>
                  <div class="detail-container-home">
                    <p class="tag-home"> List Of Properties: </p>
                    <span class="response-home">
                      <p>100 units of blocks</p>
                      <p>50 bags of Cement</p>
                    </span>
                  </div>
                  <div class="detail-container-home">
                    <p class="tag-home"> Start Date: </p>
                    <span class="response-home">12-jan-2019</span>
                  </div>
                  <div class="detail-container-home">
                    <p class="tag-home"> Next Deposit Date: </p>
                    <span class="response-home">12-jan-2019</span>
                  </div>
                  <div class="detail-container-actions-home">
                    <Link to="/editplans">
                      <span
                        class="iconify"
                        data-icon="noto:fountain-pen"
                        data-inline="false"
                      ></span>
                    </Link>
                    <Link to="/viewplan">
                      <span
                        class="iconify"
                        data-icon="bi:eye-fill"
                        data-inline="false"
                      ></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-home">
            <div class="footer-inner-home">
              <table class="stocks-home">
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
                      class="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      class="up-arrow-home"
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
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Plans)
