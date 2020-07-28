import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import "./scss/transaction.scss";

class Transactions extends Component {
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
      <div className="transaction-wrapper">
        <div className="container-transaction">
          <div className="sidenav__container-transaction">
            <div className="sidebar-transaction sidenav-transaction">
              <Link className="logo-transaction" to="/">
              Laybuy
              </Link>
              <button className="sidenav-close-transaction">
                <img src="../assets/images/close.svg" />
              </button>
              <div className="links-transaction">
                <div className="link-transaction">
                  <span
                    className="iconify"
                    data-icon="fa-regular:building"
                    data-inline="false"
                  ></span>
                  <Link to="/home">Home</Link>
                </div>
                <div className="link-transaction">
                  <span
                    className="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="link-transaction active-transaction">
                  <span
                    className="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div className="link-transaction">
                  <span
                    className="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div className="link-transaction">
                  <span
                    className="iconify"
                    data-icon="ri:send-plane-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/withdraw">Withdraw</Link>
                </div>
                <div class="link-transaction">
                  <span
                    className="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div className="link-transaction">
                  <span
                    className="iconify"
                    data-icon="clarity:cog-line"
                    data-inline="false"
                  ></span>
                  <Link to="/settings">Settings</Link>
                </div>
              </div>
              <a
                className="logout__link-transaction"
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
          <div className="sidebar-transaction">
            <Link className="logo-transaction" to="/">
            Laybuy
            </Link>
            <div className="links-transaction">
              <div class="link-transaction">
                <span
                  className="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
              <div className="link-transaction">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="link-transaction">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div className="link-transaction active-transaction">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="link-transaction">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className="link-transaction">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div className="link-transaction">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a
              className="logout__link-transaction"
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
          <div className="main-transaction">
            <div className="top-transaction">
              <button className="sidenav-btn-transaction">
                <div className="bar-transaction"></div>
                <div className="bar-transaction"></div>
                <div className="bar-transaction"></div>
              </button>

              <div className="back-transaction">
                <img src="../assets/images/back.svg" alt="" />
                <a href="">Back</a>
              </div>
              <table class="rates-transaction top">
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
              <div className="user-controls-transaction">
                <div className="notifications-transaction">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div className="user-transaction">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button className="logout-transaction" onClick={this.logout}>
                  Logout
                </button>
              </div>
            </div>

            <div className="content-transaction">
              <div className="cards-transaction">
                <div className="total-amount-transaction">
                  <p className="header-transaction">Total Amount Deposited</p>
                  <span className="line-h-transaction"></span>
                  <p className="bold-transaction">N2,000,000</p>
                </div>
                <div className="materials-withdrawn-transaction">
                  <p className="header-transaction">Materials Withdrawn</p>
                  <span className="line-h-transaction"></span>
                  <div className="grid-transaction">
                    <div>
                      <p className="light-transaction">Units of Block</p>
                      <p className="bold-transaction">14,000</p>
                    </div>
                    <div>
                      <p className="light-transaction">Bags of cement</p>
                      <p className="bold-transaction">200</p>
                    </div>
                  </div>
                </div>
                <div className="materials-left-transaction">
                  <p className="header-transaction">Materials Left</p>
                  <span className="line-h-transaction"></span>
                  <div className="grid-transaction">
                    <div>
                      <p className="light-transaction">Units of Block</p>
                      <p className="bold-transaction">14,000</p>
                    </div>
                    <div>
                      <p className="light-transaction">Bags of cement</p>
                      <p className="bold-transaction">200</p>
                    </div>
                  </div>
                </div>
                <Link to="/plan/new" className="add-plan-transaction">
                  <button>
                    <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595208746/ios-add_bfykkz.svg" />
                  </button>
                  <p>Create a deposit plan</p>
                </Link>
              </div>
              <div className="download-pdf-transaction">
                <span>
                  RECENT TRANSACTIONS
                  <span className="line-transaction"></span>
                </span>
                <button>Download (PDF)</button>
              </div>
              <div className="transactions-transaction">
                <div className="transactions__header-transaction">
                  <p>Billing Date</p>
                  <p>Transaction ID</p>
                  <p>Materials Withdrawn</p>
                  <p>Amount</p>
                  <p>Status</p>
                </div>
                <p className="transactions__header__small-transaction">
                  TRANSACTIONS
                </p>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -{" "}
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -{" "}
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -{" "}
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -{" "}
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -{" "}
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
                <div className="transaction-transaction withdraw-transaction">
                  <p>
                    <span className="label-transaction">Billing Date</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    <span>100 Bags of cement</span>
                    <span className="br-transaction"></span>
                    7,000 Units of Blocks
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> -
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Debit
                  </p>
                </div>
                <div className="transaction-transaction withdraw-transaction">
                  <p>
                    <span className="label-transaction">Billing Date</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    <span>
                      100 Bags of cement
                      <span className="br-transaction"></span>
                      7,000 Units of Blocks
                    </span>
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> -
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Debit
                  </p>
                </div>
                <div className="transaction-transaction deposit-transaction">
                  <p>
                    <span className="label-transaction">Billing Date:</span>{" "}
                    14.09.2019 00:00
                  </p>
                  <p>
                    <span className="label-transaction">Transaction ID:</span>{" "}
                    345648097657IF
                  </p>
                  <p>
                    <span className="label-transaction">
                      Materials Withdrawn:
                    </span>
                    -
                  </p>
                  <p>
                    <span className="label-transaction">Amount:</span> N2,000.00
                  </p>
                  <p>
                    <span className="label-transaction">Status:</span> Paid
                  </p>
                </div>
              </div>
              <table className="rates-transaction bottom-transaction">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
