import React, { Component, createRef, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import '../homepage/homepage.scss'

class Terms extends Component {
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
              <h1 className="why-stockpiler-heading-lead">Terms of Use</h1>
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
                    These Terms of Use (these "Terms") represent an agreement
                    between you and Artizanni Ltd. ("StokkPile") and contain the
                    terms and conditions governing your use of and access to our
                    website at https://www.laybuy.app and all affiliated
                    websites owned and operated by us (collectively, the
                    "Website") and our products, services, and applications
                    (together with the Website, the "Services"). "You" and
                    "your" mean the person who uses or accesses the Services.
                    "We," "us," and "our" mean StokkPile and its successors,
                    affiliates, and assignees. As used in these Terms,
                    "StokkPile Account" means the account you have with us for
                    the Services.
                  </p>
                  <p className="reason-text">
                    Your use of and access to the Services are subject at all
                    times to these Terms and our Privacy Policy. Please read
                    these Terms and our Privacy Policy carefully. By using or
                    accessing the Services, you represent that you have read and
                    understand these Terms and our Privacy Policy and you agree
                    to be bound by these Terms and our Privacy Policy. If you do
                    not agree to all the terms and conditions of these Terms and
                    our Privacy Policy, do not use or access the Services. THESE
                    TERMS INCLUDE, AMONG OTHER THINGS, YOUR AUTHORIZATION FOR
                    DEBITS AND CREDITS FROM AND TO YOUR BANK ACCOUNT (AS DEFINED
                    BELOW) VIA THE AUTOMATED CLEARING HOUSE NETWORK ("ACH") AND
                    A BINDING ARBITRATION PROVISION CONTAINING A CLASS ACTION
                    WAIVER.
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
                    YOUR CONSENT TO USE ELECTRONIC SIGNATURES AND COMMUNICATIONS
                  </h2>
                  <p className="reason-text">
                    Your Consent. To the extent permitted by applicable law, you
                    consent to use electronic signatures and to electronically
                    receive all records, notices, statements, communications,
                    and other items for all services provided to you under these
                    Terms and in connection with your relationship with us
                    (collectively, "Communications") that we may otherwise be
                    required to send or provide you in paper form (e.g., by
                    mail). By accepting and agreeing to these Terms
                    electronically, you represent that: (1) you have read and
                    understand this consent to use electronic signatures and to
                    receive Communications electronically; (2) you satisfy the
                    minimum hardware and software requirements specified below;
                    and (3) your consent will remain in effect until you
                    withdraw your consent as specified below. Your Right to
                    Withdraw Your Consent. Your consent to receive
                    Communications electronically will remain in effect until
                    you withdraw it. You may withdraw your consent to receive
                    further Communications electronically at any time by
                    contacting us via info@stokkpile.com. If you withdraw your
                    consent to receive Communications electronically, we will
                    close your StokkPile Account and return the balance in your
                    StokkPile Account to your Bank Account as set forth in these
                    Terms, and you will no longer be able to use your StokkPile
                    Account or the Services, except as expressly provided in
                    these Terms. Any withdrawal of your consent to receive
                    Communications electronically will be effective only after
                    we have a reasonable period of time to process your
                    withdrawal. Please note that withdrawal of your consent to
                    receive Communications electronically will not apply to
                    Communications electronically provided by us to you before
                    the withdrawal of your consent becomes effective. You Must
                    Keep Your Contact Information Current With Us. In order to
                    ensure that we are able to provide Communications to you
                    electronically, you must notify us of any change in your
                    email address and your mobile device number or other text
                    message address by updating your profile on the Website.
                    Copies of Communications. You should print and save and/or
                    electronically store a copy of all Communications that we
                    send to you electronically. Hardware and Software
                    Requirements. In order to access and retain Communications
                    provided to you electronically, you must have: (1) a valid
                    email address; (2) a computer or other mobile device (such
                    as tablet or smart phone) that operates on a platform like
                    Windows or a Mac; (3) a connection to the Internet; (4) a
                    Current Version of Internet Explorer 8 (or higher), Mozilla
                    Firefox 7.0, Safari 5, or Chrome 15; (5) a Current Version
                    of a program that accurately reads and displays PDF files,
                    such as Adobe Acrobat Reader version 7 or higher; (6) a
                    computer or device and an operating system capable of
                    supporting all of the above; and (7) a printer to print out
                    and save Communications in paper form or electronic storage
                    to retain Communications in an electronic form. "Current
                    Version" means a version of the software that is currently
                    being supported by its publisher. Changes. We reserve the
                    right, in our sole discretion, to communicate with you in
                    paper form. In addition, we reserve the right, in our sole
                    discretion, to discontinue the provision of electronic
                    Communications or to terminate or change the terms and
                    conditions on which we provide electronic Communications.
                    Except as otherwise required by applicable law, we will
                    notify you of any such termination or change by updating
                    these Terms on the Website or delivering notice of such
                    termination or change electronically.
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
                    What are the requirements to use the Services?
                  </h2>
                  <p className="reason-text">
                    In order to use the Services, you must: (a) accept and agree
                    to these Terms and our Privacy Policy; (b) register with us
                    on the Website; (c) be a Nigerian citizen (or a legal
                    Nigerian resident) of at least 18 years of age (or older if
                    you reside in a state where the majority age is older); (d)
                    have a Bank Account with a Nigerian financial institution;
                    and (e) provide all information requested by us, such as
                    your name, email address, mobile device number, online
                    credentials for your Bank Account, and such other
                    information as we may request from time to time
                    (collectively, "User Information"). You represent and
                    warrant that all User Information you provide us from time
                    to time is truthful, accurate, current, and complete, and
                    you agree not to misrepresent your identity or your User
                    Information. You agree to promptly notify us of changes to
                    your User Information by updating your StokkPile Account on
                    the Website; provided, however, that you must notify us at
                    least three Business Days before any changes to your Bank
                    Account information, including, but not limited to, the
                    closure of your Bank Account for any reason by emailing
                    info@stokkpile.com or by updating your StokkPile Account via
                    the Website. If we approve your registration, you will be
                    authorized to use the Services, subject to these Terms. For
                    our compliance purposes and in order to provide the Services
                    to you, you hereby authorize us to, directly or through a
                    third-party, obtain, verify, and record information and
                    documentation that helps us verify your identity and Bank
                    Account information. When you register for the Services and
                    from time to time thereafter, we may require you to provide
                    and/or confirm information and documentation that will allow
                    us to identify you, such as: A copy of your
                    government-issued photo ID, such as a passport or driver’s
                    license; A copy of a utility bill, bank statement,
                    affidavit, or other bill, dated within three months of our
                    request, with your name and Nigerian street address on it;
                    and Such other information and documentation that we may
                    require from time to time. By using the Services and
                    providing User Information to us, you automatically
                    authorize us to obtain, directly or indirectly through our
                    third-party service providers and without any time limit or
                    the requirement to pay any fees, information about you and
                    your Bank Account from the financial institution holding
                    your Bank Account and other third-party websites and
                    databases as necessary to provide the Services to you. For
                    purposes of such authorization, you hereby grant StokkPile
                    and our third-party service providers a limited power of
                    attorney, and you hereby appoint StokkPile and our
                    third-party service providers as your true and lawful
                    attorney-in-fact and agent, with full power of substitution
                    and resubstitution, for you and in your name, place, and
                    stead, in any and all capacities, to access third-party
                    websites, servers, and documents; retrieve information; and
                    use your User Information, all as described above, with the
                    full power and authority to do and perform each and every
                    act and thing requisite and necessary to be done in
                    connection with such activities, as fully to all intents and
                    purposes as you might or could do in person. YOU ACKNOWLEDGE
                    AND AGREE THAT WHEN STOKKPILE OR OUR THIRD-PARTY SERVICE
                    PROVIDERS ACCESS AND RETRIEVE INFORMATION FROM SUCH
                    THIRD-PARTY WEBSITES, STOKKPILE AND OUR THIRD-PARTY SERVICE
                    PROVIDERS ARE ACTING AS YOUR AGENT, AND NOT THE AGENT OR ON
                    BEHALF OF THE THIRD PARTY. You agree that other third
                    parties shall be entitled to rely on the foregoing
                    authorization, agency, and power of attorney granted by you.
                    You understand and agree that the Services are not endorsed
                    or sponsored by any third-party account providers accessible
                    through the Services. We make no effort to review
                    information obtained from the financial institution holding
                    your Bank Account and other third-party websites and
                    databases for any purpose, including, but not limited to,
                    accuracy, legality, or non-infringement. As between
                    StokkPile and our third-party service providers, StokkPile
                    owns your confidential User Information. The information you
                    provide us is subject to our Privacy Policy.
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
                  <h2 className="reason-header">How do I use the Services?</h2>
                  <p className="reason-text">
                    The purpose of the Services is to try to help you save money
                    with minimal effort towards stockpiling building materials.
                    We debit your debit card (the amount you specify). You can
                    request for your building materials at any time on any of
                    our specified delivery days. Only funds from your debit card
                    may be transferred to your StokkPile Account. The funds in
                    your StokkPile Account are held at a bank for your benefit.
                    Your funds will remain in your StokkPile Account valued at
                    the rate of building materials until you instruct us to
                    transfer any or all of your materials to a location of your
                    choice by emailing us at info@stokkpile.com. We will
                    generally fulfil the delivery of materials from your
                    StokkPile Account to your desired location within five
                    Business Days of when we receive your request. It is
                    important to know the amount of available materials in your
                    StokkPile Account before instructing us to deliver building
                    materials from your StokkPile Account to your location or
                    building site. If you do not have sufficient available
                    materials in your StokkPile Account to cover the amount of
                    the requested delivery, your request for the transfer will
                    be declined. . You may not transfer the materials in your
                    StokkPile Account to another user on and off the app. You
                    are solely responsible for determining whether the funds
                    debited from your debit card and the funds maintained in
                    your StokkPile Account are acceptable to you. We are not
                    responsible for any third-party fees that may be incurred as
                    a result of using the Services, including, but not limited
                    to, third-party fees incurred as a result of maintaining
                    insufficient funds in your Bank Account. StokkPile is not a
                    building contractor, and the Services are not intended to
                    cover the construction of your properties. Your building
                    requirements are unique. We are not responsible for ensuring
                    your debit card has sufficient funds for your needs,
                    purposes, or transactions. We do not make any
                    representations, warranties, or guarantees of any kind that
                    the Services are appropriate for you. Before using the
                    Services, you should consider obtaining additional
                    information and advice from a financial adviser.
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
                    How do I check the material in my Laybuy Account?
                  </h2>
                  <p className="reason-text">
                    You may obtain information about the balance of funds in
                    your StokkPile Account at any time or by logging in to your
                    account on the Website.
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
                    Are there any fees for using the Services?
                  </h2>
                  <p className="reason-text">
                    There are no transaction charges or monthly fee for the
                    Services, we reserve the right to change fees for the
                    Services in the future. We will notify you before charging a
                    fee for the Services by delivering notice to you
                    electronically, by posting such fee on the Website, or by
                    any other method permitted by applicable law. If you
                    continue using the Services after such notice, you must pay
                    all applicable fees for the Services.
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
                    What is the penalty fee or penalty charge?
                  </h2>
                  <p className="reason-text">
                    Withdrawing all or part of your savings is completely FREE
                    of charge, however, you agree that you will be charged a
                    penalty fee if you withdraw your savings outside any of the
                    specified delivery dates published on StokkPile's home page
                    and FAQ page.
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
                    What are some restrictions on using the Services?
                  </h2>
                  <p className="reason-text">
                    You may only use the Services for your own personal,
                    non-commercial use and not on behalf of or for the benefit
                    of any third party. Your use of the Services must comply
                    with all applicable law. If your use of the Services is
                    prohibited by applicable law, then you are not authorized to
                    use the Services. We are not responsible if you use the
                    Services in any manner that violates applicable law. You
                    agree not to authorize any other person or entity to use
                    your user name and password or mobile device to access the
                    Services. You are solely responsible for the maintenance,
                    confidentiality, and security of your username, password,
                    and other User Information. Except as otherwise required by
                    applicable law, you are responsible for all transactions and
                    other activities authorized or performed using your username
                    and password or mobile device, whether authorized or
                    unauthorized by you. Except as otherwise expressly stated in
                    these Terms or required by applicable law, we are not
                    responsible for any losses arising out of the loss or theft
                    of your User Information or your mobile device or from
                    unauthorized or fraudulent transactions associated with your
                    Bank Account or your StokkPile Account. If you suspect or
                    become aware of any unauthorized activity or access to your
                    username, password, or mobile device, you must contact us
                    immediately at info@stokkpile.com. We offer the Services and
                    the features, information, materials, and content provided
                    and depicted through the Services (collectively, "Content")
                    solely for your personal use for the purposes described
                    therein and in these Terms. Any and all other uses are
                    prohibited. You may not restrict or inhibit any other person
                    from using or enjoying the Services or Content. The Services
                    and Content are protected by copyright, trademark, patent,
                    and other intellectual property laws. We expressly reserve
                    all rights and remedies under applicable law. Except as
                    expressly provided by these Terms or with our prior written
                    consent, you may not use, modify, disassemble, decompile,
                    reverse engineer, reproduce, distribute, rent, sell,
                    license, publish, display, download, transmit, or otherwise
                    exploit any Content in any form by any means. Without
                    limiting the foregoing, you agree not to (and not to allow
                    any third party to): (a) use any robot, spider, scraper, or
                    other automatic or manual device, process, or means to
                    access the Services or copy any Content, except as expressly
                    authorized by us; (b) take any action that imposes or may
                    impose (in our sole determination) an unreasonable or a
                    disproportionately large load on the Services or our
                    infrastructure; (c) utilize any device, software, or routine
                    that will interfere or attempt to interfere with the
                    functionality of the Services; (d) rent, lease, copy,
                    provide access to, or sublicense any portion of the Services
                    or Content to a third party; (e) use any portion of the
                    Services or Content to provide, or incorporate any portion
                    of the Services or Content into, any product or service
                    provided to a third party; (f) reverse engineer, decompile,
                    disassemble, or otherwise seek to obtain the source code of
                    the Services or Content; (g) modify the Services or Content
                    or create any derivative product from any of the foregoing;
                    (h) remove or obscure any proprietary or other notices
                    contained in the Services or Content; (i) use the Services
                    or Content in any way that is illegal, harmful, fraudulent,
                    deceptive, threatening, harassing, defamatory, obscene, or
                    otherwise objectionable, as we may determine in our sole
                    discretion; (j) jeopardize the security of your StokkPile
                    Account or any other person’s StokkPile Account (such as
                    allowing someone else to use your username and password to
                    access the Services); (k) attempt, in any manner, to obtain
                    the username, password, account, or other security
                    information from any other user of the Services; (l) violate
                    the security of any computer network or crack any passwords
                    or security encryption codes; or (m) run Maillist, Listserv,
                    any form of auto-responder or "spam," or any processes that
                    run or are activated while you are not logged in to access
                    the Services. We may, but are not obligated to, monitor your
                    use of the Services and Content. We do not grant you any
                    licenses, express or implied, to our intellectual property
                    or the intellectual property of our licensors, except as
                    expressly stated in these Terms. We and our third-party
                    licensors retain all right, title, and interest in and to
                    the Services, Content, and any associated patents,
                    trademarks, copyrights, mask work rights, trade secrets, and
                    other intellectual property rights. The Services may permit
                    you to submit content, send emails and other communications,
                    and provide other information for publication or
                    distribution to third parties (collectively, "User
                    Content"). Any User Content must not be illegal,
                    threatening, obscene, racist, defamatory, libelous,
                    pornographic, infringing of intellectual property rights,
                    promoting of illegal activity or harm to groups and/or
                    individuals, invasive of privacy, purposely false or
                    otherwise injurious to third parties, or objectionable and
                    must not consist of or contain software, computer viruses,
                    commercial solicitation, political campaigning, chain
                    letters, mass mailings, or any form of "spam." If you submit
                    User Content, and unless we indicate otherwise, you grant us
                    a nonexclusive, perpetual, royalty-free, irrevocable, and
                    fully sublicensable (through multiple tiers) right to use,
                    modify, reproduce, adapt, translate, publish, create
                    derivative works from, distribute, display, and otherwise
                    exploit such User Content throughout the world in any media.
                    We take no responsibility and assume no liability for any
                    User Content submitted by you or any other user or third
                    party. To the extent permitted by applicable law, we may, in
                    our sole discretion and without liability to you, terminate
                    (or suspend access to) your use of the Services, Content, or
                    your StokkPile Account for any reason, including, but not
                    limited to, your breach of these Terms.
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
                    What do I do if my mobile device is lost or stolen or if I
                    suspect someone has gained unauthorized access to my
                    username or password?
                  </h2>
                  <p className="reason-text">
                    If your mobile device is lost or stolen or if you suspect
                    someone has gained unauthorized access to your username or
                    password, you must contact us immediately at
                    info@laybuy.app. In order to take any action, you will need
                    to provide certain User Information so we can verify your
                    identity.
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
                    How does Laybuy communicate with me about the Services?
                  </h2>
                  <p className="reason-text">
                    In order to use the Services, you must provide and verify
                    your mobile device number or other text message address to
                    us, and you must expressly consent to receive text messages
                    relating to the Services at that number or address.
                    Third-party data and message fees may apply. To verify your
                    mobile device number or text message address, we may send
                    you a code via text message to the mobile device number or
                    text message address you provide, and you must enter that
                    code as instructed by us. If you change your mobile device
                    number or text message address, you must promptly provide
                    and verify your new mobile device number or text message
                    address. In addition, if you provide your email address to
                    us, we may send you important notices via email about the
                    Services.
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
                    What do I need to know about third-party websites?
                  </h2>
                  <p className="reason-text">
                    The Services may contain links or connections to third-party
                    websites or services that are not owned or operated by us or
                    our third-party service providers or licensors. We provide
                    such links and connections for your reference only. We do
                    not control such third-party websites or services and are
                    not responsible for their availability or content. Our
                    inclusion of such links and connections does not imply our
                    endorsement of such third-party websites or services or any
                    association with their owners or operators. We assume no
                    liability whatsoever for any such third-party websites or
                    services or any content, features, products, or practices of
                    such third-party websites or services. Your access and use
                    of such third-party websites and services is subject to
                    applicable third-party terms and conditions and privacy
                    policies. We encourage you to read the terms and conditions
                    and privacy policy of each third-party website or service
                    that you visit or utilize.
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
                    What if I want to stop using the Services?
                  </h2>
                  <p className="reason-text">
                    You may stop using the Services, close your StokkPile
                    Account, and cancel these Terms at any time by contacting us
                    at info@stokkpile.com and providing sufficient information
                    for us to verify your identity. Notwithstanding the
                    foregoing, if there are any pending transactions relating to
                    your StokkPile Account when we receive your termination
                    notice, we will close your StokkPile Account promptly after
                    such transactions are completed. Your termination of these
                    Terms will not affect any of our rights or your obligations
                    arising under these Terms prior to termination. Upon the
                    closure of your Laybuy Account, we will transfer the
                    available materials in your StokkPile Account, if any, to
                    your default delivery address on the next delivery date. If
                    your delivery address is not verified or otherwise unable to
                    deliver to the location, we will send you an email to agree
                    on how to send a check to you.. If you do not use the
                    Services for a certain period of time, applicable law may
                    require us to report the materials in your StokkPile Account
                    as unclaimed property. If this occurs, we may try to locate
                    you at the address shown in our records. If we are unable to
                    locate you, we may be required to deliver any funds valued
                    for building materials in your StokkPile Account to the
                    applicable state as unclaimed property. The specified period
                    of time to report and deliver funds to a state varies by
                    state, but usually ranges between two and five years.
                    Provisions of these Terms that, by their nature, should
                    survive termination of these Terms will survive termination
                    of these Terms.
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
                  <h2 className="reason-header">What about my privacy?</h2>
                  <p className="reason-text">
                    Laybuy takes the privacy of its users very seriously. You
                    understand that by using the Services, you consent to the
                    collection, use, storage, and disclosure of your information
                    as set forth in these Terms and our Privacy Policy.
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
                    What else do I need to know about the Services?
                  </h2>
                  <p className="reason-text">
                    Additional Terms. In conjunction with your access or use of
                    the Services, you may be subject to additional terms, rules,
                    policies, and conditions that are posted on the Website,
                    including, but not limited to, terms and conditions for our
                    referral or rewards programs (the “Additional Terms”), which
                    are hereby incorporated by reference into these Terms. In
                    the event of a conflict between any Additional Terms and
                    these Terms, these Terms will control. Warranty Disclaimer.
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW AND EXCEPT
                    AS OTHERWISE EXPRESSLY PROVIDED IN THESE TERMS, YOU
                    EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICES
                    AND ALL INFORMATION, PRODUCTS, AND OTHER CONTENT (INCLUDING
                    THAT OF THIRD PARTIES) INCLUDED IN OR ACCESSIBLE FROM THE
                    SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON
                    AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTY OF
                    ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                    WE AND OUR THIRD-PARTY SERVICE PROVIDERS EXPRESSLY DISCLAIM
                    ANY AND ALL CONDITIONS, REPRESENTATIONS, AND WARRANTIES OF
                    ANY KIND AS TO THE SERVICES AND ALL INFORMATION, PRODUCTS,
                    AND OTHER CONTENT (INCLUDING THAT OF THIRD PARTIES) INCLUDED
                    IN OR ACCESSIBLE FROM THE SERVICES, WHETHER EXPRESS,
                    IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING, BUT NOT LIMITED
                    TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WITHOUT LIMITING
                    THE FOREGOING, WE AND OUR THIRD-PARTY SERVICE PROVIDERS MAKE
                    NO WARRANTY THAT (A) THE SERVICES WILL MEET YOUR
                    REQUIREMENTS, (B) THE SERVICES WILL BE UNINTERRUPTED,
                    TIMELY, SECURE, OR ERROR-FREE, (C) THE RESULTS THAT MAY BE
                    OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR
                    RELIABLE, (D) THE QUALITY OF ANY PRODUCTS, SERVICES,
                    INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU
                    THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS, OR (E) ANY
                    ERRORS IN THE SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN
                    INFORMATION OR ADVICE OBTAINED BY YOU FROM US OR OUR
                    THIRD-PARTY SERVICE PROVIDERS THROUGH OR FROM THE SERVICES
                    WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE
                    TERMS. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH
                    THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK, AND
                    YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER
                    SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY
                    SUCH MATERIAL. Limitation of Liability. TO THE FULLEST
                    EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT
                    StokkPile, ITS AFFILIATES, AND ITS AND THEIR RESPECTIVE
                    EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, AND THIRD-PARTY
                    SERVICE PROVIDERS WILL NOT BE LIABLE TO YOU OR ANY THIRD
                    PARTY FOR (A) THE PERFORMANCE OF THE SERVICES OR THE
                    INABILITY TO USE THE SERVICES; (B) ANY INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES,
                    WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE, INCLUDING,
                    BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL,
                    USE, DATA, OR OTHER INTANGIBLE LOSSES, EVEN IF SUCH PERSONS
                    HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, WHICH
                    ARISE OUT OF OR ARE IN ANY WAY CONNECTED WITH THESE TERMS,
                    THE SERVICES, OR CONTENT; (C) ANY AMOUNT, IN THE AGGREGATE,
                    IN EXCESS OF THE GREATER OF 20,000 naira OR THE AMOUNT
                    TRANSFERRED FROM YOUR DEBIT CARD TO YOUR StokkPile ACCOUNT
                    VIA THE SERVICES; OR (D) ANY EVENT BEYOND OUR REASONABLE
                    CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR
                    LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATION AND
                    EXCLUSIONS MAY NOT APPLY TO YOU. Indemnity. At our request,
                    you agree to defend, indemnify, and hold harmless StokkPile,
                    its affiliates, and its and their respective employees,
                    officers, directors, agents, and third-party service
                    providers from and against any and all claims, suits,
                    liabilities, damages (actual and consequential), losses,
                    fines, penalties, costs, and expenses (including reasonable
                    attorneys’ fees) arising from or in any way related to any
                    third-party claims relating to your use of the Services,
                    violation of these Terms, applicable law or any third-party
                    rights, or your fraud or willful misconduct. Such
                    indemnified parties reserve the right to assume the
                    exclusive defense and control of any matter subject to
                    indemnification by you, in which event you will cooperate in
                    asserting any available defenses. Assignment. You may not
                    transfer, assign, or delegate these Terms or your rights or
                    obligations hereunder or your StokkPile Account in any way
                    (by operation of law or otherwise) without our prior written
                    consent. To the extent permitted by applicable law, we may
                    transfer, assign, or delegate these Terms and our rights and
                    obligations hereunder without your consent. Third-Party
                    Beneficiary. You agree that our third-party services
                    providers are third-party beneficiaries of the applicable
                    provisions of these Terms, with all rights to enforce such
                    provisions as if such service providers were a party to
                    these Terms. Governing Law. These Terms are made under and
                    will be governed by and construed in accordance with the
                    laws of the Federal Republic of Nigeria, without giving
                    effect to any principles that provide for the application of
                    the law of another jurisdiction. DISPUTE RESOLUTION BY
                    BINDING ARBITRATION; JURY TRIAL WAIVER; CLASS ACTION WAIVER.
                    For any and all controversies, disputes, demands, claims, or
                    causes of action between you and us (including the
                    interpretation and scope of this Section and the
                    arbitrability of the controversy, dispute, demand, claim, or
                    cause of action) relating to the Services or these Terms (as
                    well as any related or prior agreement that you may have had
                    with us), you and we agree to resolve any such controversy,
                    dispute, demand, claim, or cause of action exclusively
                    through binding and confidential arbitration. The
                    arbitration will take place in the federal judicial district
                    of your residence. As used in this Section, "we" and "us"
                    mean StokkPile and its subsidiaries, affiliates,
                    predecessors, successors, and assigns and all of its and
                    their respective employees, officers, directors, agents, and
                    representatives. In addition, "we" and "us" include any
                    third party providing any product, service, or benefit in
                    connection with the Services or these Terms (as well as any
                    related or prior agreement that you may have had with us) if
                    such third party is named as a co-party with us in any
                    controversy, dispute, demand, claim, or cause of action
                    subject to this Section. Arbitration will be subject to the
                    Federal Arbitration Act and not any state arbitration law.
                    The arbitration will be conducted before one commercial
                    arbitrator from the Nigeria Arbitration and Conciliation Act
                    with substantial experience in resolving commercial contract
                    disputes. As modified by these Terms, and unless otherwise
                    agreed upon by the parties in writing, the arbitration will
                    be governed by the Nigeria Arbitration and Conciliation
                    Act’s Commercial Arbitration Rules and, if the arbitrator
                    deems them applicable, the Supplementary Procedures for
                    Consumer Related Disputes (collectively, the "Rules and
                    Procedures"). You should review this provision carefully. To
                    the extent permitted by applicable law, you are GIVING UP
                    YOUR RIGHT TO GO TO COURT to assert or defend your rights
                    EXCEPT for matters that you file in small claims court in
                    the state or municipality of your residence within the
                    jurisdictional limits of the small claims court and as long
                    as such matter is only pending in that court. Additionally,
                    notwithstanding this agreement to arbitrate, either party
                    may seek emergency equitable relief in federal court if it
                    has jurisdiction or, if it does not, in a state court
                    located in the federal judicial district of your residence
                    in order to maintain the status quo pending arbitration, and
                    each party hereby agrees to submit to the exclusive personal
                    jurisdiction of the courts located within the federal
                    judicial district of your residence for such purpose. A
                    request for interim measures will not be deemed a waiver of
                    the obligation to arbitrate. Your rights will be determined
                    by a NEUTRAL ARBITRATOR and NOT a judge or jury. You are
                    entitled to a FAIR HEARING, BUT the arbitration procedures
                    may be SIMPLER AND MORE LIMITED THAN RULES APPLICABLE IN
                    COURT. Arbitrators’ decisions are as enforceable as any
                    court order and are subject to VERY LIMITED REVIEW BY A
                    COURT. You and we must abide by the following rules: (A) ANY
                    CLAIMS BROUGHT BY YOU OR US MUST BE BROUGHT IN THE PARTY’S
                    INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER
                    IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING; (B) THE
                    ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S
                    CLAIMS, MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
                    REPRESENTATIVE OR CLASS PROCEEDING, AND MAY NOT AWARD
                    CLASS-WIDE RELIEF; (c) in the event that you are able to
                    demonstrate that the costs of arbitration will be
                    prohibitive as compared to the costs of litigation, we will
                    pay as much of your filing and hearing fees in connection
                    with the arbitration as the arbitrator deems necessary to
                    prevent the arbitration from being cost-prohibitive as
                    compared to the cost of litigation, (d) we also reserve the
                    right, in our sole and exclusive discretion, to assume
                    responsibility for any or all of the costs of the
                    arbitration; (e) the arbitrator will honor claims of
                    privilege and privacy recognized at law; (f) the arbitration
                    will be confidential, and neither you nor we may disclose
                    the existence, content, or results of any arbitration,
                    except as may be required by applicable law or for purposes
                    of enforcement of the arbitration award; (g) subject to the
                    limitation of liability provisions of these Terms, the
                    arbitrator may award any individual relief or individual
                    remedies that are expressly permitted by applicable law; and
                    (h) each party will pay its own attorneys’ fees and
                    expenses, unless there is a statutory provision that
                    requires the prevailing party to be paid its fees and
                    litigation expenses and the arbitrator awards such
                    attorneys’ fees and expenses to the prevailing party, and,
                    in such instance, the fees and costs awarded will be
                    determined by the applicable law. This Section will survive
                    termination of your StokkPile Account and these Terms as
                    well as any voluntary payment of any debt in full by you or
                    any bankruptcy by you or us. With the exception of subparts
                    (a) and (b) of this Section (prohibiting arbitration on a
                    class or collective basis), if any part of this arbitration
                    provision is deemed to be invalid, unenforceable, or
                    illegal, or otherwise conflicts with the Rules and
                    Procedures, then the balance of this arbitration provision
                    will remain in effect and will be construed in accordance
                    with its terms as if the invalid, unenforceable, illegal, or
                    conflicting part was not contained herein. If, however,
                    either subpart (a) or (b) of this Section is found to be
                    invalid, unenforceable, or illegal, then the entirety of
                    this arbitration provision will be null and void, and
                    neither you nor we will be entitled to arbitration. If for
                    any reason a claim proceeds in court rather than in
                    arbitration, the dispute will be exclusively brought in
                    federal court if it has jurisdiction or, if it does not, in
                    a state court located in the federal judicial district of
                    your residence. If you wish to opt out of this arbitration
                    provision, you must notify us of your election in writing
                    within 30 days of the date that you first became subject to
                    this arbitration provision or within 30 days of the
                    effective date of any material change to these Terms by
                    sending a written notice to us by certified mail at the
                    following address: Artizanni Ltd, Office: Abuja, Nigeria.,
                    Attn: Arbitration Opt-Out. Your opt-out notice must include
                    your name, address, phone number, and email address.
                    Miscellaneous. You will be responsible for paying,
                    withholding, filing, and reporting all taxes, duties, and
                    other governmental assessments associated with your activity
                    in connection with the Services, provided that we may, in
                    our sole discretion, do any of the foregoing on your behalf
                    or for ourselves. The failure of either you or us to
                    exercise, in any way, any right herein will not be deemed a
                    waiver of any further rights hereunder. If any provision of
                    these Terms is found to be unenforceable or invalid, that
                    provision will be limited or eliminated, to the minimum
                    extent necessary, so that these Terms will otherwise remain
                    in full force and effect and enforceable. These Terms,
                    together with our Privacy Policy, constitute the entire and
                    sole agreement between you and us with respect to the
                    Services and supersedes all prior understandings,
                    arrangements, or agreements, whether written or oral,
                    regarding the Services. You hereby acknowledge and agree
                    that you are not an employee, agent, partner, or joint
                    venture of StokkPile, and you do not have any authority of
                    any kind to bind StokkPile in any respect whatsoever.
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
                    Will StokkPile ever change these Terms or the Services?
                  </h2>
                  <p className="reason-text">
                    We may add to or terminate any of the Services or amend
                    these Terms at any time, in our sole discretion, without
                    providing notice to you, subject to applicable law. We
                    reserve the right, subject to applicable law, to deliver to
                    you any notice of changes to existing terms or the addition
                    of new terms by posting an updated version of these Terms on
                    the Website or delivering notice thereof to you
                    electronically. You are free to decide whether or not to
                    accept a revised version of these Terms, but accepting these
                    Terms, as revised, is required for you to continue accessing
                    or using the Services. If you do not agree to these Terms or
                    any revised version of these Terms, your sole recourse is to
                    terminate your access or use of the Services. Except as
                    otherwise expressly stated by us, your access and use of the
                    Services are subject to, and constitute your acceptance of,
                    the version of these Terms in effect at the time of your
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
                  <h2 className="reason-header">
                    How can I contact StokkPile?
                  </h2>
                  <p className="reason-text">
                    If you have any questions, comments, or concerns regarding
                    these Terms or the Services, please contact us at
                    info@laybuy.app
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
                <Link to="/privacy" className="policy-links">
                  Privacy,
                </Link>
                <Link to="/terms" className="policy-links">
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

export default connect(mapStateToProps, {})(Terms)
