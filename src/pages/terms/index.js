import React, {Component, createRef} from 'react'
import { Link } from 'react-router-dom'
// import './homepage.scss'
import {connect} from "react-redux";

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
                        {/* <form action="https://www.piggyvest.com/login" method="post"
                              className="_margin-100 signin-form">
                            <label for="email" className="_left">Email or Phone Number</label>
                            <input type="text" name="email" value="" className="_left _margin-10"/>
                            <label for="password" className="_margin-20 _left">Password</label>
                            <input type="password" name="password" className="_left _margin-10"/>
                            <div className="clearboth"></div>
                            <div className="actionholder">
                                <input type="hidden" name="loginacc" value="1"/>
                                <input type="hidden" name="goto" value="https://www.piggyvest.com/"/>
                                <input type="submit" className="btn _margin-20" value="Log In"/>

                                <div className="_margin-20">
                                    <a href="https://www.piggyvest.com/register"
                                       className="_margin-20">Create an Account Instead</a>
                                    <br/>
                                    <a href="https://www.piggyvest.com/forgot"
                                       className="_margin-20">Forgot Password?</a>
                                </div>
                            </div>
                        </form> */}
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
                            {/**
                             <l1><span className="products">Products</span>
                             <ul className="sub-menu">
                             <li><a href="https://www.frontdesk.ng">FrontDesk.ng</a></li>
                             <li><a href="https://www.pushcv.com/">PushCV</a></li>
                             </ul>
                             </l1>
                             **/}
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

                            {/**
                             <li className="menu-list">
                             <a href="#" className="menu-link">Products</a>
                             <ul className="submenu">
                             <li>
                             <a href="https://www.frontdesk.ng" target="_blank" className="submenu-link front">
                             FrontDesk.ng <br/>
                             <span className="submenu-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                             </a>
                             </li>
                             <li>
                             <a href="https://www.pushcv.com/" target="_blank" className="submenu-link push">
                             PushCV <br/>
                             <span className="submenu-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae?</span>
                             </a>
                             </li>
                             </ul>
                             </li>
                             **/}

                            <li className="menu-list"><Link to="/about"
                                                         className="menu-link visible">About</Link></li>
                            {/* <li className="menu-list"><a href="https://www.piggyvest.com/stories"
                                                         className="menu-link">Stories</a></li> */}
                            <li className="menu-list"><Link to="/faq"
                                                         className="menu-link">FAQ</Link></li>
                            {/* <li className="menu-list"><a href="https://medium.com/@Piggyvest" target="_blank"
                                                         className="menu-link">Blog</a>
                            </li> */}
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

                {/** Protection **/}
                {/* <section className="content grayback">
                    <div className="container _center securealertbox">
                        <div className="imagepart">
                            <img
                                src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/security-login-400-min.png"
                                alt=""/>
                        </div>
                        <div className="textpart">
                            <div className="textheader bluecolor bold">Your Security is our Priority</div>
                            <div className="textinfo ashcolor">Laybuy uses the highest levels of Internet Security,
                                and it is secured
                                by 256 bits SSL security encryption to ensure that your information is completely
                                protected from
                                fraud.
                            </div>
                        </div>
                    </div>
                </section> */}
                {/** Protection **/}

                {/** Why Piggy
                 <section className="content">
                 <div className="container minicontainer _center">
                 <h1 className="_margin-100 bold">Why PiggyVest?</h1>
                 <div className="why_p_box">
                 <div>
                 <div className="pointspart">
                 <div className="pheader bluecolor bold">Easy To Use</div>
                 <div className="pinfo ashcolor">Simple design. Save manually or automatically.</div>
                 </div>
                 <div className="pointspart">
                 <div className="pheader bluecolor bold">Stay Disciplined</div>
                 <div className="pinfo ashcolor">Avoid the temptation to withdraw unnecessarily. Lock away funds for a set period.</div>
                 </div>
                 <div className="pointspart">
                 <div className="pheader bluecolor bold">Flexible</div>
                 <div className="pinfo ashcolor">Choose the best type of savings and investment plan to suit your needs.</div>
                 </div>
                 <div className="pointspart">
                 <div className="pheader bluecolor bold">Transparent</div>
                 <div className="pinfo ashcolor">Track your transaction activities easily.</div>
                 </div>
                 </div>
                 <div><img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/why-piggy-min.png" alt=""></div>
                 </div>
                 </div>
                 </section>
                 Why Piggy **/}


                {/** Savings BOX **/}
                <section className="content">
                    <div className="container _center">
                        <h1 className="_margin-100 bold">Terms of Use</h1>
                        {/* <div className="_subtitle">Laybuy helps you reach your savings target much faster by.<br/>accumulating building materials automatically depositing small or huge amounts of money
                        </div> */}
                        <div className=" _margin-50 privacy-card">
                           <p className="text-left">These Terms of Use (these "Terms") represent an agreement between you and Artizanni Ltd. ("StokkPile") and contain the terms and conditions governing your use of and access to our website at https://www.laybuy.app and all affiliated websites owned and operated by us (collectively, the "Website") and our products, services, and applications (together with the Website, the "Services"). "You" and "your" mean the person who uses or accesses the Services. "We," "us," and "our" mean StokkPile and its successors, affiliates, and assignees. As used in these Terms, "StokkPile Account" means the account you have with us for the Services.

Your use of and access to the Services are subject at all times to these Terms and our Privacy Policy. Please read these Terms and our Privacy Policy carefully. By using or accessing the Services, you represent that you have read and understand these Terms and our Privacy Policy and you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all the terms and conditions of these Terms and our Privacy Policy, do not use or access the Services. THESE TERMS INCLUDE, AMONG OTHER THINGS, YOUR AUTHORIZATION FOR DEBITS AND CREDITS FROM AND TO YOUR BANK ACCOUNT (AS DEFINED BELOW) VIA THE AUTOMATED CLEARING HOUSE NETWORK ("ACH") AND A BINDING ARBITRATION PROVISION CONTAINING A CLASS ACTION WAIVER.</p>
                           <h2>YOUR CONSENT TO USE ELECTRONIC SIGNATURES AND COMMUNICATIONS</h2>
                           <p className="text-left">Your Consent. To the extent permitted by applicable law, you consent to use electronic signatures and to electronically receive all records, notices, statements, communications, and other items for all services provided to you under these Terms and in connection with your relationship with us (collectively, "Communications") that we may otherwise be required to send or provide you in paper form (e.g., by mail). By accepting and agreeing to these Terms electronically, you represent that: (1) you have read and understand this consent to use electronic signatures and to receive Communications electronically; (2) you satisfy the minimum hardware and software requirements specified below; and (3) your consent will remain in effect until you withdraw your consent as specified below. Your Right to Withdraw Your Consent. Your consent to receive Communications electronically will remain in effect until you withdraw it. You may withdraw your consent to receive further Communications electronically at any time by contacting us via info@stokkpile.com. If you withdraw your consent to receive Communications electronically, we will close your StokkPile Account and return the balance in your StokkPile Account to your Bank Account as set forth in these Terms, and you will no longer be able to use your StokkPile Account or the Services, except as expressly provided in these Terms. Any withdrawal of your consent to receive Communications electronically will be effective only after we have a reasonable period of time to process your withdrawal. Please note that withdrawal of your consent to receive Communications electronically will not apply to Communications electronically provided by us to you before the withdrawal of your consent becomes effective. You Must Keep Your Contact Information Current With Us. In order to ensure that we are able to provide Communications to you electronically, you must notify us of any change in your email address and your mobile device number or other text message address by updating your profile on the Website. Copies of Communications. You should print and save and/or electronically store a copy of all Communications that we send to you electronically. Hardware and Software Requirements. In order to access and retain Communications provided to you electronically, you must have: (1) a valid email address; (2) a computer or other mobile device (such as tablet or smart phone) that operates on a platform like Windows or a Mac; (3) a connection to the Internet; (4) a Current Version of Internet Explorer 8 (or higher), Mozilla Firefox 7.0, Safari 5, or Chrome 15; (5) a Current Version of a program that accurately reads and displays PDF files, such as Adobe Acrobat Reader version 7 or higher; (6) a computer or device and an operating system capable of supporting all of the above; and (7) a printer to print out and save Communications in paper form or electronic storage to retain Communications in an electronic form. "Current Version" means a version of the software that is currently being supported by its publisher. Changes. We reserve the right, in our sole discretion, to communicate with you in paper form. In addition, we reserve the right, in our sole discretion, to discontinue the provision of electronic Communications or to terminate or change the terms and conditions on which we provide electronic Communications. Except as otherwise required by applicable law, we will notify you of any such termination or change by updating these Terms on the Website or delivering notice of such termination or change electronically.</p>
                           <h2>What are the requirements to use the Services?</h2>
                           <p className="text-left">In order to use the Services, you must: (a) accept and agree to these Terms and our Privacy Policy; (b) register with us on the Website; (c) be a Nigerian citizen (or a legal Nigerian resident) of at least 18 years of age (or older if you reside in a state where the majority age is older); (d) have a Bank Account with a Nigerian financial institution; and (e) provide all information requested by us, such as your name, email address, mobile device number, online credentials for your Bank Account, and such other information as we may request from time to time (collectively, "User Information"). You represent and warrant that all User Information you provide us from time to time is truthful, accurate, current, and complete, and you agree not to misrepresent your identity or your User Information. You agree to promptly notify us of changes to your User Information by updating your StokkPile Account on the Website; provided, however, that you must notify us at least three Business Days before any changes to your Bank Account information, including, but not limited to, the closure of your Bank Account for any reason by emailing info@stokkpile.com or by updating your StokkPile Account via the Website. If we approve your registration, you will be authorized to use the Services, subject to these Terms. For our compliance purposes and in order to provide the Services to you, you hereby authorize us to, directly or through a third-party, obtain, verify, and record information and documentation that helps us verify your identity and Bank Account information. When you register for the Services and from time to time thereafter, we may require you to provide and/or confirm information and documentation that will allow us to identify you, such as: A copy of your government-issued photo ID, such as a passport or driver’s license; A copy of a utility bill, bank statement, affidavit, or other bill, dated within three months of our request, with your name and Nigerian street address on it; and Such other information and documentation that we may require from time to time. By using the Services and providing User Information to us, you automatically authorize us to obtain, directly or indirectly through our third-party service providers and without any time limit or the requirement to pay any fees, information about you and your Bank Account from the financial institution holding your Bank Account and other third-party websites and databases as necessary to provide the Services to you. For purposes of such authorization, you hereby grant StokkPile and our third-party service providers a limited power of attorney, and you hereby appoint StokkPile and our third-party service providers as your true and lawful attorney-in-fact and agent, with full power of substitution and resubstitution, for you and in your name, place, and stead, in any and all capacities, to access third-party websites, servers, and documents; retrieve information; and use your User Information, all as described above, with the full power and authority to do and perform each and every act and thing requisite and necessary to be done in connection with such activities, as fully to all intents and purposes as you might or could do in person. YOU ACKNOWLEDGE AND AGREE THAT WHEN STOKKPILE OR OUR THIRD-PARTY SERVICE PROVIDERS ACCESS AND RETRIEVE INFORMATION FROM SUCH THIRD-PARTY WEBSITES, STOKKPILE AND OUR THIRD-PARTY SERVICE PROVIDERS ARE ACTING AS YOUR AGENT, AND NOT THE AGENT OR ON BEHALF OF THE THIRD PARTY. You agree that other third parties shall be entitled to rely on the foregoing authorization, agency, and power of attorney granted by you. You understand and agree that the Services are not endorsed or sponsored by any third-party account providers accessible through the Services. We make no effort to review information obtained from the financial institution holding your Bank Account and other third-party websites and databases for any purpose, including, but not limited to, accuracy, legality, or non-infringement. As between StokkPile and our third-party service providers, StokkPile owns your confidential User Information. The information you provide us is subject to our Privacy Policy.</p>
                           
                           <h2>How do I use the Services?</h2>
                           <p className="text-left">The purpose of the Services is to try to help you save money with minimal effort towards stockpiling building materials. We debit your debit card (the amount you specify). You can request for your building materials at any time on any of our specified delivery days. Only funds from your debit card may be transferred to your StokkPile Account. The funds in your StokkPile Account are held at a bank for your benefit. Your funds will remain in your StokkPile Account valued at the rate of building materials until you instruct us to transfer any or all of your materials to a location of your choice by emailing us at info@stokkpile.com. We will generally fulfil the delivery of materials from your StokkPile Account to your desired location within five Business Days of when we receive your request. It is important to know the amount of available materials in your StokkPile Account before instructing us to deliver building materials from your StokkPile Account to your location or building site. If you do not have sufficient available materials in your StokkPile Account to cover the amount of the requested delivery, your request for the transfer will be declined. . You may not transfer the materials in your StokkPile Account to another user on and off the app. You are solely responsible for determining whether the funds debited from your debit card and the funds maintained in your StokkPile Account are acceptable to you. We are not responsible for any third-party fees that may be incurred as a result of using the Services, including, but not limited to, third-party fees incurred as a result of maintaining insufficient funds in your Bank Account. StokkPile is not a building contractor, and the Services are not intended to cover the construction of your properties. Your building requirements are unique. We are not responsible for ensuring your debit card has sufficient funds for your needs, purposes, or transactions. We do not make any representations, warranties, or guarantees of any kind that the Services are appropriate for you. Before using the Services, you should consider obtaining additional information and advice from a financial adviser.</p>
                           <h2>How do I check the material in my Laybuy Account?</h2>
                           <p className="text-left">You may obtain information about the balance of funds in your StokkPile Account at any time or by logging in to your account on the Website.</p>
                           <h2>Are there any fees for using the Services?</h2>
                           <p className="text-left">There are no transaction charges or monthly fee for the Services, we reserve the right to change fees for the Services in the future. We will notify you before charging a fee for the Services by delivering notice to you electronically, by posting such fee on the Website, or by any other method permitted by applicable law. If you continue using the Services after such notice, you must pay all applicable fees for the Services.</p>
                           <h2>What is the penalty fee or penalty charge?</h2>
                           <p className="text-left">Withdrawing all or part of your savings is completely FREE of charge, however, you agree that you will be charged a penalty fee if you withdraw your savings outside any of the specified delivery dates published on StokkPile's home page and FAQ page.</p>
                           <h2>What are some restrictions on using the Services?</h2>
                           <p className="text-left">You may only use the Services for your own personal, non-commercial use and not on behalf of or for the benefit of any third party. Your use of the Services must comply with all applicable law. If your use of the Services is prohibited by applicable law, then you are not authorized to use the Services. We are not responsible if you use the Services in any manner that violates applicable law. You agree not to authorize any other person or entity to use your user name and password or mobile device to access the Services. You are solely responsible for the maintenance, confidentiality, and security of your username, password, and other User Information. Except as otherwise required by applicable law, you are responsible for all transactions and other activities authorized or performed using your username and password or mobile device, whether authorized or unauthorized by you. Except as otherwise expressly stated in these Terms or required by applicable law, we are not responsible for any losses arising out of the loss or theft of your User Information or your mobile device or from unauthorized or fraudulent transactions associated with your Bank Account or your StokkPile Account. If you suspect or become aware of any unauthorized activity or access to your username, password, or mobile device, you must contact us immediately at info@stokkpile.com. We offer the Services and the features, information, materials, and content provided and depicted through the Services (collectively, "Content") solely for your personal use for the purposes described therein and in these Terms. Any and all other uses are prohibited. You may not restrict or inhibit any other person from using or enjoying the Services or Content. The Services and Content are protected by copyright, trademark, patent, and other intellectual property laws. We expressly reserve all rights and remedies under applicable law. Except as expressly provided by these Terms or with our prior written consent, you may not use, modify, disassemble, decompile, reverse engineer, reproduce, distribute, rent, sell, license, publish, display, download, transmit, or otherwise exploit any Content in any form by any means. Without limiting the foregoing, you agree not to (and not to allow any third party to): (a) use any robot, spider, scraper, or other automatic or manual device, process, or means to access the Services or copy any Content, except as expressly authorized by us; (b) take any action that imposes or may impose (in our sole determination) an unreasonable or a disproportionately large load on the Services or our infrastructure; (c) utilize any device, software, or routine that will interfere or attempt to interfere with the functionality of the Services; (d) rent, lease, copy, provide access to, or sublicense any portion of the Services or Content to a third party; (e) use any portion of the Services or Content to provide, or incorporate any portion of the Services or Content into, any product or service provided to a third party; (f) reverse engineer, decompile, disassemble, or otherwise seek to obtain the source code of the Services or Content; (g) modify the Services or Content or create any derivative product from any of the foregoing; (h) remove or obscure any proprietary or other notices contained in the Services or Content; (i) use the Services or Content in any way that is illegal, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable, as we may determine in our sole discretion; (j) jeopardize the security of your StokkPile Account or any other person’s StokkPile Account (such as allowing someone else to use your username and password to access the Services); (k) attempt, in any manner, to obtain the username, password, account, or other security information from any other user of the Services; (l) violate the security of any computer network or crack any passwords or security encryption codes; or (m) run Maillist, Listserv, any form of auto-responder or "spam," or any processes that run or are activated while you are not logged in to access the Services. We may, but are not obligated to, monitor your use of the Services and Content. We do not grant you any licenses, express or implied, to our intellectual property or the intellectual property of our licensors, except as expressly stated in these Terms. We and our third-party licensors retain all right, title, and interest in and to the Services, Content, and any associated patents, trademarks, copyrights, mask work rights, trade secrets, and other intellectual property rights. The Services may permit you to submit content, send emails and other communications, and provide other information for publication or distribution to third parties (collectively, "User Content"). Any User Content must not be illegal, threatening, obscene, racist, defamatory, libelous, pornographic, infringing of intellectual property rights, promoting of illegal activity or harm to groups and/or individuals, invasive of privacy, purposely false or otherwise injurious to third parties, or objectionable and must not consist of or contain software, computer viruses, commercial solicitation, political campaigning, chain letters, mass mailings, or any form of "spam." If you submit User Content, and unless we indicate otherwise, you grant us a nonexclusive, perpetual, royalty-free, irrevocable, and fully sublicensable (through multiple tiers) right to use, modify, reproduce, adapt, translate, publish, create derivative works from, distribute, display, and otherwise exploit such User Content throughout the world in any media. We take no responsibility and assume no liability for any User Content submitted by you or any other user or third party. To the extent permitted by applicable law, we may, in our sole discretion and without liability to you, terminate (or suspend access to) your use of the Services, Content, or your StokkPile Account for any reason, including, but not limited to, your breach of these Terms.</p>
                           <h2>What do I do if my mobile device is lost or stolen or if I suspect someone has gained unauthorized access to my username or password?</h2>
                           <p className="text-left">If your mobile device is lost or stolen or if you suspect someone has gained unauthorized access to your username or password, you must contact us immediately at info@laybuy.app. In order to take any action, you will need to provide certain User Information so we can verify your identity.</p>
                           <h2>How does Laybuy communicate with me about the Services?</h2>
                           <p className="text-left">In order to use the Services, you must provide and verify your mobile device number or other text message address to us, and you must expressly consent to receive text messages relating to the Services at that number or address. Third-party data and message fees may apply. To verify your mobile device number or text message address, we may send you a code via text message to the mobile device number or text message address you provide, and you must enter that code as instructed by us. If you change your mobile device number or text message address, you must promptly provide and verify your new mobile device number or text message address. In addition, if you provide your email address to us, we may send you important notices via email about the Services.</p>
                           <h2>What do I need to know about third-party websites?</h2>
                           <p className="text-left">he Services may contain links or connections to third-party websites or services that are not owned or operated by us or our third-party service providers or licensors. We provide such links and connections for your reference only. We do not control such third-party websites or services and are not responsible for their availability or content. Our inclusion of such links and connections does not imply our endorsement of such third-party websites or services or any association with their owners or operators. We assume no liability whatsoever for any such third-party websites or services or any content, features, products, or practices of such third-party websites or services. Your access and use of such third-party websites and services is subject to applicable third-party terms and conditions and privacy policies. We encourage you to read the terms and conditions and privacy policy of each third-party website or service that you visit or utilize.</p>
                           <h2>What if I want to stop using the Services?</h2>
                           <p className="text-left">You may stop using the Services, close your StokkPile Account, and cancel these Terms at any time by contacting us at info@laybuy.app and providing sufficient information for us to verify your identity. Notwithstanding the foregoing, if there are any pending transactions relating to your StokkPile Account when we receive your termination notice, we will close your StokkPile Account promptly after such transactions are completed. Your termination of these Terms will not affect any of our rights or your obligations arising under these Terms prior to termination. Upon the closure of your Laybuy Account, we will transfer the available materials in your StokkPile Account, if any, to your default delivery address on the next delivery date. If your delivery address is not verified or otherwise unable to deliver to the location, we will send you an email to agree on how to send a check to you.. If you do not use the Services for a certain period of time, applicable law may require us to report the materials in your StokkPile Account as unclaimed property. If this occurs, we may try to locate you at the address shown in our records. If we are unable to locate you, we may be required to deliver any funds valued for building materials in your StokkPile Account to the applicable state as unclaimed property. The specified period of time to report and deliver funds to a state varies by state, but usually ranges between two and five years. Provisions of these Terms that, by their nature, should survive termination of these Terms will survive termination of these Terms.</p>
                           <h2>What about my privacy?</h2>
                           <p className="text-left">Laybuy takes the privacy of its users very seriously. You understand that by using the Services, you consent to the collection, use, storage, and disclosure of your information as set forth in these Terms and our Privacy Policy.</p>
                           <h2>Will StokkPile ever change these Terms or the Services?</h2>
                           <p className="text-left">We may add to or terminate any of the Services or amend these Terms at any time, in our sole discretion, without providing notice to you, subject to applicable law. We reserve the right, subject to applicable law, to deliver to you any notice of changes to existing terms or the addition of new terms by posting an updated version of these Terms on the Website or delivering notice thereof to you electronically. You are free to decide whether or not to accept a revised version of these Terms, but accepting these Terms, as revised, is required for you to continue accessing or using the Services. If you do not agree to these Terms or any revised version of these Terms, your sole recourse is to terminate your access or use of the Services. Except as otherwise expressly stated by us, your access and use of the Services are subject to, and constitute your acceptance of, the version of these Terms in effect at the time of your access or use.</p>
                           <h2>How can I contact Laybuy?</h2>
                           <p className="text-left">If you have any questions, comments, or concerns regarding these Terms or the Services, please contact us at info@laybuy.app</p>
                        </div>
                        {/**<a href="javascript:;" onclick="scrollToElement('#usp');" className="btn blue _margin-50">Learn More</a>**/}
                    </div>
                </section>
                {/** Savings BOX **/}


                {/**
                 <section className="content grayback" id="usp">
                 <div className="container minicontainer">
                 <h1 className="_margin-50 _center bold">4 Features To Choose From</h1>
                 <div className="feature _margin-20">
                 <div className="_half-width _padding-20 _center _flex feature-image">
                 <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/1b-min.png" alt="">
                 </div>
                 <div className="_half-width _padding-20 _margin-100 _flex feature-text">
                 <h2>1. Piggybank™ Savings</h2>
                 <p>Choose from automatic daily, weekly, monthly savings plans to suit your needs. You can also save as you go, or on your own terms. <i>Withdrawals are resctricted</i> to withdrawal days or a date you set.
                 </div>
                 </div>
                 </div>
                 </section>


                 <section className="content" id="usp">
                 <div className="container minicontainer">
                 <div className="feature _margin-20">
                 <div className="_half-width _padding-20 _margin-100 _flex feature-text">
                 <h2>2. SafeLock™</h2>
                 <p><b className="bold">SafeLock™ on PiggyVest Works like Treasury Bills - </b> Invest and grow your money in a flexible way. Put away funds from as little as 10 days to 1,000 days and earn over 13% annualized interest paid to you upfront instantly.</p>
                 </div>
                 <div className="_half-width _padding-20 _center _flex feature-image">
                 <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/2b-min.png" alt="">
                 </div>
                 </div>
                 </div>
                 </section>


                 <section className="content grayback" id="usp">
                 <div className="container minicontainer">
                 <div className="feature _margin-20">
                 <div className="_half-width _padding-20 _center _flex feature-image">
                 <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/3b-min.png" alt="">
                 </div>
                 <div className="_half-width _padding-20 _margin-100 _flex feature-text">
                 <h2>3. Target Savings</h2>
                 <p><b className="bold">Reach your savings goals faster - </b> Create multiple savings targets to accommodate all your savings goals and also get interests paid to you daily.</p>
                 </div>
                 </div>
                 </div>
                 </section>


                 <section className="content" id="usp">
                 <div className="container minicontainer">
                 <div className="feature _margin-20">
                 <div className="_half-width _padding-20 _margin-100 _flex feature-text">
                 <h2>4. Group Savings Challenge</h2>
                 <p><b className="bold">Simplified group savings - </b> You can save towards a common goal with friends, family and co-workers. Everyone in the group also gets interests paid to them daily.</p>
                 </div>
                 <div className="_half-width _padding-20 _center _flex feature-image">
                 <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/4b-min.png" alt="">
                 </div>
                 </div>
                 </div>
                 </section>
                 Features End **/}

                {/**
                 <section className="content grayback">
                 <div className="container _center spaceout">
                 <h1 className="bold">Over ₦1,000,000,000 securely saved every month.</h1>
                 <p>
                 PiggyVest uses bank-level security measures to keep your data safe. PiggyVest users save & invest well over a billion every single month, and they are just getting started.
                 </p>
                 <a href="https://www.piggyvest.com/register" className="btn blue _margin-20">Create Account for Free</a>

                 <div className="_clear"></div>
                 <a href="https://www.piggyvest.com/appstorelink/ios" target="_blank">
                 <img src="https://www.piggyvest.com//images/iosbadge-101-image.png" className="download app_store_badges" />
                 </a>
                 <a href="https://www.piggyvest.com/appstorelink/android" target="_blank">
                 <img src="https://www.piggyvest.com//images/google-play-badge.png" className="download app_store_badges" />
                 </a>

                 </div>
                 </section>
                 **/}

                {/**
                 <section className="content grayback">
                 <div className="container _center spaceout">
                 <h1 className="bold">It's Simple, Get Started in 2 Minutes!</h1>
                 <p>Create a PiggyVest account and see what it feels like to really save and watch your money grow.</p>
                 <a href="https://www.piggyvest.com/register" className="btn blue _margin-20">Create Account for Free</a>

                 <div className="_clear"></div>
                 <a href="https://www.piggyvest.com/appstorelink/ios" target="_blank">
                 <img src="https://www.piggyvest.com//images/iosbadge-101-image.png" className="download app_store_badges" />
                 </a>
                 <a href="https://www.piggyvest.com/appstorelink/android" target="_blank">
                 <img src="https://www.piggyvest.com//images/google-play-badge.png" className="download app_store_badges" />
                 </a>

                 </div>
                 </section>
                 **/}


                {/**
                 <section className="content">
                 <div className="container _center">
                 <h1 className="_margin-100 bold">How To Get Started</h1>
                 <div className="how-works howtostart _margin-50">
                 <div className="_width-33 _padding-20 _flex">
                 <img src="https://www.piggyvest.com/sitestatics/img/open-piggy-min.jpg" alt="">
                 <h3 className="bluecolor bold">Create an Account</h3>
                 <p>Create an account for FREE, set how much and how frequently you want to save into your Piggybank.ng account.</p>
                 </div>
                 <div className="_width-33 _padding-20 _flex">
                 <img src="https://www.piggyvest.com/sitestatics/img/small-small-min.jpg" alt="">
                 <h3 className="bluecolor bold">Set Your Savings Plan</h3>
                 <p>Daily, weekly or monthly, Piggybank.ng gets the amount you set from your debit card safely into your Piggybank.ng account.</p>
                 </div>
                 <div className="_width-33 _padding-20 _flex">
                 <img src="https://www.piggyvest.com/sitestatics/img/withdraw-min.jpg" alt="">
                 <h3 className="bluecolor bold">Watch Your Savings Grow</h3>
                 <p>You can withdraw all or part of your savings into your bank account for FREE only on your set withdrawal day or be charged a <b>breaking fee</b>.</p>
                 </div>
                 </div>
                 <a href="javascript:;" onclick="scrollToElement('#usp');" className="btn blue _margin-50">Learn More</a>
                 </div>
                 </section>
                 **/}

                {/* <section className="content saverofmonth-section">
                    <div className="container minicontainer">
                        <h1 className="_center _margin-20 bold">The saver of the month!</h1>
                        <div className="feature _margin-20">
                            <div className="_half-width _padding-20 feature-image">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/main-assets/smallpic8015576a0c.jpeg"
                                    className="meet-img" alt=""/>
                            </div>
                            <div className="_half-width _padding-20 _margin-100 feature-text featuremonth-text">
                                <h1>Meet Chef Obubu</h1>
                                <p>Every month, we shine a spotlight on one saver, asking them questions about their
                                    savings culture
                                    and how the product is specifically helping them shape how they spend and save for
                                    future
                                    responsibilities.</p>
                                <a href="https://medium.com/@PiggyVest/meetapiggyvestsaver-chef-obubu-3f42ea15e4df"
                                   target="_blank"
                                   className="btn _margin-20">Meet Chef Obubu</a>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/** Stories **/}
                {/* <section className="content stories shadesection" style={{backgroundColor: '#083E9E'}}>
                    <div className="container minicontainer" style={{padding: '100px 0px'}}>
                        <h1 className="_center bold" style={{color: '#fff !important'}}>Recently verified customer
                            stories/feedback</h1>

                        <div className="story">
                            <div className="avatar"
                                 style={{backgroundImage: "url('https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img91a4c2c943.jpeg')"}}>
                                .
                            </div>
                            <div className="card">
                                <div className="name"><a
                                    href="https://www.piggyvest.com/stories/story/62c074ed9de4?utm_source=mypiggybankstorypage&amp;utm_content=mypiggybankstory&amp;utm_campaign=mypiggybankstory">Ifeoluwa
                                    A.</a></div>
                                <p className="_margin-20">"I'm an impulse spender. I buy things that I don't need, and
                                    in the end, I
                                    regret it. I then heard about piggyvest. They keep my money safe and give me an
                                    interest in it.
                                    I signed up and to some extent, my impulse spending has reduced"<span
                                        className="tinystorytime"><i>Posted on Saturday, 8th of August 2020 by 00:29 AM</i></span>
                                </p>
                            </div>
                        </div>
                        <div className="story">
                            <div className="avatar"
                                 style={{backgroundImage: "url('https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6bbf02005f.jpeg')"}}>
                                .
                            </div>
                            <div className="card">
                                <div className="name"><a
                                    href="https://www.piggyvest.com/stories/story/9043e89e5056?utm_source=mypiggybankstorypage&amp;utm_content=mypiggybankstory&amp;utm_campaign=mypiggybankstory">Ebenezer
                                    F.</a></div>
                                <p className="_margin-20">"I was introduced to this platform in January thinking that it
                                    was one of
                                    these not so legit platforms. But I gave it a trial and later saw it as a reliable
                                    platform. Now
                                    I have been able to discipline myself about careless spending and I have been...<a
                                        href="https://www.piggyvest.com/stories/story/9043e89e5056?utm_source=mypiggybankstorypage&amp;utm_content=mypiggybankstory&amp;utm_campaign=mypiggybankstory">read
                                        more</a>"<span className="tinystorytime"><i>Posted on Thursday, 6th of August 2020 by 07:49
                                AM</i></span></p>
                            </div>
                        </div>

                        <div className="_margin-50 _center">
                            <a href="https://www.piggyvest.com/stories" className="btn">Read More Amazing Stories</a>
                        </div>

                    </div>
                </section> */}
                {/** Stories End **/}


                {/**
                 <section className="content cta">
                 <div className="container _center">
                 <h1 className="bold">Let's Help You Control Your Spending Habit!</h1>
                 <p>Create a PiggyVest account in less than 5 minutes and experience what it really feels like to save & invest with ease!</p>
                 <a href="https://www.piggyvest.com/register" className="btn blue _margin-20">Create Account for Free</a>

                 <div className="_clear"></div>
                 <a href="https://www.piggyvest.com/appstorelink/ios" target="_blank">
                 <img src="https://www.piggyvest.com//images/iosbadge-101-image.png" className="download app_store_badges" />
                 </a>
                 <a href="https://www.piggyvest.com/appstorelink/android" target="_blank">
                 <img src="https://www.piggyvest.com//images/google-play-badge.png" className="download app_store_badges" />
                 </a>
                 </div>
                 </section>
                 -**/}

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
                        {/* <a href="https://www.piggyvest.com/appstorelink/ios" target="_blank">
                            <img src="https://www.piggyvest.com//images/iosbadge-101-image.png"
                                 className="download app_store_badges"/>
                        </a>
                        <a href="https://www.piggyvest.com/appstorelink/android" target="_blank">
                            <img src="https://www.piggyvest.com//images/google-play-badge.png"
                                 className="download app_store_badges"/>
                        </a> */}

                    </div>
                </section>

                {/**
                 <section className="content">
                 <div className="container _center spaceout">
                 <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/partners-2019-min.png" className="partners_image" />
                 </div>
                 </section>
                 **/}
                <footer className="content">
                    <div className="container">
                        <ul className="_right foot-links">
                            <h3>COMPANY</h3>
                            {/* <li>
                                <a href="https://www.piggyvest.com/about">About</a>
                            </li> */}
                            {/**
                             <li>
                             <a href="https://www.piggyvest.com/careers">Careers</a>
                             </li>
                             **/}
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

export default connect(mapStateToProps, {})(Terms)
