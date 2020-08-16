import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Fade'
import './homepage.scss'
import LightSpeed from 'react-reveal/LightSpeed'

class Homepage extends Component {
  constructor() {
    super()

    this.hamburger = createRef()
    this.outsideOverlay = createRef()
    this.clickAble = createRef()
    this.sidebar = createRef()
  }

  open = () => {
    this.outsideOverlay.current.style.display = 'flex'
    this.clickAble.current.style.display = 'block'
    this.sidebar.current.classList.add('sidebarAnim')
  }

  closeSideBar = () => {
    this.sidebar.current.classList.add('slideOutAnim')
    setTimeout(() => {
      this.sidebar.current.classList.remove('slideOutAnim')
      this.sidebar.current.classList.remove('sidebarAnim')
      this.clickAble.current.style.display = 'none'
      this.outsideOverlay.current.style.display = 'none'
    }, 700)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/dashboard')
    }
    return null
  }

  render() {
    const aboutScroll = createRef()
    const howScroll = createRef()
    const contactScroll = createRef()

    const gotoAbout = () => {
      aboutScroll.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }

    const gotoHow = () => {
      howScroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const gotoContact = () => {
      contactScroll.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }

    return (
      <div className="homepage-wrapper" >
        <div className="outside-overlay" ref={this.outsideOverlay}>
          <div
            className="clickable"
            ref={this.clickAble}
            onClick={this.closeSideBar.bind(this)}
          ></div>
          <div className="sidebar" ref={this.sidebar}>
            <div className="sidebar-header">
              <div className="sidebar-logo">Stockpiller</div>
              <div
                className="sidebar-close"
                onClick={this.closeSideBar.bind(this)}
              >
                <span
                  class="iconify"
                  data-icon="bx:bx-arrow-back"
                  data-inline="false"
                  style={{
                    color: '#ffffff',
                    fontSize: '20px',
                    marginTop: '7px',
                  }}
                ></span>
              </div>
            </div>
            <div className="sidebar-content">
              <ul className="sidebar-options">
                <a className="sidebar-link" href="#" onClick={gotoAbout}>
                  <li className="sidebar-option">About</li>
                </a>
                <Link className="sidebar-link" to="/">
                  <li className="sidebar-option">Coperate</li>
                </Link>

                <a className="sidebar-link" href="#" onClick={gotoHow}>
                  <li className="sidebar-option">How it works</li>
                </a>
                <Link className="sidebar-link" to="/contact">
                  <li className="sidebar-option">Contact Us</li>
                </Link>
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
        <div className="w-100">
          <header>
            <img
              className="Header-background"
              src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/bg_ummupn.svg"
              alt="homepage top background"
            />
            <div className="Header-content">
              <div className="heading-top">
                <div className="logo fw-700 fs-18">
                  <Link to="/">Stockpiller</Link>
                </div>
                <div
                  className="hamburger"
                  ref={this.hamburger}
                  onClick={this.open.bind(this)}
                >
                  <span className="hamburger-child"></span>
                  <span className="hamburger-child"></span>
                  <span className="hamburger-child"></span>
                </div>
                <nav className="navbar aligned">
                  <ul className="nav-options">
                    <li className="nav-item" onClick={gotoAbout}>
                      <Link to="/" className="navlink">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="navlink">
                        Coperate
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="navlink" onClick={gotoHow}>
                        How it works?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="navlink">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="navlink">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" className="btn-outline-white btn">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-bottom">
                <Fade left delay={600}>
                  <div className="text-section">
                    <h1 className="Header-Large-Heading">
                      Stock pile building materials.
                    </h1>
                    <p className="Header-lead-text">
                      Accumulate building materials by automatically depositing
                      small amounts of money, which is instantly converted to
                      equivalent amount of building materials which you can
                      witdraw and pick up tommorow or in several years time.
                    </p>
                    <Link to="/signup" className="header-btn">
                      Sign Up
                    </Link>
                  </div>
                </Fade>

                <Fade right delay={600}>
                  <img
                    className="img-blocks"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/buildingblock_odamev.svg"
                    alt="undraw_building_blocks_n0nc"
                    data-aos="fade-right"
                  />
                </Fade>
              </div>
            </div>
          </header>

          <section className="why-stockpiler">
            <div className="why-stockpiler-heading">
              <h1 className="why-stockpiler-heading-lead">Why Laybuy?</h1>
              <p className="f-subs">
                We offer the best services for Stock piling
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-4">
                <Fade left delay={400}>
                  <div className="reason card" style={{height: '100%'}}>
                    <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597395573/Screenshot_2020-08-14_at_9.56.00_AM_mtxt7c.png" alt="easy.png" />
                    <h2 className="reason-header">Easy to use.</h2>
                    <p className="reason-text">
                      Deposit regular amounts of money on a recurring basis,
                      automatically or manually.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-md-4">
                <Fade up delay={400}>
                  <div className="reason card" style={{height: '100%'}}>
                  <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597395542/Screenshot_2020-08-14_at_9.55.40_AM_ysbnib.png" alt="flexible.png" />
                    <h2 className="reason-header">Flexible</h2>
                    <p className="reason-text">
                      You can withdraw and pickup your saved materials anywhere in the
                      Country.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-md-4">
                <Fade right delay={400}>
                  <div className="reason card" style={{height: '100%'}}>
                  <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597395542/Screenshot_2020-08-14_at_9.55.06_AM_h99q4l.png" alt="transparent.png" />
                    <h2 className="reason-header">Transparent</h2>
                    <p className="reason-text">
                      Login to see accumulated materials in your virtual store,
                      track transactions.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            {/* <div className="why-stockpiler-body">
              <Fade left delay={400}>
                <div className="reason">
                  <h2 className="reason-header">Easy to use.</h2>
                  <p className="reason-text">
                    Deposit regular amounts of money on a recurring basis,
                    automatically or manually.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div className="reason">
                  <h2 className="reason-header">Enforces discipline.</h2>
                  <p className="reason-text">
                    Once you deposit, you can only withdraw in materials not
                    cash.
                  </p>
                </div>
              </Fade>
              <Fade left delay={400}>
                <div className="reason">
                  <h2 className="reason-header">Flexible</h2>
                  <p className="reason-text">
                    You can withdraw and pickup materials anywhere in the
                    Country.
                  </p>
                </div>
              </Fade>
              <Fade right delay={400}>
                <div className="reason">
                  <h2 className="reason-header">Transparent</h2>
                  <p className="reason-text">
                    Login to see accumulated materials in your virtual store,
                    track transactions.
                  </p>
                </div>
              </Fade> */}
            {/* </div> */}
          </section>

          <section className="Features" ref={aboutScroll}>
            <div className="Features-heading">
              <h1 className="Features-heading-lead">Our Features</h1>
              <p className="f-subs">
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
                <Fade bottom delay={600}>
                  <h2 className="feature-heading ">Start with any amount</h2>
                  <p className="feature-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </Fade>
              </div>
              <div className="feature">
                <div className="feature-image-container">
                  <img
                    className="feature-img top-right"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <Fade bottom delay={600}>
                  <h2 className="feature-heading">Withdrawal is simple</h2>
                  <p className="feature-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </Fade>
              </div>
              <div className="feature">
                <div className="feature-image-container">
                  <img
                    className="feature-img bottom-left"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <Fade bottom delay={600}>
                  <h2 className="feature-heading">Coperate savings</h2>
                  <p className="feature-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </Fade>
              </div>
              <div className="feature">
                <div className="feature-image-container">
                  <img
                    className="feature-img bottom-right"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <Fade bottom delay={600}>
                  <h2 className="feature-heading">Set a target</h2>
                  <p className="feature-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </Fade>
              </div>
            </div>
          </section>

          <section className="How-it-works" ref={howScroll}>
            <div className="How-it-works-heading">
              <h1 className="How-it-works-heading-lead">How it works</h1>
              <p className="f-subs">
                We will tell you how our process works.
              </p>
            </div>
            <div className="How-it-works-body">
              <div className="method-group">
                <Slide top delay={400}>
                  <div className="method">
                    {/* <p className="method-heading">Sign Up</p> */}
                    <p className="method-text">
                    <p className="method-heading">Sign Up</p>
                      Sign up with us today, we require only your name, email
                      and phone number.
                    </p>
                  </div>
                </Slide>
                <Slide bottom delay={400}>
                  <img
                    className="method-image"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/podcast_taktxo.svg"
                    alt="lady using laptop"
                  />
                </Slide>
              </div>
              <div className="method-group reverse">
                <Slide top delay={400}>
                  <div className="method">
                    {/* <p className="method-heading">Add your card</p> */}
                    <p className="method-text">
                    <p className="method-heading">Sign Up</p>
                      Sign up with us today, we require only your name, email
                      and phone number.
                    </p>
                  </div>
                </Slide>
                <Slide bottom delay={400}>
                  <img
                    className="method-image push"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/creditcard_k5gcmc.svg"
                    alt="woman hold credit card"
                  />
                </Slide>
              </div>
              <div className="method-group">
                <Slide top delay={400}>
                  <div className="method">
                    {/* <p className="method-heading">Specify the materials</p> */}
                    <p className="method-text">
                    <p className="method-heading">Specify the materials</p>
                      Sign up with us today, we require only your name, email
                      and phone number.
                    </p>
                  </div>
                </Slide>
                <Slide bottom delay={400}>
                  <img
                    className="method-image"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/addcart_upkpg2.svg"
                    alt="add the cart"
                  />
                </Slide>
              </div>
              <div className="method-group reverse">
                <Slide top delay={400}>
                  <div className="method">
                    {/* <p className="method-heading">Sit back and Relax</p> */}
                    <p className="method-text method-last">
                    <p className="method-heading">Sit back and Relax</p>
                      Sign up with us today, we require only your name, email
                      and phone number.
                    </p>
                    <Link to="/signup" className="Method-button">
                      Sign Up
                    </Link>
                  </div>
                </Slide>
                <Slide bottom delay={400}>
                  <img
                    className="method-image push"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594332065/investing_7u74_quhe93.svg"
                    alt="investment image"
                  />
                </Slide>
              </div>
            </div>
          </section>

          <section className="FAQs">
            <div className="FAQs-heading">
              <h1 className="FAQs-heading-lead">Frequently asked questions</h1>
              <p className="f-subs">
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
                <LightSpeed>
                  <h2 className="faq-heading">Question 1</h2>
                  <p className="faq-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </LightSpeed>
              </div>
              <div className="faq">
                <div className="feature-image-container">
                  <img
                    className="feature-img top-left"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <LightSpeed>
                  <h2 className="faq-heading">Question 2</h2>
                  <p className="faq-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </LightSpeed>
              </div>
              <div className="faq">
                <div className="feature-image-container">
                  <img
                    className="feature-img top-left"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <LightSpeed>
                  <h2 className="faq-heading">Question 3</h2>
                  <p className="faq-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </LightSpeed>
              </div>
              <div className="faq">
                <div className="feature-image-container">
                  <img
                    className="feature-img top-right"
                    src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/yam_kjyn4m.svg"
                    alt=""
                  />
                </div>
                <LightSpeed>
                  <h2 className="faq-heading">Question 4</h2>
                  <p className="faq-text">
                    Deposit regular amounts of money on a recurring basis
                    automatically or manually.
                  </p>
                </LightSpeed>
              </div>
            </div>
          </section>

          <footer ref={contactScroll}>
            {/* <div className="footer-body">
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
                      style={{ color: '#ffffff', fontSize: '16px' }}
                    ></span>
                    <h3>1234 5567 8877</h3>
                  </div>
                  <div className="detail">
                    <span
                      className="iconify"
                      data-icon="ic:round-mail"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: '16px' }}
                    ></span>
                    <h3>info@laybuy.app</h3>
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
                  <textarea
                    rows="5"
                    className="hundred-percent-input"
                    placeholder="Hi there..."
                  />
                </div>
                <button type="submit" className="footer-form-submit btn">
                  Send
                </button>
              </form>
            </div> */}
            {/* <hr className="footer-hr" /> */}
            <div className="bottom-contents">
              <p className="copyright fs-18 fw-500"> &copy; Laybuy 2020 </p>
              <div className="social-media">
                <h4 className="social-media-lead fs-18 fw-500">
                  Follow us on social media
                </h4>
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
                      style={{ color: '#ffffff', fontSize: 24 }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="cib:linkedin"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: 24 }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="cib:twitter"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: 24 }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="carbon:logo-instagram"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: 24 }}
                    ></span>
                  </a>
                </div>
              </div>
              <div className="policies">
                <Link to="/privacy" className="policy-links fs-18 fw-500">
                  Privacy,
                </Link>
                <Link to="/terms" className="policy-links fs-18 fw-500">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {})(Homepage)
