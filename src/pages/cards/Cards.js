import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { getCards } from "../../store/actions/transactionActions";
import Skeleton from "@yisheng90/react-loading";
import "./scss/nav.scss";
import "./scss/card.scss";

class Cards extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.getCards();
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    const { cards, loading } = this.props.cards;

    let cardContainer;

    if (loading) {
      cardContainer = (
        <div class="card-cards">
          {/* <button class="remove-card-cards">
        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595630864/delete-card_ii5tnb.svg" />
      </button>
      <div class="remove-card-box-cards">
        <p class="remove-card-box__header-cards">Remove Card</p>
        <div class="remove-card-box__description-cards">
          Kindly note that this card would be removed permanently from
          this platform.
        </div>
        <div class="remove-card__buttons-cards">
          <button class="remove-card__button-cards">Cancel</button>
          <button class="remove-card__button-cards remove-card__button--bg-purple-cards">
            Remove
          </button>
        </div>
      </div>
      <div class="card__brands-cards">
        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595631383/card-rect_mle5ec.svg" />
        <img src="../assets/images/master-card-2.svg" alt="" />
      </div>
      <div class="card__numbers-cards">
        <span>5399</span>
        <span>3456</span>
        <span>6788</span>
        <span>2345</span>
      </div>
      <div class="card__details-cards">
        <div>
          <p>CARD HOLDER</p>
          <p>SAMUEL FAPOUN</p>
        </div>
        <div>
          <p>EXPIRES</p>
          <p>09/21</p>
        </div>
      </div> */}
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={30} />
        </div>
      );
    } else if (Object.keys(cards).length > 0) {
      cardContainer = cards.map((c, i) => (
        <div class="card-cards blue-cards" key={i}>
          <button class="remove-card-cards">
            <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595630864/delete-card_ii5tnb.svg" />
          </button>
          <div class="remove-card-box-cards">
            <p class="remove-card-box__header-cards">Remove Card</p>
            <div class="remove-card-box__description-cards">
              Kindly note that this card would be removed permanently from this
              platform.
            </div>
            <div class="remove-card__buttons-cards">
              <button class="remove-card__button-cards">Cancel</button>
              <button class="remove-card__button-cards remove-card__button--bg-purple-cards">
                Remove
              </button>
            </div>
          </div>
          <div class="card__brands-cards">
            <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595631383/card-rect_mle5ec.svg" />
            <img src="../assets/images/master-card-2.svg" alt="" />
          </div>
          <div class="card__numbers-cards">
            <span>XXXX</span>
            <span>XXXX</span>
            <span>XXXX</span>
            <span>{c.last_four}</span>
          </div>
          <div class="card__details-cards">
            <div>
              <p>CARD HOLDER</p>
              <p>******* *******</p>
            </div>
            <div>
              <p>EXPIRES</p>
              <p>**/**</p>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div className="card-wrapper">
        <div className="container-cards">
          <div className="sidenav__container-cards">
            <div className="sidebar-cards sidenav-cards">
              <Link className="logo-cards" to="/">
                Laybuy
              </Link>
              <button className="sidenav-close-cards">
                <img src="../assets/images/close.svg" />
              </button>
              <div className="links-cards">
                <div className="link-cards">
                  <span
                    className="iconify"
                    data-icon="fa-regular:building"
                    data-inline="false"
                  ></span>
                  <Link to="/home">Home</Link>
                </div>
                <div className="link-cards">
                  <span
                    className="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="link-cards">
                  <span
                    className="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div className="link-cards">
                  <span
                    className="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div className="link-cards">
                  <span
                    className="iconify"
                    data-icon="ri:send-plane-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/withdraw">Withdraw</Link>
                </div>
                <div className="link-cards active-cards">
                  <span
                    className="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div className="link-cards">
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
                ></span>{" "}
                Logout
              </a>
            </div>
          </div>
          <div className="sidebar-cards">
            <Link class="logo-cards" to="/">
              Laybuy
            </Link>
            <div class="links-cards">
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div class="link-cards active-cards">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div class="link-cards">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a
              class="logout__link-cards"
              href="./login.html"
              onClick={this.logout}
            >
              <span
                className="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>{" "}
              Logout
            </a>
          </div>

          <div className="main-cards">
            <div className="top-cards">
              <button className="sidenav-btn-cards">
                <div className="bar-cards"></div>
                <div className="bar-cards"></div>
                <div className="bar-cards"></div>
              </button>
              {/* <div className="back-cards">
                <img src="../assets/images/back.svg" alt="" />
                <a href="">Back</a>
              </div> */}
              {/* <table className="rates-cards top">
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
              <div className="user-controls-cards">
                <div className="notifications-cards">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div className="user-cards">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button className="logout-cards" onClick={this.logout}>
                  Logout
                </button>
              </div>
            </div>

            <div class="cards-cards">
              {cardContainer}
              
              {/* <a class="add-card-cards" href="no-card.html">
                <img
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595631171/add-purple_nldgo1.svg"
                  alt=""
                />
                Add Card
              </a> */}
            </div>
            {/* <table class="rates-cards bottom-cards">
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
            </table> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.transactions,
});

const mapDispatchToProps = {
  logoutUser,
  getCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
