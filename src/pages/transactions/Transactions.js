import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import { getTransactions } from "../../store/actions/transactionActions";
import { Link } from "react-router-dom";
import Skeleton from "@yisheng90/react-loading";
import "./scss/transaction.scss";

class Transactions extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    const { transactions, loading } = this.props.transactions;

    let transactionContainer, transactionTable;

    if (loading) {
      transactionContainer = (
        <>
          <div className="total-amount-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={30} />
          </div>
          <div className="materials-withdrawn-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={30} />
          </div>
          <div className="materials-left-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={30} />
          </div>
        </>
      );

      transactionTable = (
        <>
          <div className="transaction-transaction deposit-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </div>
          <div className="transaction-transaction deposit-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </div>
          <div className="transaction-transaction deposit-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </div>
          <div className="transaction-transaction deposit-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </div>
          <div className="transaction-transaction deposit-transaction">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </div>
        </>
      );
    } else if (Object.keys(transactions).length > 0) {
      transactionContainer = (
        <>
          <div className="total-amount-transaction">
            <p className="header-transaction">Total Amount Deposited</p>
            <span className="line-h-transaction"></span>
            <p className="bold-transaction">N{transactions.total_paid}</p>
          </div>
          <div className="materials-withdrawn-transaction">
            <p className="header-transaction">Materials Withdrawn</p>
            <span className="line-h-transaction"></span>
            <div className="grid-transaction">
              <div>
                <p className="light-transaction">Units of Block</p>
                <p className="bold-transaction">
                  {transactions.material_withdrawn.blocks}
                </p>
              </div>
              <div>
                <p className="light-transaction">Bags of cement</p>
                <p className="bold-transaction">
                  {transactions.material_withdrawn.cements}
                </p>
              </div>
            </div>
          </div>
          <div className="materials-left-transaction">
            <p className="header-transaction">Materials Left</p>
            <span className="line-h-transaction"></span>
            <div className="grid-transaction">
              <div>
                <p className="light-transaction">Units of Block</p>
                <p className="bold-transaction">
                  {transactions.material_deposited.blocks}
                </p>
              </div>
              <div>
                <p className="light-transaction">Bags of cement</p>
                <p className="bold-transaction">
                  {transactions.material_deposited.cements}
                </p>
              </div>
            </div>
          </div>
        </>
      );
      transactionTable = transactions.transactions.map((t, index) => (
        <React.Fragment key={index}>
          {t.type === "credit" && (
            <div className="transaction-transaction deposit-transaction">
              <p>
                <span className="label-transaction">Billing Date:</span>{" "}
                {t.created_at}
              </p>
              <p>
                <span className="label-transaction">Transaction ID:</span>{" "}
                {t.reference}
              </p>
              <p>
                <span className="label-transaction">Materials Withdrawn:</span>-{" "}
              </p>
              <p>
                <span className="label-transaction">Amount:</span>N {t.amount}
              </p>
              <p>
                <span className="label-transaction">Status:</span>{" "}
                {t.completed === 1 ? "Paid" : "Not Paid"}
              </p>
            </div>
          )}
          {t.type !== "credit" && (
            <div className="transaction-transaction withdraw-transaction">
              <p>
                <span className="label-transaction">Billing Date</span>{" "}
                {t.created_at}
              </p>
              <p>
                <span className="label-transaction">Transaction ID</span>{" "}
                {t.reference}
              </p>
              <p>
                <span className="label-transaction">Materials Withdrawn:</span>
                <span>
                  {t.cement} Bags of cement
                  <span className="br-transaction"></span>
                  {t.block} Units of Blocks
                </span>
              </p>
              <p>
                <span className="label-transaction">Amount:</span> -
              </p>
              <p>
                <span className="label-transaction">Status:</span> Debit
              </p>
            </div>
          )}
        </React.Fragment>
      ));
    }

    return (
      <div className="transaction-wrapper">
        <div className="container-transaction">
          <div className="sidenav__container-transaction">
            <div className="sidebar-transaction sidenav-transaction">
              <div className="header-title">
                <Link className="logo-transaction" to="/">
                  Stockpiller
                </Link>
              </div>
              <button className="sidenav-close-transaction">
                <img src="../assets/images/close.svg" />
              </button>
              <div className="links-transaction">
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
            <div className="header-title">
              <Link className="logo-transaction" to="/">
                Stockpiller
              </Link>
            </div>
            <div className="links-transaction">
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
                {/* <a href="">Back</a> */}
              </div>
              {/* <table class="rates-transaction top">
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
              </table> */}
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
                {transactionContainer}
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
                {/* <button>Download (PDF)</button> */}
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
                {transactionTable}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  logoutUser,
  getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
