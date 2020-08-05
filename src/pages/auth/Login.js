import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../store/actions/authActions";
import "./login.scss";
import { toast } from "react-toastify";
import Tada from 'react-reveal/Tada';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      phone: "",
      password: "",
      errors: {},
      loading: false,
      visible: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  togglePassword() {
    this.setState({ visible: !this.state.visible });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const payload = {
      phone: this.state.phone,
      password: this.state.password,
    };

    this.props
      .loginUser(payload)
      .then((res) => {
        if (res.response.status === 400) {
          toast.error(res.response.data.error);
        }
        if (res && res.type === "GET_ERRORS") {
          toast.error(res.payload.error);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ loading: false }));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/home");
    }
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
  }

  render() {
    const { phone, password, visible, loading, errors } = this.state;
    return (
      <div className="login-wrapper">
        <div className="container">
          <Link to="/" className="logo">
            Laybuy
          </Link>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376370/woman-with-laptop_f7fyle.svg"
            className="woman"
          />
          <div className="login">
          <Tada>
            <div className="card-login">
              <p className="login-header">Log In</p>
            <p className="text-danger">
              {errors && errors.network ? errors.network : ""}
            </p>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phone}
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
              {!loading && (
                <button type="submit" className="submit">
                  Log In
                </button>
              )}
              {loading && (
                <button type="button" className="submit" disabled>
                  Authenticating...
                </button>
              )}
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
              
            </div>
            </Tada>
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

export default connect(mapStateToProps, { loginUser })(Login);
