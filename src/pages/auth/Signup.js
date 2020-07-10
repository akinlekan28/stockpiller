import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./signup.scss";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      phone: "",
      visible: "",
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
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
      visible,
    } = this.state;
    return (
      <div className="signup-wrapper">
        <div className="container">
          <Link to="/" className="logo">
            Stokkpile
          </Link>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376370/woman-with-laptop_f7fyle.svg"
            className="woman"
          />
          <div className="signup">
            <p className="signup-header">Join Us</p>
            <form>
              <div className="row mb-10">
                <input
                  type="text"
                  className="half"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="text"
                  className="half"
                  name="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="half"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
                <div className="select select--inline form-group custom-select">
                  <select
                    className="select-css"
                    onChange={this.onChange}
                    value={country}
                  >
                    <option value="">Select country</option>
                    <option value="ng">Nigeria</option>
                    <option value="gh">Ghana</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                name="number"
                value={phone}
                placeholder="Phone Number"
                onChange={this.onChange}
                required
              />
              <div className="password-div">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <button type="button" onClick={this.togglePassword}>
                  <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                </button>
              </div>
              <p className="">
                <input
                  name="agree"
                  id="agree"
                  type="checkbox"
                  onChange={this.onChange}
                />
                <label htmlFor="agree">
                  <span>
                    &nbsp;&nbsp;&nbsp;I agree with the terms and conditions
                  </span>
                </label>
              </p>
              {/* <div className="signup-social">
                <p className="signup-social-text">
                  Or Sign up with social media
                </p>
                <p className="signup-social-line"></p>
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
                  <img src="../assets/images/google.svg" />
                </button>
              </div> */}
              <button type="submit" className="submit">
                Next
              </button>
            </form>
            <p className="login">
              Already have an account?<Link to="/login">Log In</Link>
            </p>
            <hr />
            <p className="terms-and-conditions">
              <Link to="/terms">Terms & Conditions</Link> and
              <Link to="/privacy"> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
