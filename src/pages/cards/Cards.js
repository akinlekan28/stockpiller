import React, {Component, createRef} from "react";
import {connect} from "react-redux";
import {logoutUser} from "../../store/actions/authActions";
import {getCards} from "../../store/actions/transactionActions";
import Skeleton from "@yisheng90/react-loading";
import "./scss/nav.scss";
import "./scss/card.scss";
import DashboardLayout from "../dashboard/Layout";

class Cards extends Component {
    constructor() {
        super();

        this.sidebarContainer = createRef()
        this.sidenavDashboard = createRef()
        this.sidenavClose = createRef()
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.props.getCards();
    }

    logout(e) {
        e.preventDefault();

        this.props.logoutUser();
    }

    sidenav = () => {
        this.toggleClass(this.sidebarContainer.current, 'active-cards')
        setTimeout(() => {
            this.toggleClass(this.sidenavDashboard.current, 'active-cards')
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
        this.toggleClass(this.sidenavDashboard.current, 'active-cards')
        setTimeout(() => {
            this.toggleClass(this.sidebarContainer.current, 'active-cards')
        }, 400)
    }

    render() {
        const {cards, loading} = this.props.cards;

        let cardContainer;

        if (loading) {
            cardContainer = (
                <div class="card-cards">
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                </div>
            );
        } else if (cards != null && Object.keys(cards).length > 0) {
            cardContainer = cards.map((c, i) => (
                <div class="card-cards blue-cards" key={i}>
                    <button class="remove-card-cards">
                        <img
                            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595630864/delete-card_ii5tnb.svg"/>
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
                        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595631383/card-rect_mle5ec.svg"/>
                        <img src="../assets/images/master-card-2.svg" alt=""/>
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
                            <p>{"**/**"}</p>
                        </div>
                    </div>
                </div>
            ));
        } else {
            cardContainer = (
                <div class="card-cards">
                    <h4 className="text-center">You have no saved cards</h4>
                </div>
            );
        }

        return (
            <DashboardLayout name={'cards'}>
                <div className="card-wrapper pt-lg-4 pt-5 row">
                    <div className="mt-lg-0 mt-5 d-block w-100">
                        <div className="cards-cards">
                            {cardContainer}
                        </div>
                    </div>
                </div>
            </DashboardLayout>
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
