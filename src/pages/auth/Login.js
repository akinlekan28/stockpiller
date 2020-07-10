import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      visible: false,
    };

    this.onChange = this.onChange.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  togglePassword() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { email, password, visible } = this.state;
    return (
      <div className="login-wrapper">
        <div className="container">
          <Link to="/" className="logo">
            Stokkpile
          </Link>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376370/woman-with-laptop_f7fyle.svg"
            className="woman"
          />
          <div className="login">
            <p className="login-header">Log In</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.onChange}
                required
              />
              <div className="password-div">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  required
                />
                <button type="button" onClick={this.togglePassword}>
                  <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                </button>
              </div>
              {/* <div className="login-social">
                <p className="login-social-text">
                  Or Log in with your social network
                </p>
                <p className="login-social-line"></p>
              </div>
              <div className="social-media-links">
                <button type="button">
                  <img src="../assets/images/fb.svg" />
                </button>
                <button type="button">
                  <img src="../assets/images/ln.svg" />
                </button>
                <button type="button">
                  <img src="../assets/images/tw.svg" />
                </button>
                <button type="button">
                  <img src="../assets/images/ig.svg" />
                </button>
              </div> */}
              <button type="submit" className="submit">
                Log In
              </button>
            </form>
            <Link to="/signup" className="sign-up">
              Sign Up
            </Link>
            <p className="forgot-password">
              Forgot your password? <Link to="/reset">Reset it</Link>
            </p>
            <hr />
            <p className="terms-and-conditions">
              <Link to="/terms">Terms & Conditions</Link> and
              <Link to="/privacy"> Privacy Policy</Link>
            </p>
            <script src="../assets/js/login.js"></script>
            <script src="../assets/js/Required-inputs.js"></script>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
