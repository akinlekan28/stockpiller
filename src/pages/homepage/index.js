import React, {Component, createRef} from 'react'
import { Link } from 'react-router-dom'
// import './homepage.scss'
import {connect} from "react-redux";

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
                <header className="main-header">
                    <section className="intro-text _margin-100">
                        <div className="container mainheroholder">
                            <div className="_mobilecenter">
                                <h1 className="_half-width _margin-50 bluecolor bold">Stock Pile<br/>Building Materials</h1>
                                <p className="_half-width _margin-20 ashcolor">Accumulate building materials by automatically depositing small amounts of money,which is instantly converted to equivalent amount of building materials which you can witdraw and pick up tommorow or in several years time.</p>
                                {/* .<br/><br/>Earn 10% - 15.5% interests on
                                    savings.<br/>Earn
                                    over 25% return on investments.</p> */}
                                <a href="/register" className="btn _margin-20">Create a Free Account</a>
                                <div>
                                    {/* <a href="https://www.piggyvest.com/appstorelink/ios" target="_blank">
                                        <img src="https://www.piggyvest.com//images/iosbadge-101-image.png"
                                             className="download app_store_badges"/>
                                    </a>
                                    <a href="https://www.piggyvest.com/appstorelink/android" target="_blank">
                                        <img src="https://www.piggyvest.com//images/google-play-badge.png"
                                             className="download app_store_badges"/>
                                    </a> */}
                                </div>
                                {/**
                                 <span><img src="https://www.piggyvest.com/sitestatics/img/bankcards.png" className="cards-icon" alt=""></span>
                                 **/}
                            </div>
                        </div>
                    </section>
                </header>
                {/** Header End **/}

                {/** Protection **/}
                <section className="content grayback">
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
                </section>
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
                        <h1 className="_margin-100 bold">Save smartly &amp; responsibly!</h1>
                        <div className="_subtitle">Laybuy helps you reach your savings target much faster by.<br/>accumulating building materials automatically depositing small or huge amounts of money
                        </div>
                        <div className="how-works howtostart _margin-50">
                            <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Easy to use</h3>
                                <p>Deposit regular amounts of money on a recurring basis, automatically or manually.</p>
                            </div>
                            <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Flexible</h3>
                                <p>You can withdraw and pickup your saved materials anywhere in the Country.</p>
                            </div>
                            <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Transparent</h3>
                                <p>Login to see accumulated materials in your virtual store, track transactions.</p>
                            </div>
                        </div>
                        {/**<a href="javascript:;" onclick="scrollToElement('#usp');" className="btn blue _margin-50">Learn More</a>**/}
                    </div>
                </section>
                {/** Savings BOX **/}

                {/** Invest BOX **/}
                <section className="content investcontent">
                    <div className="container _center">
                        <h1 className="_margin-100 bold">How it works</h1>
                        <div className="_subtitle">Many investments are expensive, which makes it hard to get
                            started.<br/>At Laybuy,
                            you too can invest in tiny &amp; affordable chunks by signing up to our platform
                        </div>
                        <div className="how-works howtostart _margin-50">
                            <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-4.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Sign Up</h3>
                                <p>Join other laybuy users to co-invest in guaranteed savings,
                                    investments &amp; other
                                    amazing projects.</p>
                            </div>
                            <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-5.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Specify the materials</h3>
                                <p>Choose a material you wish to make deposit on and you're one step away from achieving your savings goal.</p>
                            </div>
                            <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                                <img
                                    src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-6.png"
                                    alt=""/>
                                <h3 className="bluecolor bold">Sit back and Relax</h3>
                                <p>Easily monitor the progress of your investments and savings from your laybuy
                                    dashboard.</p>
                            </div>
                        </div>
                        {/**<a href="javascript:;" onclick="scrollToElement('#usp');" className="btn blue _margin-50">Learn More</a>**/}
                    </div>
                </section>
                {/** Invest BOX **/}

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

export default connect(mapStateToProps, {})(Homepage)
