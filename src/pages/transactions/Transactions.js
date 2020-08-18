import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import { getTransactions } from "../../store/actions/transactionActions";
import { Link } from "react-router-dom";
import Skeleton from "@yisheng90/react-loading";
import "./scss/transaction.scss";
import DashboardLayout from "../dashboard/Layout";

class Transactions extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.sidebarContainer = createRef()
    this.sidenavDashboard = createRef()
    this.sidenavClose = createRef()
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  sidenav = () => {
    this.toggleClass(this.sidebarContainer.current, 'active-transaction')
    setTimeout(() => {
      this.toggleClass(this.sidenavDashboard.current, 'active-transaction')
    }, 50)
  }

  toggleClass = (e, className) => {
    if (e.classList.contains(className)) {
      e.classList.remove(className)
    } else {
      e.classList.add(className)
    }
  }

  closeNav = () => {
    this.toggleClass(this.sidenavDashboard.current, 'active-transaction')
    setTimeout(() => {
      this.toggleClass(this.sidebarContainer.current, 'active-transaction')
    }, 400)
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
        <DashboardLayout name={'transactions'}>
            <div className="transaction-wrapper pt-lg-4 pt-5 px-4">
              <div className="cards-transaction mt-lg-0 mt-5">
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
        </DashboardLayout>
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
