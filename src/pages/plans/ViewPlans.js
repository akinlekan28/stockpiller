import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { getPlan } from "../../store/actions/planActions";
import "./scss/viewplans.scss";

class ViewPlans extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.hamburger = createRef()
    this.sliderClose = createRef()
    this.menuContainer = createRef()
    this.menu = createRef()
    this.overlay = createRef()
  }

  componentDidMount() {
    this.props.getPlan(this.props.match.params.id);
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  openSlider = () => {
    this.overlay.current.style.display = 'block'
    this.menuContainer.current.classList.add('active-viewplans')
    this.menu.current.style.display = 'block'
    setTimeout(() => {
      this.menu.current.classList.add('active-viewplans')
    }, 100)
  }

  closeSlider = () => {
    this.menu.current.classList.remove('active-viewplans')
    this.menu.current.style.display = 'none'
    setTimeout(() => {
      this.menuContainer.current.classList.remove('active-viewplans')
      this.overlay.current.style.display = 'none'
    }, 400)
  }

  render() {
    const { plan, loading } = this.props.plan;
    const formatMoney = (money) => {
      let formatedValue = money
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      return formatedValue;
    };

    let planContainer;

    if (loading || plan === null) {
      planContainer = <h4>Loading...</h4>;
    } else {
      if (Object.keys(plan).length > 0) {
        planContainer = (
          <>
            <div class="header-bar-viewplans">
              <h2>
                {" "}
                <span class="underline-viewplans">{plan.plan_name}</span>
              </h2>
              <div class="header-bar-options-viewplans">
                <div class="header-bar-option-viewplans view-viewplans">
                  <img src="../assets/images/ios-create.svg" alt="" />
                  <Link
                    class="header-bar-option-link-viewplans"
                    to={`/editplans/${this.props.match.params.id}`}
                  >
                    <p class="header-bar-option-text-viewplans">Edit</p>
                  </Link>
                </div>
                <div class="header-bar-option-viewplans cancel-viewplans">
                  <img src="../assets/images/ios-close.svg" alt="" />
                  <Link class="header-bar-option-link-viewplans" to="/plans">
                    <p class="header-bar-option-text-viewplans">Cancel</p>
                  </Link>
                </div>
              </div>
            </div>
            <div class="view-body-viewplans">
              <div class="left-detail-viewplans" >
                <div class="left-detail-Box-viewplans">
                  <h2 class="box-header-viewplans">Balance</h2>
                  <div class="box-block-viewplans giant-viewplans">
                    <div class="groupMe-viewplans">
                      <div class="unit-box-viewplans">
                        <p class="unit-box-header-viewplans">Units of Block</p>
                        <div class="unit-value-viewplans">
                          {plan.block_target}
                        </div>
                      </div>
                      <div class="unit-box-viewplans margin-right-viewplans">
                        <p class="unit-box-header-viewplans">Bags of Cement</p>
                        <div class="unit-value-viewplans">
                          {plan.cement_target}
                        </div>
                      </div>
                    </div>
                    <p class="deposit-viewplans">
                      Auto deposit amount{" "}
                      <span class="green-viewplans">
                        &#8358; {formatMoney(plan.deposit)}
                      </span>
                    </p>
                  </div>

                  <div class="box-block-viewplans">
                    <div class="unit-box-viewplans">
                      <p class="unit-box-header-viewplans">Deposit Frequency</p>
                      <div class="unit-value-viewplans">
                        {plan.deposit_frequency === null
                          ? "Not Available"
                          : plan.deposit_frequency}
                      </div>
                    </div>
                  </div>

                  <div class="box-block-viewplans">
                    <div class="unit-box-viewplans">
                      <p class="unit-box-header-viewplans">Next Deposit Date</p>
                      <div class="unit-value-viewplans">
                        {new Date(plan.next_deposit_date)
                          .toISOString()
                          .substring(0, 10)}
                      </div>
                    </div>
                  </div>

                  {/* <div class="box-block-viewplans">
                    <div class="unit-box-viewplans">
                      <p class="unit-box-header-viewplans">Assigned Card</p>
                      <div class="unit-value-viewplans">GTBank</div>
                    </div>
                  </div> */}
                </div>

                <Link to="/withdraw" class="btn-viewplans">
                  Cash Out
                </Link>

                <p class="warning-viewplans">
                  When you cash out Stokkpile buys the materials accumuated at a
                  40% percent discount rate.
                </p>
              </div>

              {/* {plan.plan_type != "single" && (
                <div class="plans-body-viewplans list-viewplans">
                  <div class="plan-Header-viewplans">
                    <div class="detail-container-viewplans">S/N</div>
                    <div class="detail-container-viewplans">Transaction ID</div>
                    <div class="detail-container-viewplans">Billing Date</div>
                    <div class="detail-container-viewplans">
                      Amount (&#8358)
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">1.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time">00:00</span>{" "}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.000</span>
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">2.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time-viewplans">00:00</span>{" "}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.00</span>
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">3.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time-viewplans">00:00</span>{" "}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.00</span>
                    </div>
                  </div>
                </div>
              )} */}
              {plan.plan_type === "single" && <h4>No transaction history</h4>}
              {/* <div class="plans-body-viewplans invoice-viewplans">
                <div class="invoice-row-viewplans invoice-row-header-viewplans">
                  <div class="left-heading-viewplans">
                    <p class="additonal-info-viewplans">Reciept for</p>
                    <h2>Stokkpile</h2>
                    <p class="additional-info-viewplans">
                      Building your fute house one step at a time
                    </p>
                  </div>
                  <div class="right-heading-viewplans">
                    <h2>INVOICE</h2>
                  </div>
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Transaction ID</p>
                    <p class="value-viewplans">34567890973456</p>
                  </div>
                  <hr />
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Billing Date & Time</p>
                    <p class="value-viewplans">14.09.2019 01:00pm</p>
                  </div>
                  <hr />
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Card Number</p>
                    <p class="value-viewplans">012-xxx-789</p>
                  </div>
                  <hr />
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Block Rate</p>
                    <p class="value-viewplans">200</p>
                  </div>
                  <hr />
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Cement Rate</p>
                    <p class="value-viewplans">100</p>
                  </div>
                  <hr />
                </div>
                <div class="invoice-row-viewplans invoice-detail-viewplans">
                  <div class="exception-viewplans">
                    <p class="detail-viewplans">Amount Deposited</p>
                    <p class="value-viewplans value-price-viewplans">$ 3000</p>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        );
      }
    }

    return (
      <div className="view-plans-wrapper">
        <div className="sidenav__container-viewplans" ref={this.menuContainer}>
          <div className="sidebar-viewplans sidenav-viewplans" ref={this.menu}>
            <div className="header-title">
              <Link className="logo" to="/">
                Stokkpiler
              </Link>
            </div>
            <button className="sidenav-close-viewplans" onClick={this.closeSlider}>
              <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597702029/close_junhc8.svg" />
            </button>
            <div className="links-viewplans">
              <div className="link-viewplans">
                <span
                  class="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-viewplans active-viewplans">
                <span
                  class="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div className="link-viewplans">
                <span
                  class="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="link-viewplans">
                <span
                  class="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className="link-viewplans">
                <span
                  class="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div className="link-viewplans">
                <span
                  class="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a
              className="logout__link-viewplans"
              href="#"
              onClick={this.logout}
            >
              <span
                class="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>{" "}
              Logout
            </a>
          </div>
        </div>
        <div className="sidebar-viewplans">
          <div className="header-title">
            <Link className="logo-viewplans" to="/">
              Stokkpiller
            </Link>
          </div>
          <div className="links-viewplans">
            <div className="link-viewplans">
              <span
                class="iconify"
                data-icon="ic:baseline-dashboard"
                data-inline="false"
              ></span>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="link-viewplans active-viewplans">
              <span
                class="iconify"
                data-icon="bx:bxs-bar-chart-alt-2"
                data-inline="false"
              ></span>
              <Link to="/plans">Plans</Link>
            </div>
            <div className="link-viewplans">
              <span
                class="iconify"
                data-icon="bi:calculator-fill"
                data-inline="false"
              ></span>
              <Link to="/transactions">Transactions</Link>
            </div>
            <div className="link-viewplans">
              <span
                class="iconify"
                data-icon="ri:send-plane-fill"
                data-inline="false"
              ></span>
              <Link to="/withdraw">Withdraw</Link>
            </div>
            <div className="link-viewplans">
              <span
                class="iconify"
                data-icon="vaadin:wallet"
                data-inline="false"
              ></span>
              <Link to="/cards">Cards</Link>
            </div>
            <div className="link-viewplans">
              <span
                class="iconify"
                data-icon="clarity:cog-line"
                data-inline="false"
              ></span>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
          <a className="logout__link-viewplans" href="#" onClick={this.logout}>
            <span
              class="iconify"
              data-icon="ri:logout-box-line"
              data-inline="false"
            ></span>
            Logout
          </a>
        </div>
        <div className="cover-overlay-viewplans" onClick={this.closeSlider}
          ref={this.overlay}></div>

        <main>
          <div class="main-container-viewplans">
            <div class="main-header-viewplans">
              <div class="open-viewplans" onClick={this.openSlider}>
                <div class="bar-viewplans"></div>
                <div class="bar-viewplans"></div>
                <div class="bar-viewplans"></div>
              </div>
              <a href="" class="backlink-viewplans">
                <div class="back-viewplans">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  {/* <h2>Back</h2> */}
                </div>
              </a>
              {/*<table class="stocks-viewplans">
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
                      class="down-arrow-viewplans"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      class="up-arrow-viewplans"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table> */}
              <div class="personalize-viewplans">
                <img
                  class="notification-bell-viewplans"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div class="avatar-viewplans">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <a href="#" class="logoutNav-viewplans" onClick={this.logout}>
                  Logout
                </a>
              </div>
            </div>

            <div class="main-body-viewplans" style={{height: '90vh'}}>
              {planContainer}
              {/* <div class="header-bar-viewplans">
                <h2>
                  {' '}
                  <span class="underline-viewplans">Lagos</span> House
                </h2>
                <div class="header-bar-options-viewplans">
                  <div class="header-bar-option-viewplans view-viewplans">
                    <img src="../assets/images/ios-create.svg" alt="" />
                    <a
                      class="header-bar-option-link-viewplans"
                      href="./editPlans.html"
                    >
                      <p class="header-bar-option-text-viewplans">Edit</p>
                    </a>
                  </div>
                  <div class="header-bar-option-viewplans cancel-viewplans">
                    <img src="../assets/images/ios-close.svg" alt="" />
                    <Link class="header-bar-option-link-viewplans" to="/plans">
                      <p class="header-bar-option-text-viewplans">Cancel</p>
                    </Link>
                  </div>
                </div>
              </div> */}

              {/* <div class="view-body-viewplans">
                <div class="left-detail-viewplans">
                  <div class="left-detail-Box-viewplans">
                    <h2 class="box-header-viewplans">Balance</h2>
                    <div class="box-block-viewplans giant-viewplans">
                      <div class="groupMe-viewplans">
                        <div class="unit-box-viewplans">
                          <p class="unit-box-header-viewplans">
                            Units of Block
                          </p>
                          <div class="unit-value-viewplans">2000</div>
                        </div>
                        <div class="unit-box-viewplans margin-right-viewplans">
                          <p class="unit-box-header-viewplans">
                            Bags of Cement
                          </p>
                          <div class="unit-value-viewplans">100</div>
                        </div>
                      </div>
                      <p class="deposit-viewplans">
                        Auto deposit amount{' '}
                        <span class="green-viewplans">&#8358 50,000.00</span>
                      </p>
                    </div>

                    <div class="box-block-viewplans">
                      <div class="unit-box-viewplans">
                        <p class="unit-box-header-viewplans">
                          Deposit Frequency
                        </p>
                        <div class="unit-value-viewplans">Monthly</div>
                      </div>
                    </div>

                    <div class="box-block-viewplans">
                      <div class="unit-box-viewplans">
                        <p class="unit-box-header-viewplans">
                          Next Deposit Date
                        </p>
                        <div class="unit-value-viewplans">12-jan-2019</div>
                      </div>
                    </div>

                    <div class="box-block-viewplans">
                      <div class="unit-box-viewplans">
                        <p class="unit-box-header-viewplans">Assigned Card</p>
                        <div class="unit-value-viewplans">GTBank</div>
                      </div>
                    </div>
                  </div>

                  <button class="btn-viewplans">Cash Out</button>

                  <p class="warning-viewplans">
                    When you cash out Stokkpile buys the materials accumuated at
                    a 40% percent discount rate.
                  </p>
                </div>

                <div class="plans-body-viewplans list-viewplans">
                  <div class="plan-Header-viewplans">
                    <div class="detail-container-viewplans">S/N</div>
                    <div class="detail-container-viewplans">Transaction ID</div>
                    <div class="detail-container-viewplans">Billing Date</div>
                    <div class="detail-container-viewplans">
                      Amount (&#8358)
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">1.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time">00:00</span>{' '}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.000</span>
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">2.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time-viewplans">00:00</span>{' '}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.00</span>
                    </div>
                  </div>

                  <div class="plan-group-viewplans">
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">S/N :</p>
                      <span class="response-viewplans">3.</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans">Transaction ID:</p>
                      <span class="response-viewplans">3456480975657IF</span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Biling Date: </p>
                      <span class="response-viewplans">
                        14.09.2019<span class="time-viewplans">00:00</span>{' '}
                      </span>
                    </div>
                    <div class="detail-container-viewplans">
                      <p class="tag-viewplans"> Amount (&#8358) </p>
                      <span class="response-viewplans">3,000.00</span>
                    </div>
                  </div>
                </div>
                <div class="plans-body-viewplans invoice-viewplans">
                  <div class="invoice-row-viewplans invoice-row-header-viewplans">
                    <div class="left-heading-viewplans">
                      <p class="additonal-info-viewplans">Reciept for</p>
                      <h2>Stokkpile</h2>
                      <p class="additional-info-viewplans">
                        Building your fute house one step at a time
                      </p>
                    </div>
                    <div class="right-heading-viewplans">
                      <h2>INVOICE</h2>
                    </div>
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Transaction ID</p>
                      <p class="value-viewplans">34567890973456</p>
                    </div>
                    <hr />
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Billing Date & Time</p>
                      <p class="value-viewplans">14.09.2019 01:00pm</p>
                    </div>
                    <hr />
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Card Number</p>
                      <p class="value-viewplans">012-xxx-789</p>
                    </div>
                    <hr />
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Block Rate</p>
                      <p class="value-viewplans">200</p>
                    </div>
                    <hr />
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Cement Rate</p>
                      <p class="value-viewplans">100</p>
                    </div>
                    <hr />
                  </div>
                  <div class="invoice-row-viewplans invoice-detail-viewplans">
                    <div class="exception-viewplans">
                      <p class="detail-viewplans">Amount Deposited</p>
                      <p class="value-viewplans value-price-viewplans">
                        $ 3000
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="footer-viewplans">
            <div class="footer-inner-viewplans">
              {/* <table class="stocks-viewplans">
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
                      class="down-arrow-viewplans"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      class="up-arrow-viewplans"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table> */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  plan: state.plan,
});

const mapDispatchToProps = {
  logoutUser,
  getPlan,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlans);
