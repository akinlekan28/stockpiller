import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./homepage.scss";

export default function Homepage() {
  const aboutScroll = useRef();
  const howScroll = useRef();
  const contactScroll = useRef();

  const gotoAbout = () => {
    aboutScroll.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const gotoHow = () => {
    howScroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gotoContact = () => {
    contactScroll.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="homepage-wrapper">
      <div className="outside-overlay">
        <div className="clickable"></div>
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">Stokkpile</div>
            <div className="sidebar-close">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="sidebar-content">
            <ul className="sidebar-options">
              <Link className="sidebar-link" to="/">
                <li className="sidebar-option">Coperate</li>
              </Link>

              <a className="sidebar-link" href="#" onClick={gotoAbout}>
                <li className="sidebar-option">About</li>
              </a>

              <a className="sidebar-link" href="#" onClick={gotoHow}>
                <li className="sidebar-option">How it works</li>
              </a>
              <a className="sidebar-link" href="#" onClick={gotoContact}>
                <li className="sidebar-option">Contact Us</li>
              </a>
            </ul>
            <div className="sidebar-buttons">
              <Link className="sidebar-btn" to="/login">
                Login
              </Link>
              <Link className="sidebar-btn" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <img
            className="Header-background"
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/bg_ummupn.svg"
            alt="homepage top background"
          />
          <div className="Header-content">
            <div className="heading-top">
              <div className="logo">
                <Link to="/">Stokkpile</Link>
              </div>
              <div className="hamburger">
                <span className="hamburger-child"></span>
                <span className="hamburger-child"></span>
                <span className="hamburger-child"></span>
              </div>
              <nav className="navbar">
                <ul className="nav-options">
                  <li className="nav-item">
                    <Link to="/" className="navlink">
                      Coperate
                    </Link>
                  </li>
                  <li className="nav-item" onClick={gotoAbout}>
                    <Link to="/" className="navlink">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="navlink" onClick={gotoHow}>
                      How it works?
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="navlink" onClick={gotoContact}>
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="navlink">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="navlink signup-btn btn">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-bottom">
              <div className="text-section">
                <h1 className="Header-Large-Heading">
                  Stockpile building materials.
                </h1>
                <p className="Header-lead-text">
                  Accumulate building materials by automatically depositing
                  small amounts of money, which is instantly converted to
                  equivalent amount of building materials which you can witdraw
                  and pick up tommorow or in several years time.
                </p>
                <Link to="/signup" className="header-btn btn">
                  Sign Up
                </Link>
              </div>
              <img
                className="img-blocks"
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/buildingblock_odamev.svg"
                alt="undraw_building_blocks_n0nc"
              />
            </div>
          </div>
        </header>

        <section className="why-stockpiler">
          <div className="why-stockpiler-heading">
            <h1 className="why-stockpiler-heading-lead">Why Stokkpiler?</h1>
            <p className="why-stockpiler-heading-sub">
              We offer the best services for Stockpiling
            </p>
          </div>

          <div className="why-stockpiler-body">
            <div className="reason">
              <h2 className="reason-header">Easy to use.</h2>
              <p className="reason-text">
                Deposit regular amounts of money on a recurring basis,
                automatically or manually.
              </p>
            </div>
            <div className="reason">
              <h2 className="reason-header">Enforces discipline.</h2>
              <p className="reason-text">
                Once you deposit, you can only withdraw in materials not cash.
              </p>
            </div>
            <div className="reason">
              <h2 className="reason-header">Flexible</h2>
              <p className="reason-text">
                You can withdraw and pickup materials anywhere in the Country.
              </p>
            </div>
            <div className="reason">
              <h2 className="reason-header">Transparent</h2>
              <p className="reason-text">
                Login to see accumulated materials in your virtual store, track
                transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="Features" ref={aboutScroll}>
          <div className="Features-heading">
            <h1 className="Features-heading-lead">Our Features</h1>
            <p className="Features-heading-sub">
              We offer the best services for Stockpiling
            </p>
          </div>
          <div className="Features-body">
            <div className="feature">
              <div className="feature-image-container">
                <img
                  className="feature-img top-left"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="feature-heading">Start with any amount</h2>
              <p className="feature-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="feature">
              <div className="feature-image-container">
                <img
                  className="feature-img top-right"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="feature-heading">Withdrawal is simple</h2>
              <p className="feature-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="feature">
              <div className="feature-image-container">
                <img
                  className="feature-img bottom-left"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="feature-heading">Coperate savings</h2>
              <p className="feature-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="feature">
              <div className="feature-image-container">
                <img
                  className="feature-img bottom-right"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="feature-heading">Set a target</h2>
              <p className="feature-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
          </div>
        </section>

        <section className="How-it-works" ref={howScroll}>
          <div className="How-it-works-heading">
            <h1 className="How-it-works-heading-lead">How it works</h1>
            <p className="How-it-works-heading-sub">
              We will tell you how our process works.
            </p>
          </div>
          <div className="How-it-works-body">
            <div className="method-group">
              <div className="method">
                <p className="method-heading">Sign Up</p>
                <p className="method-text">
                  Sign up with us today, we require only your name, email and
                  phone number.
                </p>
              </div>
              <img
                className="method-image"
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/podcast_taktxo.svg"
                alt="lady using laptop"
              />
            </div>
            <div className="method-group reverse">
              <div className="method">
                <p className="method-heading">Add your card</p>
                <p className="method-text">
                  Sign up with us today, we require only your name, email and
                  phone number.
                </p>
              </div>
              <img
                className="method-image push"
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/creditcard_k5gcmc.svg"
                alt="woman hold credit card"
              />
            </div>
            <div className="method-group">
              <div className="method">
                <p className="method-heading">Specify the materials</p>
                <p className="method-text">
                  Sign up with us today, we require only your name, email and
                  phone number.
                </p>
              </div>
              <img
                className="method-image"
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/addcart_upkpg2.svg"
                alt="add the cart"
              />
            </div>
            <div className="method-group reverse">
              <div className="method">
                <p className="method-heading">Sit back and Relax</p>
                <p className="method-text method-last">
                  Sign up with us today, we require only your name, email and
                  phone number.
                </p>
                <Link to="/signup" className="Method-button">
                  Sign Up
                </Link>
              </div>
              <img
                className="method-image push"
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594332065/investing_7u74_quhe93.svg"
                alt="investment image"
              />
            </div>
          </div>
        </section>

        <section className="FAQs">
          <div className="FAQs-heading">
            <h1 className="FAQs-heading-lead">Frequently asked questions</h1>
            <p className="FAQs-heading-sub">
              We provide answers to your questions
            </p>
          </div>
          <div className="FAQs-body">
            <div className="faq">
              <div className="feature-image-container">
                <img
                  className="feature-img top-right"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="faq-heading">Question 1</h2>
              <p className="faq-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="faq">
              <div className="feature-image-container">
                <img
                  className="feature-img top-left"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="faq-heading">Question 2</h2>
              <p className="faq-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="faq">
              <div className="feature-image-container">
                <img
                  className="feature-img top-left"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="faq-heading">Question 3</h2>
              <p className="faq-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
            <div className="faq">
              <div className="feature-image-container">
                <img
                  className="feature-img top-right"
                  src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                  alt=""
                />
              </div>
              <h2 className="faq-heading">Question 4</h2>
              <p className="faq-text">
                Deposit regular amounts of money on a recurring basis
                automatically or manually.
              </p>
            </div>
          </div>
        </section>

        <footer ref={contactScroll}>
          <div className="footer-body">
            <div className="talk">
              <div className="talk-heading">
                <h1 className="talk-heading-lead">Let's talk</h1>
                <p className="talk-heading-sub">
                  Ask us anything or just say hi.
                </p>
              </div>
              <div className="talk-connect-details">
                <div className="detail">
                  <span
                    className="iconify"
                    data-icon="clarity:phone-handset-solid"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "16px" }}
                  ></span>
                  <h3>1234 5567 8877</h3>
                </div>
                <div className="detail">
                  <span
                    className="iconify"
                    data-icon="ic:round-mail"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "16px" }}
                  ></span>
                  <h3>info@stokkpiler.com</h3>
                </div>
              </div>
            </div>
            <form className="form">
              <div className="fifty-percent">
                <h3 className="fifty-percent-header">NAME </h3>
                <input
                  type="text"
                  className="fifty-percent-input"
                  placeholder="Victoria Doe"
                />
              </div>
              <div className="fifty-percent">
                <h3 className="fifty-percent-header">EMAIL</h3>
                <input
                  type="text"
                  className="fifty-percent-input"
                  placeholder="Victoria@gmail.com"
                />
              </div>
              <div className="hundred-percent">
                <h3 className="hundred-percent-header">MESSAGE</h3>
                <input
                  type="text"
                  className="hundred-percent-input"
                  placeholder="Hi there..."
                />
              </div>
              <button type="submit" className="footer-form-submit">
                Send
              </button>
            </form>
          </div>
          <hr className="footer-hr" />
          <div className="bottom-contents">
            <p className="copyright"> &copy; stokkpiler 2020 </p>
            <div className="social-media">
              <h4 className="social-media-lead">Follow us on social media</h4>
              <div className="soc-icons">
                <a
                  href="https://facebook.com/stokkpiler"
                  target="_blank"
                  className="soc-link"
                >
                  <span
                    className="iconify"
                    data-icon="brandico:facebook"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "16px" }}
                  ></span>
                </a>
                <a href="#" className="soc-link">
                  <span
                    className="iconify"
                    data-icon="cib:linkedin"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "16px" }}
                  ></span>
                </a>
                <a href="#" className="soc-link">
                  <span
                    className="iconify"
                    data-icon="cib:twitter"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "17px" }}
                  ></span>
                </a>
                <a href="#" className="soc-link">
                  <span
                    className="iconify"
                    data-icon="carbon:logo-instagram"
                    data-inline="false"
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  ></span>
                </a>
              </div>
            </div>
            <div className="policies">
              <a href="#" className="policy-links">
                Privacy,
              </a>
              <a href="#" className="policy-links">
                Terms & Conditions
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
