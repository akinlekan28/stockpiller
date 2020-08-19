import React, {Component, createRef} from 'react'
import { Link } from 'react-router-dom'
// import './homepage.scss'
import {connect} from "react-redux";

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
            howScroll.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }

        const gotoContact = () => {
            contactScroll.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }

        return (
            <>

                {/** sign in **/}
                <div className="signin-modal">
                    <div className="closeslide">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <div className="_half-width _left _padding-50 _no-show">
                        <img src="https://www.piggyvest.com/sitestatics/img/piggy-signin.png"
                             className="signin-img _margin-50" alt=""/>
                        <h1 className="_margin-100">It's time to Save &amp; Invest</h1>
                    </div>
                    <div className="_right _padding-50 signin">
                        <div className="_center">
                            <Link to="/login">
                                {/* <img
                                src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/piggy-png_1_.png"
                                className="logo" alt="PiggyVest Logo"/> */}
                                </Link>
                            <h2>Login to your Account</h2>
                        </div>
                    </div>
                </div>
                {/** mobile menu icon **/}
                <div className="nav-icon nav-icon _margin-10">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {/** mobile menu icon End **/}
                {/** mobile menu **/}
                <nav className="mobile-nav">
                    <div className="container">
                        <ul className="menu">
                            <l1><Link to="/about">About</Link></l1>
                            <l1><Link to="/faq">FAQ</Link></l1>
                            <l1><Link to="/login">Log In</Link></l1>
                            <l1><Link to="/register" className="signup-btn">Create a Free
                                Account</Link></l1>
                        </ul>
                    </div>
                </nav>
                {/** mobile menu End **/}
                {/** Nav **/}
                <nav className="top-nav  alt-nav navwhite">
                    <div className="container">
                        <a href="/">
                            {/* <img
                                src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/piggy-svg-white.svg"
                                className="logo" alt=""/> */}
                        </a>
                        <a href="/">
                            {/* <img
                                src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/piggy-png_1_.png"
                                className="logo-alt" alt=""/> */}
                        </a>

                        <ul className="menu _no-show">


                            <li className="menu-list"><Link to="/about"
                                                         className="menu-link visible">About</Link></li>
                            <li className="menu-list"><Link to="/faq"
                                                         className="menu-link">FAQ</Link></li>
                            <li className="menu-list"><Link to="/login"
                                                         className="menu-link">Log In</Link></li>
                            <li className="menu-list"><Link to="/signup"
                                                         className="menu-link signup-btn">Create a Free Account</Link></li>
                        </ul>
                    </div>
                </nav>
                {/** Nav End **/}
                {/** Header End **/}
                
                {/** Header End **/}


                {/** Savings BOX **/}
                <section className="content">
                    <div className="container _center">
                        <h1 className="_margin-100 bold">Privacy Policy</h1>

                        <div className=" _margin-50 privacy-card">
                            <p className="text-left">Last updated: August 04, 2020</p>
                           <p className="text-left">This privacy policy (this "Privacy Policy") explains how personal information is collected, used, stored, and disclosed by Artizanni Ltd, ("StokkPile," "we," "us," and "our"). This Privacy Policy applies to consumer users (individually referred to as "you") of our websites, applications, and other online services to which this Privacy Policy is posted (collectively, our "Services"). This Privacy Policy is part of our Terms of Use. By accessing or using our Services, you agree to this Privacy Policy and our Terms of Use. The provisions contained in this Privacy Policy supersede all previous notices and statements regarding our privacy practices with respect to our Services. If you do not agree to every provision of this Privacy Policy and our Terms of Use, you may not access or use our Services.</p>
                           <h2>Application of this Privacy Policy</h2>
                           <p className="text-left">This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device").</p>
                           <h2>Information We Collect</h2>
                           <h4 className="text-left">Information you provide us</h4>
                           <p className="text-left">In general, you can visit https://www.laybuy.app without telling us who you are or revealing any information about yourself. When you submit an inquiry via our Services or register for a StokkPile account, we may collect personal information from you, which may include your name, email address, mobile phone number, banking information, and other information that identifies you (collectively, "Personal Information"). By providing your Personal Information to us, you expressly agree to our collection, use, storage, and disclosure of such information as described in this Privacy Policy. We may also ask you to create login information for your StokkPile account, such as a username and password. When you provide your mobile phone number, we may ask for your consent to receive text messages relating to our Services at that number.</p>
                           <h4 className="text-left mt-3">Information About Your Transactions</h4>
                           <p className="text-left">We collect Personal Information about your transactions with us and others.</p>
                           <h4 className="text-left mt-3">Information From Third Parties</h4>
                           <p className="text-left">We also collect Personal Information about you from other companies. For instance, we may receive Personal Information about you from a consumer reporting agency.</p>
                           <h4 className="text-left mt-3">Information Automatically Collected</h4>
                           <p className="text-left">We (or our service providers acting on our behalf) may collect information about your use of our Services. This information may include Personal Information as well as statistical information that does not identify you ("Analytics"). Some Analytics may be correlated with Personal Information. When Analytics are, directly or indirectly, associated or combined with Personal Information, such Analytics will be considered Personal Information for purposes of this Privacy Policy. Information that we automatically collect in connection with your access or use of our Services may include: Device Information: We may collect Device-specific information (such as hardware model, operating system version, unique Device identifiers, and mobile network Information, including your mobile phone number). We may associate your Device identifiers or mobile phone number with your StokkPile account. Log Information: We may record or log information from your Devices, their software, and your activity accessing or using our Services. This information may include: The Device's Internet Protocol ("IP") address Identification numbers associated with your Devices Device event information, such as crashes, system activity, and hardware settings Location preferences Date and time stamps of transactions System configuration information Other interactions with our Services</p>
                           <h4 className="text-left mt-3">Information Collected Through Cookies and Similar Technologies</h4>
                           <p className="text-left">We use cookies to personalize our Services for you and to collect aggregate information about usage of our Services. A cookie is a text file or other local storage identifier provided by your browser or associated applications. We use cookies for record-keeping purposes and to enhance the quality of your use of our Services. The cookies assign random, unique numbers to your Devices to enable our systems to recognize your Devices and to allow us to see how you use our Services. Additional general information about cookies and how they work is available at www.allaboutcookies.org. The cookies we use in connection with our Services include: Session cookies: Session cookies are temporary cookies that expire and are automatically erased whenever you close your browser window. We use session cookies to grant users access to content and to enable actions they must be logged into their StokkPile account to perform. Persistent cookies: Persistent cookies usually have an expiration date in the distant future and remain in your browser until they expire or you manually delete them. We use persistent cookies to better understand usage patterns so we can improve our Services. For example, we may use a persistent cookie to associate you with your StokkPile account or to remember your choices for our Services. Third-party cookies: We permit certain third parties to place cookies through our Services to provide us with better insights into the use of our Services and user demographics and to advertise our Services to you. These third parties may collect information about your online activities over time and across different websites when you access or use our Services. For example, we utilize Google Analytics to analyze usage patterns for our Services. Google Analytics generates a cookie to capture information about your use of our Services, which Google uses to compile reports on website activity for us and to provide other related services. Google may use a portion of your IP address to identify its cookie, but this will not be associated with any other data held by Google. We may also permit third-party service providers to place cookies for our Services, as indicated above, to perform analytic or marketing functions where you are notified of them and you have consented to the usage. We do not control the use of such third-party cookies or the resulting information, and we are not responsible for any actions or policies of such third parties. By accessing or using our Services, you consent to the placement of cookies on your Devices as described in this Privacy Policy. If you prefer not to receive cookies through our Services, you may control how your browser responds to cookies by adjusting the privacy and security settings of your web browser. Unless you set your browser settings to refuse all cookies, our system may issue cookies when you access or use our Services. If you set your browser settings to refuse all cookies, the performance of certain features of our Services may be limited or not work at all.</p>
                           <h4 className="text-left mt-3">Do-Not-Track Signals</h4>
                           <p className="text-left">Do Not Track ("DNT") is an optional browser setting that allows you to express your preferences regarding tracking by advertisers and other third parties. We do not use technology that recognizes DNT signals from your web browser.</p>
                           <h2>How We Use Information</h2>
                           <p className="text-left">We may use Analytics as described elsewhere in this Privacy Policy and for research and commercial purposes, such as to improve our Services. We may use Personal Information for the purposes described elsewhere in this Privacy Policy and internally for our general commercial purposes, including, among other things, to offer our products and services and products and services of third parties that we think you might find of interest, but only StokkPile and our third-party service providers involved in distributing the offers or providing the products or services will have access to your Personal Information. Our third-party service providers will only be permitted to use Personal Information for that intended purpose. We may use your email address to respond to your inquiries and to provide you information about our Services. You may elect not to receive promotional emails from us either by "unsubscribing" to an email you receive from us or by contacting us as indicated below. If you unsubscribe from receiving emails from us, we may still send you non-promotional emails, such as emails about your StokkPile account or our ongoing business relations, unless you withdraw your consent to receive electronic communications as provided in our Terms of Use.</p>
                           <h2>How We Share Information</h2>
                           <p className="text-left">We do not share your Personal Information with: (1) other financial companies for joint marketing purposes; (2) affiliated companies for their everyday business purposes; or (3) any third parties so they can market to you. We may share your Personal Information with unaffiliated third parties: (1) if you request or authorize it; (2) if the information is provided to help complete a transaction for you; (3) if the information is provided to: (a) comply with applicable laws, rules, regulations, governmental and quasi-governmental requests, court orders, or subpoenas; (b) enforce our Terms of Use or other agreements; or (c) protect our rights, property, or safety or the rights, property, or safety of our users or others (e.g., to a consumer reporting agency for fraud protection, etc.); (4) if the disclosure is done as part of a purchase, transfer, or sale of services or assets (e.g., in the event that substantially all of our assets are acquired by another party, your Personal Information may be one of the transferred assets); (5) if the information is provided to our third-party service providers to perform functions on our behalf (e.g., analyzing data, providing marketing assistance, providing customer service, processing orders, etc.); (6) for our everyday business purposes; or (7) as permitted by applicable law or otherwise described in this Privacy Policy. When you are no longer our customer, we continue to share your information as described in this Privacy Policy. We may disclose Analytics with third parties as described elsewhere in this Privacy Policy and for our commercial purposes.</p>
                           <h2>Opt-Out Rights</h2>
                           <p className="text-left">If you do not wish to receive offers or other notices from us in the future, you can "opt out" by contacting us as indicated at the end of this Privacy Policy or by following the "unsubscribe" instructions in any communication you receive from us. Please be aware that you are not able to opt out of receiving communications about your StokkPile account or related transactions with us.</p>
                           <h2>Accessing Your Information</h2>
                           <p className="text-left">You must notify us of any change in your Personal Information by updating your StokkPile account profile through our Services. Any changes will affect only future uses of your Personal Information. Subject to applicable law, which might, from time to time, oblige us to store your Personal Information for a certain period of time, we will respect your wishes to correct inaccurate information. Otherwise, we will hold your Personal Information for as long as we believe it will help us achieve our objectives as detailed in this Privacy Policy. You can ask us whether we are storing your Personal Information and you can ask to receive a copy of that Personal Information. Before sending you any Personal Information, we will ask you to provide proof of your identity. If you are not able to provide proof of your identity, we reserve the right to refuse to send you any Personal Information. We will respond as quickly as we can to your requests for details of Personal Information we hold about you.</p>
                           <h2>Security</h2>
                           <p className="text-left">We have, and require our third-party service providers that receive Personal Information from us to have, a comprehensive written information security program that contains administrative, technical, and physical safeguards for our respective physical facilities and in our respective computer systems, databases, and communications networks that are reasonably designed to protect information contained within such systems from loss, misuse, or alteration. When your bank account information is transmitted via our Services, it will be protected by encryption technology, such as Secure Sockets Layer (SSL). No method of electronic transmission or storage is 100% secure. Therefore, we cannot guarantee the absolute security of your Personal Information. You also play a role in protecting your Personal Information. Please safeguard your username and password for your StokkPile account and do not share them with others. If we receive instructions using your StokkPile account login information, we will consider that you have authorized the instructions. You agree to notify us immediately of any unauthorized use of your StokkPile account or any other breach of security. We reserve the right, in our sole discretion, to refuse to provide our Services, terminate StokkPile accounts, and to remove or edit content.</p>
                           <h2>Protecting Children's Privacy</h2>
                           <p className="text-left">Our Services are not directed or intended to be attractive, to children under the age of 18. We do not knowingly collect Personal Information from children under the age of 18. If you are under the age of 18, do not use our Services or submit any information to us.</p>
                           <h2>Links to Third-Party Websites</h2>
                           <p className="text-left">When you use our Services, you may be directed to other websites that are beyond our control. We may also allow third-party websites or applications to link to our Services. We are not responsible for the privacy practices of any third parties or the content of linked websites, but we do encourage you to read the applicable privacy policies and terms and conditions of such parties and websites. This Privacy Policy only applies to our Services.</p>
                           <h2>Changes to our Privacy Policy</h2>
                           <p className="text-left">Subject to applicable law, we may revise this Privacy Policy at any time and in our sole discretion. When we revise this Privacy Policy, we will post the revised version via our Services and will update the date at the top of this Privacy Policy. The revised Privacy Policy will be effective upon posting via our Services, unless otherwise set forth therein or as otherwise required by applicable law. You are free to decide whether or not to accept a revised version of this Privacy Policy, but accepting this Privacy Policy, as revised, is required for you to continue accessing or using our Services. If you do not agree to the terms of this Privacy Policy or any revised version of this Privacy Policy, your sole recourse is to terminate your access and use of our Services. Except as otherwise expressly stated by us, your access and use of our Services is subject to the version of this Privacy Policy in effect at the time of access or use.</p>
                           <h2>How can I contact Laybuy?</h2>
                           <p className="text-left">If you have any questions, comments, or concerns regarding these Terms or the Services, please contact us at info@laybuy.app</p>
                        </div>
                        {/**<a href="javascript:;" onclick="scrollToElement('#usp');" className="btn blue _margin-50">Learn More</a>**/}
                    </div>
                </section>

                <section className="content cta">
                    <div className="container _center">
                        {/* <h1 className="bold">Over ₦1,000,000,000 securely saved every month.</h1> */}
                        <p>
                            Laybuy uses bank-level security measures to keep your data safe.<br/>Laybuy users
                            save &amp; invest
                            well over huge amount every single month, and they are just getting started.
                        </p>
                        <Link to="/register" className="btn blue _margin-20">Create Account for
                            Free</Link>

                        <div className="_clear"></div>

                    </div>
                </section>

                <footer className="content">
                    <div className="container">
                        <ul className="_right foot-links">
                            <h3>COMPANY</h3>
        
                            <li>
                                <Link to="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/terms">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>
                            <li>

                    <span className="icon">
                        <a href="https://www.facebook.com/" target="_blank"><img alt="Facebook"
                                                                                            src="https://www.piggyvest.com//images/social-media-icon-FB-80-min.png"/></a>
                    </span>

                                <span className="icon">
                        <a href="https://twitter.com/" target="_blank">
                            <img alt="Twitter"
                                 src="https://www.piggyvest.com//images/social-media-icon-TWT-80-min.png"/></a>
                    </span>

                                <span className="icon">
                        <a href="https://instagram.com/" target="_blank"><img alt="Instagram"
                                                                                         src="https://www.piggyvest.com//images/social-media-icon-instagram-80-min.png"/></a>
                    </span>
                            </li>
                        </ul>

                        <ul className="_right foot-links">
                            <h3>Quick Links</h3>
                            {/* <li>
                                <a href="https://www.piggyvest.com/autosave">AutoSave™</a>
                            </li>
                            <li>
                                <a href="https://www.piggyvest.com/link">PiggyLink</a>
                            </li>
                            <li>
                                <a href="https://www.piggyvest.com/quicksave">Quick Save™</a>
                            </li>
                            <li>
                                <a href="https://www.piggyvest.com/safelock">SafeLock™</a>
                            </li>
                            <li>
                                <a href="https://www.piggyvest.com/withdrawals">Withdrawals &amp; Breaking</a>
                            </li>
                            <li>
                                <a href="https://www.piggyvest.com/salarysavingsteps">Salary Management</a>
                            </li> */}
                        </ul>

                        <div className="info">
                            {/* <a href="#"><img
                                src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/piggy-png_1_.png"
                                className="logo" alt=""/></a> */}
                            <p className="_margin-10">
                                Laybuy is the largest online
                                savings &amp; investing
                                platform for building materials in Nigeria. 
                                {/* <br/>For over 4 years, our customers have saved and invested
                                billions
                                of Naira
                                that they would normally be tempted to spend.<br/> <br/>
                                Office: Tesmot House, 3 Abdulrahman Okene Close, off Ligali Ayorinde Street,
                                Victoria Island, Lagos. */}
                            </p>
                            <p><a href="tel:0700 933 933 933">0700 933 933 933 <b>(Mon-Fri from 9am-5pm)</b></a> - <a
                                href="mailto:contact@laybuy.app">contact@laybuy.app</a></p>
                            <p className="copy">© 2020 Laybuy</p>
                        </div>

                    </div>
                </footer>


            </>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {})(Privacy)
