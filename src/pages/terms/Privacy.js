import React, { Component, createRef, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import '../homepage/homepage.scss'

class Privacy extends Component {
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
      <div className="homepage-wrapper">
        <div className="outside-overlay" ref={this.outsideOverlay}>
          <div
            className="clickable"
            ref={this.clickAble}
            onClick={this.closeSideBar.bind(this)}
          ></div>
          <div className="sidebar" ref={this.sidebar}>
            <div className="sidebar-header">
              <div className="sidebar-logo">Laybuy</div>
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
                  <Link to="/">Laybuy</Link>
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
                <nav className="navbar">
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
                <Fade left delay={600}>
                  <div className="text-section">
                    <h1 className="Header-Large-Heading">
                      Stock pile building materials.
                    </h1>
                    <p className="Header-lead-text">
                      Laybuy is a building material accumulation platform
                      designed to provide end-users with the opportunity of
                      stockpiling building materials over a period of time.
                    </p>
                    <Link to="/signup" className="header-btn btn">
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
              <h1 className="why-stockpiler-heading-lead">Privacy</h1>
              <p className="why-stockpiler-heading-sub">
                We offer the best services for Stock piling
              </p>
            </div>

            <div className="why-stockpiler-body">
              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">Introduction</h2>
                  <p className="reason-text">
                    Last updated: August 04, 2020 <p></p>This privacy policy
                    (this "Privacy Policy") explains how personal information is
                    collected, used, stored, and disclosed by Artizanni Ltd,
                    ("StokkPile," "we," "us," and "our"). This Privacy Policy
                    applies to consumer users (individually referred to as
                    "you") of our websites, applications, and other online
                    services to which this Privacy Policy is posted
                    (collectively, our "Services"). This Privacy Policy is part
                    of our Terms of Use. By accessing or using our Services, you
                    agree to this Privacy Policy and our Terms of Use. The
                    provisions contained in this Privacy Policy supersede all
                    previous notices and statements regarding our privacy
                    practices with respect to our Services. If you do not agree
                    to every provision of this Privacy Policy and our Terms of
                    Use, you may not access or use our Services.
                  </p>
                </div>
              </Fade>
              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">
                    Application of this Privacy Policy
                  </h2>
                  <p className="reason-text">
                    This Privacy Policy applies to your use of (regardless of
                    means of access) our Services. You may access or use our
                    Services through a desktop, laptop, mobile phone, tablet, or
                    other consumer electronic device (each, a "Device").
                  </p>
                </div>
              </Fade>
              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">Information We Collect</h2>
                  <p className="reason-text">
                    <p>
                      <strong>Information You Provide Us</strong>
                    </p>
                    <br />
                    In general, you can visit https://www.laybuy.app without
                    telling us who you are or revealing any information about
                    yourself. When you submit an inquiry via our Services or
                    register for a StokkPile account, we may collect personal
                    information from you, which may include your name, email
                    address, mobile phone number, banking information, and other
                    information that identifies you (collectively, "Personal
                    Information"). By providing your Personal Information to us,
                    you expressly agree to our collection, use, storage, and
                    disclosure of such information as described in this Privacy
                    Policy. We may also ask you to create login information for
                    your StokkPile account, such as a username and password.
                    When you provide your mobile phone number, we may ask for
                    your consent to receive text messages relating to our
                    Services at that number.
                    <br />
                    <p>
                      <strong>Information About Your Transactions</strong>
                    </p>
                    We collect Personal Information about your transactions with
                    us and others.
                    <br />
                    <br />
                    <p>
                      <strong>Information From Third Parties</strong>
                    </p>
                    <br />
                    We also collect Personal Information about you from other
                    companies. For instance, we may receive Personal Information
                    about you from a consumer reporting agency.
                    <br />
                    <p>
                      <strong>Information Automatically Collected</strong>
                    </p>
                    <br />
                    We (or our service providers acting on our behalf) may
                    collect information about your use of our Services. This
                    information may include Personal Information as well as
                    statistical information that does not identify you
                    ("Analytics"). Some Analytics may be correlated with
                    Personal Information. When Analytics are, directly or
                    indirectly, associated or combined with Personal
                    Information, such Analytics will be considered Personal
                    Information for purposes of this Privacy Policy. Information
                    that we automatically collect in connection with your access
                    or use of our Services may include: Device Information: We
                    may collect Device-specific information (such as hardware
                    model, operating system version, unique Device identifiers,
                    and mobile network Information, including your mobile phone
                    number). We may associate your Device identifiers or mobile
                    phone number with your StokkPile account. Log Information:
                    We may record or log information from your Devices, their
                    software, and your activity accessing or using our Services.
                    This information may include: The Device's Internet Protocol
                    ("IP") address Identification numbers associated with your
                    Devices Device event information, such as crashes, system
                    activity, and hardware settings Location preferences Date
                    and time stamps of transactions System configuration
                    information Other interactions with our Services
                    <br />
                    <p>
                      <strong>
                        Information Collected Through Cookies and Similar
                        Technologies
                      </strong>
                    </p>
                    <br />
                    We use cookies to personalize our Services for you and to
                    collect aggregate information about usage of our Services. A
                    cookie is a text file or other local storage identifier
                    provided by your browser or associated applications. We use
                    cookies for record-keeping purposes and to enhance the
                    quality of your use of our Services. The cookies assign
                    random, unique numbers to your Devices to enable our systems
                    to recognize your Devices and to allow us to see how you use
                    our Services. Additional general information about cookies
                    and how they work is available at www.allaboutcookies.org.
                    The cookies we use in connection with our Services include:
                    Session cookies: Session cookies are temporary cookies that
                    expire and are automatically erased whenever you close your
                    browser window. We use session cookies to grant users access
                    to content and to enable actions they must be logged into
                    their StokkPile account to perform. Persistent cookies:
                    Persistent cookies usually have an expiration date in the
                    distant future and remain in your browser until they expire
                    or you manually delete them. We use persistent cookies to
                    better understand usage patterns so we can improve our
                    Services. For example, we may use a persistent cookie to
                    associate you with your StokkPile account or to remember
                    your choices for our Services. Third-party cookies: We
                    permit certain third parties to place cookies through our
                    Services to provide us with better insights into the use of
                    our Services and user demographics and to advertise our
                    Services to you. These third parties may collect information
                    about your online activities over time and across different
                    websites when you access or use our Services. For example,
                    we utilize Google Analytics to analyze usage patterns for
                    our Services. Google Analytics generates a cookie to capture
                    information about your use of our Services, which Google
                    uses to compile reports on website activity for us and to
                    provide other related services. Google may use a portion of
                    your IP address to identify its cookie, but this will not be
                    associated with any other data held by Google. We may also
                    permit third-party service providers to place cookies for
                    our Services, as indicated above, to perform analytic or
                    marketing functions where you are notified of them and you
                    have consented to the usage. We do not control the use of
                    such third-party cookies or the resulting information, and
                    we are not responsible for any actions or policies of such
                    third parties. By accessing or using our Services, you
                    consent to the placement of cookies on your Devices as
                    described in this Privacy Policy. If you prefer not to
                    receive cookies through our Services, you may control how
                    your browser responds to cookies by adjusting the privacy
                    and security settings of your web browser. Unless you set
                    your browser settings to refuse all cookies, our system may
                    issue cookies when you access or use our Services. If you
                    set your browser settings to refuse all cookies, the
                    performance of certain features of our Services may be
                    limited or not work at all.
                  </p>

                  <p className="reason-text">
                    Do Not Track ("DNT") is an optional browser setting that
                    allows you to express your preferences regarding tracking by
                    advertisers and other third parties. We do not use
                    technology that recognizes DNT signals from your web
                    browser.
                  </p>
                </div>
              </Fade>
              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">How We Use Information</h2>
                  <p className="reason-text">
                    We may use Analytics as described elsewhere in this Privacy
                    Policy and for research and commercial purposes, such as to
                    improve our Services. We may use Personal Information for
                    the purposes described elsewhere in this Privacy Policy and
                    internally for our general commercial purposes, including,
                    among other things, to offer our products and services and
                    products and services of third parties that we think you
                    might find of interest, but only StokkPile and our
                    third-party service providers involved in distributing the
                    offers or providing the products or services will have
                    access to your Personal Information. Our third-party service
                    providers will only be permitted to use Personal Information
                    for that intended purpose. We may use your email address to
                    respond to your inquiries and to provide you information
                    about our Services. You may elect not to receive promotional
                    emails from us either by "unsubscribing" to an email you
                    receive from us or by contacting us as indicated below. If
                    you unsubscribe from receiving emails from us, we may still
                    send you non-promotional emails, such as emails about your
                    StokkPile account or our ongoing business relations, unless
                    you withdraw your consent to receive electronic
                    communications as provided in our Terms of Use.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">How We Share Information</h2>
                  <p className="reason-text">
                    We do not share your Personal Information with: (1) other
                    financial companies for joint marketing purposes; (2)
                    affiliated companies for their everyday business purposes;
                    or (3) any third parties so they can market to you. We may
                    share your Personal Information with unaffiliated third
                    parties: (1) if you request or authorize it; (2) if the
                    information is provided to help complete a transaction for
                    you; (3) if the information is provided to: (a) comply with
                    applicable laws, rules, regulations, governmental and
                    quasi-governmental requests, court orders, or subpoenas; (b)
                    enforce our Terms of Use or other agreements; or (c) protect
                    our rights, property, or safety or the rights, property, or
                    safety of our users or others (e.g., to a consumer reporting
                    agency for fraud protection, etc.); (4) if the disclosure is
                    done as part of a purchase, transfer, or sale of services or
                    assets (e.g., in the event that substantially all of our
                    assets are acquired by another party, your Personal
                    Information may be one of the transferred assets); (5) if
                    the information is provided to our third-party service
                    providers to perform functions on our behalf (e.g.,
                    analyzing data, providing marketing assistance, providing
                    customer service, processing orders, etc.); (6) for our
                    everyday business purposes; or (7) as permitted by
                    applicable law or otherwise described in this Privacy
                    Policy. When you are no longer our customer, we continue to
                    share your information as described in this Privacy Policy.
                    We may disclose Analytics with third parties as described
                    elsewhere in this Privacy Policy and for our commercial
                    purposes.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">Opt-Out Rights</h2>
                  <p className="reason-text">
                    If you do not wish to receive offers or other notices from
                    us in the future, you can "opt out" by contacting us as
                    indicated at the end of this Privacy Policy or by following
                    the "unsubscribe" instructions in any communication you
                    receive from us. Please be aware that you are not able to
                    opt out of receiving communications about your StokkPile
                    account or related transactions with us.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">Accessing Your Information</h2>
                  <p className="reason-text">
                    You must notify us of any change in your Personal
                    Information by updating your StokkPile account profile
                    through our Services. Any changes will affect only future
                    uses of your Personal Information. Subject to applicable
                    law, which might, from time to time, oblige us to store your
                    Personal Information for a certain period of time, we will
                    respect your wishes to correct inaccurate information.
                    Otherwise, we will hold your Personal Information for as
                    long as we believe it will help us achieve our objectives as
                    detailed in this Privacy Policy. You can ask us whether we
                    are storing your Personal Information and you can ask to
                    receive a copy of that Personal Information. Before sending
                    you any Personal Information, we will ask you to provide
                    proof of your identity. If you are not able to provide proof
                    of your identity, we reserve the right to refuse to send you
                    any Personal Information. We will respond as quickly as we
                    can to your requests for details of Personal Information we
                    hold about you.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">Security</h2>
                  <p className="reason-text">
                    We have, and require our third-party service providers that
                    receive Personal Information from us to have, a
                    comprehensive written information security program that
                    contains administrative, technical, and physical safeguards
                    for our respective physical facilities and in our respective
                    computer systems, databases, and communications networks
                    that are reasonably designed to protect information
                    contained within such systems from loss, misuse, or
                    alteration. When your bank account information is
                    transmitted via our Services, it will be protected by
                    encryption technology, such as Secure Sockets Layer (SSL).
                    No method of electronic transmission or storage is 100%
                    secure. Therefore, we cannot guarantee the absolute security
                    of your Personal Information. You also play a role in
                    protecting your Personal Information. Please safeguard your
                    username and password for your StokkPile account and do not
                    share them with others. If we receive instructions using
                    your StokkPile account login information, we will consider
                    that you have authorized the instructions. You agree to
                    notify us immediately of any unauthorized use of your
                    StokkPile account or any other breach of security. We
                    reserve the right, in our sole discretion, to refuse to
                    provide our Services, terminate StokkPile accounts, and to
                    remove or edit content.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">
                    Protecting Children's Privacy
                  </h2>
                  <p className="reason-text">
                    Our Services are not directed or intended to be attractive,
                    to children under the age of 18. We do not knowingly collect
                    Personal Information from children under the age of 18. If
                    you are under the age of 18, do not use our Services or
                    submit any information to us.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">
                    Links to Third-Party Websites
                  </h2>
                  <p className="reason-text">
                    When you use our Services, you may be directed to other
                    websites that are beyond our control. We may also allow
                    third-party websites or applications to link to our
                    Services. We are not responsible for the privacy practices
                    of any third parties or the content of linked websites, but
                    we do encourage you to read the applicable privacy policies
                    and terms and conditions of such parties and websites. This
                    Privacy Policy only applies to our Services.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">
                    Changes to our Privacy Policy
                  </h2>
                  <p className="reason-text">
                    Subject to applicable law, we may revise this Privacy Policy
                    at any time and in our sole discretion. When we revise this
                    Privacy Policy, we will post the revised version via our
                    Services and will update the date at the top of this Privacy
                    Policy. The revised Privacy Policy will be effective upon
                    posting via our Services, unless otherwise set forth therein
                    or as otherwise required by applicable law. You are free to
                    decide whether or not to accept a revised version of this
                    Privacy Policy, but accepting this Privacy Policy, as
                    revised, is required for you to continue accessing or using
                    our Services. If you do not agree to the terms of this
                    Privacy Policy or any revised version of this Privacy
                    Policy, your sole recourse is to terminate your access and
                    use of our Services. Except as otherwise expressly stated by
                    us, your access and use of our Services is subject to the
                    version of this Privacy Policy in effect at the time of
                    access or use.
                  </p>
                </div>
              </Fade>

              <Fade right delay={400}>
                <div
                  className="reason"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '22px',
                  }}
                >
                  <h2 className="reason-header">How can I contact Laybuy?</h2>
                  <p className="reason-text">
                    If you have any questions, comments, or concerns regarding
                    these Terms or the Services, please contact us at
                    info@laybuy.com
                  </p>
                </div>
              </Fade>
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
              <p className="copyright"> &copy; Laybuy 2020 </p>
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
                      style={{ color: '#ffffff', fontSize: '16px' }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="cib:linkedin"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: '16px' }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="cib:twitter"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: '17px' }}
                    ></span>
                  </a>
                  <a href="#" className="soc-link">
                    <span
                      className="iconify"
                      data-icon="carbon:logo-instagram"
                      data-inline="false"
                      style={{ color: '#ffffff', fontSize: '20px' }}
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
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {})(Privacy)
