import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, updatePassword } from "../../store/actions/authActions";
import "./scss/nav-password.scss";
import "./scss/password.scss";
import { toast } from "react-toastify";

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      current: "",
      password: "",
      confirm: "",
      errors: {},
    };

    this.togglePassword = this.togglePassword.bind(this);
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
  }

  togglePassword(e) {
    this.setState({ visible: !this.state.visible });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const payload = {
      current: this.state.current,
      password: this.state.password,
      confirm: this.state.confirm,
    };

    if (payload.password !== payload.confirm) {
      return toast.error("Passwords do not match");
    }

    if (
      payload.password == "" &&
      payload.confirm == "" &&
      payload.current == ""
    ) {
      return toast.error("All fields required");
    }

    this.props
      .updatePassword(payload)
      .then((res) => {
        if (res && res.type === "UPDATE_PASSWORD") {
          this.setState({ current: "", password: "", confirm: "" });
          toast.success("Password updated successfully");
        }
      })
      .catch((err) => console.log(err));
  }

  logout(e) {
    e.preventDefault();

    this.props.logoutUser();
  }
  render() {
    const { visible, errors } = this.state;
    const { loading } = this.props.auth;

    return (
      <div className="password-wrapper">
        <div class="container-passwords">
          <div class="sidenav__container-passwords">
            <div class="sidebar-passwords sidenav-passwords">
              <div className="header-title">
                <Link class="logo-passwords" to="/">
                  Stockpiller
                </Link>
              </div>
              <button class="sidenav-close-passwords">
                <img src="../assets/images/close.svg" />
              </button>
              <div class="links-passwords">
                <div class="link-passwords">
                  <span
                    class="iconify"
                    data-icon="ic:baseline-dashboard"
                    data-inline="false"
                  ></span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div class="link-passwords">
                  <span
                    class="iconify"
                    data-icon="bx:bxs-bar-chart-alt-2"
                    data-inline="false"
                  ></span>
                  <Link to="/plans">Plans</Link>
                </div>
                <div class="link-passwords">
                  <span
                    class="iconify"
                    data-icon="bi:calculator-fill"
                    data-inline="false"
                  ></span>
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div class="link-passwords">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.343"
                    height="15.009"
                    viewBox="0 0 15.343 15.009"
                  >
                    <g id="ios-send" transform="translate(0.499 0.511)">
                      <path
                        id="Path"
                        d="M13.878.031.178,5.865a.3.3,0,0,0,.011.558L3.895,8.468A.609.609,0,0,0,4.578,8.4l7.307-6.154c.049-.04.164-.117.209-.073s-.026.157-.067.2L5.7,9.336a.571.571,0,0,0-.06.7l2.422,3.8a.318.318,0,0,0,.567-.007L14.3.436A.311.311,0,0,0,13.878.031Z"
                        transform="translate(0.001 0.001)"
                        stroke="rgba(0,0,0,0)"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <a href="./withdraw.html">Withdraw</a>
                </div>
                <div class="link-passwords">
                  <span
                    class="iconify"
                    data-icon="vaadin:wallet"
                    data-inline="false"
                  ></span>
                  <Link to="/cards">Cards</Link>
                </div>
                <div class="link-passwords active-passwords">
                  <span
                    class="iconify"
                    data-icon="clarity:cog-line"
                    data-inline="false"
                  ></span>
                  <Link to="/settings">Settings</Link>
                </div>
              </div>
              <a class="logout__link-passwords" href="#" onClick={this.logout}>
                <span
                  class="iconify"
                  data-icon="ri:logout-box-line"
                  data-inline="false"
                ></span>
                Logout
              </a>
            </div>
          </div>
          <div class="sidebar-passwords">
            <div className="header-title">
              <Link class="logo-passwords" to="/">
                Stockpiller
              </Link>
            </div>
            <div class="links-passwords">
              <div class="link-passwords">
                <span
                  class="iconify"
                  data-icon="ic:baseline-dashboard"
                  data-inline="false"
                ></span>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div class="link-passwords">
                <span
                  class="iconify"
                  data-icon="bx:bxs-bar-chart-alt-2"
                  data-inline="false"
                ></span>
                <Link to="/plans">Plans</Link>
              </div>
              <div class="link-passwords">
                <span
                  class="iconify"
                  data-icon="bi:calculator-fill"
                  data-inline="false"
                ></span>
                <Link to="/transactions">Transactions</Link>
              </div>
              <div class="link-passwords">
                <span
                  class="iconify"
                  data-icon="ri:send-plane-fill"
                  data-inline="false"
                ></span>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div class="link-passwords">
                <span
                  class="iconify"
                  data-icon="vaadin:wallet"
                  data-inline="false"
                ></span>
                <Link to="/cards">Cards</Link>
              </div>
              <div class="link-passwords active-passwords">
                <span
                  class="iconify"
                  data-icon="clarity:cog-line"
                  data-inline="false"
                ></span>
                <Link to="/settings">Settings</Link>
              </div>
            </div>
            <a class="logout__link-passwords" href="#" onClick={this.logout}>
              <span
                class="iconify"
                data-icon="ri:logout-box-line"
                data-inline="false"
              ></span>
              Logout
            </a>
          </div>
          <div class="main-passwords">
            <div class="top-passwords">
              <button class="sidenav-btn-passwords">
                <div class="bar-passwords"></div>
                <div class="bar-passwords"></div>
                <div class="bar-passwords"></div>
              </button>
              <div class="back-passwords">
                <img src="../assets/images/Path 3 Copy.svg" alt="" />
                {/* <h4>Back</h4> */}
              </div>
              <div class="user-controls-passwords">
                <div class="notifications-passwords">
                  <img src="../assets/images/notifications.svg" alt="" />
                </div>
                <div class="user-passwords">
                  <img src="../assets/images/user.svg" alt="" />
                </div>
                <button class="logout-passwords" onClick={this.logout}>
                  Logout
                </button>
              </div>
            </div>
            <div class="content-passwords">
              <div class="navigation-passwords">
                <Link class="category-passwords" to="/settings">
                  <svg
                    id="ios-person"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#9b9b9b"
                  >
                    <path
                      id="Path"
                      d="M19.99,19.495c-.375-1.656-2.516-2.464-3.255-2.724a24.272,24.272,0,0,0-2.714-.521,2.757,2.757,0,0,1-1.255-.578,10.97,10.97,0,0,1-.083-2.568,7.725,7.725,0,0,0,.594-1.13A14.577,14.577,0,0,0,13.714,10s.427,0,.578-.75a7.379,7.379,0,0,0,.385-1.745c-.031-.6-.359-.583-.359-.583a9.131,9.131,0,0,0,.354-2.672C14.719,2.109,13.042,0,10.005,0,6.927,0,5.286,2.109,5.333,4.25a9.525,9.525,0,0,0,.349,2.672s-.328-.016-.359.583A7.379,7.379,0,0,0,5.708,9.25c.146.75.578.75.578.75a14.577,14.577,0,0,0,.438,1.974,7.725,7.725,0,0,0,.594,1.13,10.97,10.97,0,0,1-.083,2.568,2.757,2.757,0,0,1-1.255.578,24.272,24.272,0,0,0-2.714.521c-.74.26-2.88,1.068-3.255,2.724A.416.416,0,0,0,.421,20H19.584A.415.415,0,0,0,19.99,19.495Z"
                    />
                  </svg>
                  <div class="category__content-passwords">
                    <p>Your profile</p>
                    <p>Details about your Personal Information</p>
                  </div>
                </Link>
                <Link
                  class="category-passwords active-passwords"
                  to="/change-password"
                >
                  <svg
                    id="ios-key"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.954"
                    height="20"
                    viewBox="0 0 19.954 20"
                    fill="#502274"
                  >
                    <path
                      id="Shape"
                      d="M14.246,20a5.85,5.85,0,0,1-5.717-5.962,5.456,5.456,0,0,1,.451-2.293c-.048-.077-.106-.157-.167-.242a1.829,1.829,0,0,1-.332-.594,2.517,2.517,0,0,1,.142-.712,2.512,2.512,0,0,0,.142-.711.991.991,0,0,0-.527-.548.445.445,0,0,0-.1-.01,1.846,1.846,0,0,0-.71.24L7.366,9.2a1.635,1.635,0,0,1-.557.209.215.215,0,0,1-.044,0A1.822,1.822,0,0,1,5.729,8.245,1.324,1.324,0,0,1,5.915,7.6c.161-.347.328-.706.053-.987a.528.528,0,0,0-.393-.173,1.423,1.423,0,0,0-.546.162l-.02.009a1.316,1.316,0,0,1-.492.152H4.51a1.01,1.01,0,0,1-.748-.419,1.21,1.21,0,0,1-.442-.913A2.964,2.964,0,0,1,3.4,4.884a1.659,1.659,0,0,0,.062-.6.708.708,0,0,0-.5-.6.489.489,0,0,0-.193-.032,2.7,2.7,0,0,0-.432.054l-.03.005a3.065,3.065,0,0,1-.516.059.733.733,0,0,1-.555-.2c-.11-.112-.206-.2-.318-.309C.727,3.082.485,2.852.031,2.385A.125.125,0,0,1,0,2.292C.009,1.9,1.085.738,1.373.462A1.591,1.591,0,0,1,2.395,0a.968.968,0,0,1,.719.322C3.575.8,9.249,5.648,11.975,7.976l.467.4a5.382,5.382,0,0,1,1.794-.2,5.625,5.625,0,0,1,4.042,1.7,5.9,5.9,0,0,1,1.675,4.165A5.845,5.845,0,0,1,14.246,20Zm1.1-6.153a1.538,1.538,0,1,0,1.535,1.538A1.538,1.538,0,0,0,15.35,13.846Z"
                    />
                  </svg>
                  <div class="category__content-passwords">
                    <p>Change Password</p>
                    <p>Change your Account Password</p>
                  </div>
                </Link>
              </div>
              <div class="content__form-passwords">
                <p class="content__form__header-passwords">Change Password</p>
                <p class="content__form__subtext-passwords">
                  Details about your Personal Information
                </p>
                <form onSubmit={this.onSubmit}>
                  <p className="text-danger">
                    {errors && errors.error ? errors.error : ""}
                  </p>
                  <div class="form-group-passwords">
                    <label for="old-password-passwords">Old Password</label>
                    <div class="password-div-passwords">
                      <input
                        type={visible ? "text" : "password"}
                        id="old-password"
                        required
                        onChange={this.onChange}
                        name="current"
                        value={this.state.current}
                      />
                      <button type="button" onClick={this.togglePassword}>
                        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                      </button>
                    </div>
                  </div>
                  <div class="form-group-passwords">
                    <label for="new-password">New Password</label>
                    <div class="password-div-passwords">
                      <input
                        type={visible ? "text" : "password"}
                        id="new-password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                      <button type="button" onClick={this.togglePassword}>
                        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                      </button>
                    </div>
                  </div>
                  <div class="form-group-passwords">
                    <label for="confirm-new-password">
                      Confirm New Password
                    </label>
                    <div class="password-div-passwords">
                      <input
                        type={visible ? "text" : "password"}
                        id="confirm-new-password"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.onChange}
                        required
                      />
                      <button type="button" onClick={this.togglePassword}>
                        <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                      </button>
                    </div>
                  </div>
                  {loading && (
                    <button type="submit" disabled>
                      Updating...
                    </button>
                  )}
                  {!loading && <button type="submit">Update</button>}
                </form>
                <div class="page-links-passwords">
                  <button class="link-toggle-passwords">
                    <img
                      src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg"
                      alt=""
                    />
                  </button>
                  <a href="./settings.html">
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
                  </a>
                  <a href="./change-password.html">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

const mapDispatchToProps = {
  logoutUser,
  updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
