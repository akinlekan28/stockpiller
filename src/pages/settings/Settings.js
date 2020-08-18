import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser, me, updateUser } from '../../store/actions/authActions'
import './scss/nav.scss'
import './scss/settings.scss'
import { toast } from 'react-toastify'

class Settings extends Component {
  constructor() {
    super()

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      submitting: false,
    }

    this.hamburger = createRef()
    this.sliderClose = createRef()
    this.menuContainer = createRef()
    this.menu = createRef()
    this.overlay = createRef()
    this.toggle = createRef()

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  openSlider = () => {
    this.overlay.current.style.display = 'block'
    this.menuContainer.current.classList.add('active-settings')
    this.menu.current.style.display = 'block'
    setTimeout(() => {
      this.menu.current.classList.add('active-settings')
    }, 100)
  }

  closeSlider = () => {
    this.menu.current.classList.remove('active-settings')
    this.menu.current.style.display = 'none'
    setTimeout(() => {
      this.menuContainer.current.classList.remove('active-settings')
      this.overlay.current.style.display = 'none'
    }, 400)
  }

  toggleClass = (elem, className) => {
    if (elem.classList.contains(className)) {
      elem.classList.remove(className)
    } else {
      elem.classList.add(className)
    }
  }

  showNext = () => {
    this.toggleClass(this.toggle.current, 'active-settings')
  }

  componentDidMount() {
    this.props.me()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.userData !== this.props.auth.userData) {
      const { userData } = this.props.auth
      this.setState({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        country: userData.country && userData.country,
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({ submitting: true })

    const payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      country: this.state.country,
    }

    this.props
      .updateUser(payload)
      .then((res) => {
        if (res && res.payload.status_code === 201) {
          toast.success('Profile Successfully updated')
        }
      })
      .catch((err) => toast.error('Something went wrong'))
      .finally(() => this.setState({ submitting: false }))
  }

  render() {
    const { loading, userData } = this.props.auth
    const {
      first_name,
      last_name,
      email,
      phone,
      country,
      submitting,
    } = this.state

    let formContainer

    if (loading) {
      formContainer = <h4>Loading profile...</h4>
    } else {
      formContainer = (
        <>
          <div class="image-box-settings">
            <div class="current-image-settings">
              {/* {userData.avatar_url === null &&
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1591789958/drgpr23t9pkkszpvudtq.png"
                      class="profile-picture-settings"
                    />}
                    {userData.avatar_url !== null && <img
                      src={userData.avatar_url}
                      class="profile-picture-settings"
                    />} */}
              <img
                src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1591789958/drgpr23t9pkkszpvudtq.png"
                class="profile-picture-settings"
              />
              <button
                class="change-image-settings"
                onclick="document.querySelector('.add-profile-picture').click()"
              >
                <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1595890712/change-prof-picture_mvdjme.svg" />
              </button>
            </div>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="file"
              style={{ display: 'none' }}
              name="profile-picture"
              class="add-profile-picture-settings"
            />
            <div class="form-group-settings">
              <label for="name">First Name</label>
              <input
                type="text"
                id="name"
                name="first_name"
                value={first_name}
                onChange={this.onChange}
                required
              />
            </div>
            <div class="form-group-settings">
              <label for="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last_name"
                value={last_name}
                onChange={this.onChange}
                required
              />
            </div>
            <div class="form-group-settings">
              <label for="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={this.onChange}
                disabled
                required
              />
            </div>
            <div class="form-group-settings">
              <label for="number">Phone Number</label>
              <input
                type="text"
                id="number"
                name="phone"
                value={phone}
                onChange={this.onChange}
                required
              />
            </div>
            <div class="form-group-settings">
              <label for="country">Country of Residence</label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={this.onChange}
                required
              />
            </div>
            {!submitting && <button type="submit">Update</button>}
            {submitting && <button type="submit">Updating...</button>}
          </form>
        </>
      )
    }

    return (
      <div className="settings-wrapper">
        <div className="container-settings">
          <div class="sidenav__container-settings" ref={this.menuContainer}>
            <div class="sidebar-settings sidenav-settings">
              <div className="header-title">
                <Link class="logo-settings" to="/">
                  Stockpiller
                </Link>
              </div>
              <button class="sidenav-close-settings">
                <img src="../assets/images/close.svg" />
              </button>
              <div class="links-settings">
                <div class="link-settings">
                  <span
                    class="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div class="link-settings">
                  <span
                    className="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div class="link-settings">
                  <span
                    className="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div class="link-settings">
                  <span
                    className="iconify"
                    data-icon="ri:send-plane-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/withdraw">Withdraw</Link>
                </div>
                <div class="link-settings">
                  <span
                    className="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div class="link-settings active-settings">
                  <span
                    className="iconify"
                    data-icon="clarity:cog-line"
                    data-inline="false"
                  ></span>
                  <Link to="/settings">Settings</Link>
                </div>
              </div>
              <a class="logout__link-settings" href="#" onClick={this.logout}>
                <span
                  className="iconify"
                  data-icon="ri:logout-box-line"
                  data-inline="false"
                ></span>{' '}
                Logout
              </a>
            </div>
          </div>

          <div class="sidebar-settings" ref={this.menu}>
            <div className="header-title">
              <Link class="logo-settings" to="/">
                Stockpiller
              </Link>
            </div>
            <button
              className="sidenav-close-settings"
              onClick={this.closeSlider}
            >
              <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597702029/close_junhc8.svg" />
            </button>
            <div class="links-settings">
              <div class="link-settings">
                <span
                  class="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div class="link-settings">
                <span
                  className="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div class="link-settings">
                <span
                  className="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div class="link-settings">
                <span
                  className="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div class="link-settings">
                <span
                  className="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div class="link-settings active-settings">
                <span
                  className="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a class="logout__link-settings" href="#" onClick={this.logout}>
              <span
                className="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>{' '}
              Logout
            </a>
          </div>

          <div
            class="cover-overlay-settings"
            onClick={this.closeSlider}
            ref={this.overlay}
          ></div>

          <div class="main-settings">
            <div class="top-settings">
              <button class="sidenav-btn-settings" onClick={this.openSlider}>
                <div class="bar-settings"></div>
                <div class="bar-settings"></div>
                <div class="bar-settings"></div>
              </button>
              <div class="back-settings">
                <img src="../assets/images/back.svg" alt="" />
                {/* <a href="">Back</a> */}
              </div>
              <div class="user-controls-settings">
                <div class="notifications-settings">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div class="user-settings">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button class="logout-settings">Logout</button>
              </div>
            </div>
            <div class="content-settings">
              <div class="navigation-settings">
                <Link class="category-settings active-settings" to="/settings">
                  <svg
                    id="ios-person"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Path"
                      d="M19.99,19.495c-.375-1.656-2.516-2.464-3.255-2.724a24.272,24.272,0,0,0-2.714-.521,2.757,2.757,0,0,1-1.255-.578,10.97,10.97,0,0,1-.083-2.568,7.725,7.725,0,0,0,.594-1.13A14.577,14.577,0,0,0,13.714,10s.427,0,.578-.75a7.379,7.379,0,0,0,.385-1.745c-.031-.6-.359-.583-.359-.583a9.131,9.131,0,0,0,.354-2.672C14.719,2.109,13.042,0,10.005,0,6.927,0,5.286,2.109,5.333,4.25a9.525,9.525,0,0,0,.349,2.672s-.328-.016-.359.583A7.379,7.379,0,0,0,5.708,9.25c.146.75.578.75.578.75a14.577,14.577,0,0,0,.438,1.974,7.725,7.725,0,0,0,.594,1.13,10.97,10.97,0,0,1-.083,2.568,2.757,2.757,0,0,1-1.255.578,24.272,24.272,0,0,0-2.714.521c-.74.26-2.88,1.068-3.255,2.724A.416.416,0,0,0,.421,20H19.584A.415.415,0,0,0,19.99,19.495Z"
                      fill="#502274"
                    />
                  </svg>
                  <div class="category__content-settings">
                    <p>Your profile</p>
                    <p>Details about your Personal Information</p>
                  </div>
                </Link>
                <Link class="category-settings" to="/change-password">
                  <svg
                    id="ios-key"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.954"
                    height="20"
                    viewBox="0 0 19.954 20"
                    fill="#9b9b9b"
                  >
                    <path
                      id="Shape"
                      d="M14.246,20a5.85,5.85,0,0,1-5.717-5.962,5.456,5.456,0,0,1,.451-2.293c-.048-.077-.106-.157-.167-.242a1.829,1.829,0,0,1-.332-.594,2.517,2.517,0,0,1,.142-.712,2.512,2.512,0,0,0,.142-.711.991.991,0,0,0-.527-.548.445.445,0,0,0-.1-.01,1.846,1.846,0,0,0-.71.24L7.366,9.2a1.635,1.635,0,0,1-.557.209.215.215,0,0,1-.044,0A1.822,1.822,0,0,1,5.729,8.245,1.324,1.324,0,0,1,5.915,7.6c.161-.347.328-.706.053-.987a.528.528,0,0,0-.393-.173,1.423,1.423,0,0,0-.546.162l-.02.009a1.316,1.316,0,0,1-.492.152H4.51a1.01,1.01,0,0,1-.748-.419,1.21,1.21,0,0,1-.442-.913A2.964,2.964,0,0,1,3.4,4.884a1.659,1.659,0,0,0,.062-.6.708.708,0,0,0-.5-.6.489.489,0,0,0-.193-.032,2.7,2.7,0,0,0-.432.054l-.03.005a3.065,3.065,0,0,1-.516.059.733.733,0,0,1-.555-.2c-.11-.112-.206-.2-.318-.309C.727,3.082.485,2.852.031,2.385A.125.125,0,0,1,0,2.292C.009,1.9,1.085.738,1.373.462A1.591,1.591,0,0,1,2.395,0a.968.968,0,0,1,.719.322C3.575.8,9.249,5.648,11.975,7.976l.467.4a5.382,5.382,0,0,1,1.794-.2,5.625,5.625,0,0,1,4.042,1.7,5.9,5.9,0,0,1,1.675,4.165A5.845,5.845,0,0,1,14.246,20Zm1.1-6.153a1.538,1.538,0,1,0,1.535,1.538A1.538,1.538,0,0,0,15.35,13.846Z"
                    />
                  </svg>
                  <div class="category__content-settings">
                    <p>Change Password</p>
                    <p>Change your Account Password</p>
                  </div>
                </Link>
              </div>
              <div class="content__form-settings">
                <p class="content__form__header-settings">Your Profile</p>
                <p class="content__form__subtext-settings">
                  Details about your Personal Information
                </p>
                {formContainer}
                <div class="page-links-settings">
                  <button
                    class="link-toggle-settings"
                    onClick={this.showNext}
                    ref={this.toggle}
                  >
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1597723557/add-straight_kpddhz.svg"
                      alt=""
                    />
                  </button>
                  <Link to="/settings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        id="Path"
                        d="M19.99,19.495c-.375-1.656-2.516-2.464-3.255-2.724a24.272,24.272,0,0,0-2.714-.521,2.757,2.757,0,0,1-1.255-.578,10.97,10.97,0,0,1-.083-2.568,7.725,7.725,0,0,0,.594-1.13A14.577,14.577,0,0,0,13.714,10s.427,0,.578-.75a7.379,7.379,0,0,0,.385-1.745c-.031-.6-.359-.583-.359-.583a9.131,9.131,0,0,0,.354-2.672C14.719,2.109,13.042,0,10.005,0,6.927,0,5.286,2.109,5.333,4.25a9.525,9.525,0,0,0,.349,2.672s-.328-.016-.359.583A7.379,7.379,0,0,0,5.708,9.25c.146.75.578.75.578.75a14.577,14.577,0,0,0,.438,1.974,7.725,7.725,0,0,0,.594,1.13,10.97,10.97,0,0,1-.083,2.568,2.757,2.757,0,0,1-1.255.578,24.272,24.272,0,0,0-2.714.521c-.74.26-2.88,1.068-3.255,2.724A.416.416,0,0,0,.421,20H19.584A.415.415,0,0,0,19.99,19.495Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                  <Link to="/change-password">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.954"
                      height="20"
                      viewBox="0 0 19.954 20"
                      fill="#fff"
                    >
                      <path
                        id="Shape"
                        d="M14.246,20a5.85,5.85,0,0,1-5.717-5.962,5.456,5.456,0,0,1,.451-2.293c-.048-.077-.106-.157-.167-.242a1.829,1.829,0,0,1-.332-.594,2.517,2.517,0,0,1,.142-.712,2.512,2.512,0,0,0,.142-.711.991.991,0,0,0-.527-.548.445.445,0,0,0-.1-.01,1.846,1.846,0,0,0-.71.24L7.366,9.2a1.635,1.635,0,0,1-.557.209.215.215,0,0,1-.044,0A1.822,1.822,0,0,1,5.729,8.245,1.324,1.324,0,0,1,5.915,7.6c.161-.347.328-.706.053-.987a.528.528,0,0,0-.393-.173,1.423,1.423,0,0,0-.546.162l-.02.009a1.316,1.316,0,0,1-.492.152H4.51a1.01,1.01,0,0,1-.748-.419,1.21,1.21,0,0,1-.442-.913A2.964,2.964,0,0,1,3.4,4.884a1.659,1.659,0,0,0,.062-.6.708.708,0,0,0-.5-.6.489.489,0,0,0-.193-.032,2.7,2.7,0,0,0-.432.054l-.03.005a3.065,3.065,0,0,1-.516.059.733.733,0,0,1-.555-.2c-.11-.112-.206-.2-.318-.309C.727,3.082.485,2.852.031,2.385A.125.125,0,0,1,0,2.292C.009,1.9,1.085.738,1.373.462A1.591,1.591,0,0,1,2.395,0a.968.968,0,0,1,.719.322C3.575.8,9.249,5.648,11.975,7.976l.467.4a5.382,5.382,0,0,1,1.794-.2,5.625,5.625,0,0,1,4.042,1.7,5.9,5.9,0,0,1,1.675,4.165A5.845,5.845,0,0,1,14.246,20Zm1.1-6.153a1.538,1.538,0,1,0,1.535,1.538A1.538,1.538,0,0,0,15.35,13.846Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  logoutUser,
  me,
  updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
