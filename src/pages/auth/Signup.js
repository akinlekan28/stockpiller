import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../store/actions/authActions";
import "./signup.scss";
import { toast } from "react-toastify";
import Tada from "react-reveal/Tada";

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
      check: false,
      visible: "",
      errors: {},
      loading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  togglePassword() {
    this.setState({ visible: !this.state.visible });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/dashboard");
    }
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: !this.state.loading });

    const payload = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      country: this.state.country,
      check: this.state.check,
    };

    if (this.state.check) {
      this.props
        .registerUser(payload)
        .then((res) => {
          if ((res && res.payload.data.status_code === 201) || 204) {
            toast.success("User registered successfully");
          }
        })
        .catch((err) => toast.error("Something went wrong"))
        .finally(() => this.setState({ loading: false }));
    } else {
      toast.error("You need to agree terms and conditions");
    }
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
      check,
      errors,
      loading,
    } = this.state;

    return (
      <div className="signup-wrapper">
        <div className="container">
          <Link to="/" className="logo">
            Laybuy
          </Link>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376370/woman-with-laptop_f7fyle.svg"
            className="woman"
          />
          <div className="signup">
            <Tada>
              <div className="card-signup">
                <p className="signup-header">Join Us</p>
                <p style={{ color: "red" }}>
                  {errors.errors ? errors.errors.first_name : ""}
                </p>
                <p style={{ color: "red" }}>
                  {errors.errors ? errors.errors.last_name : ""}
                </p>
                <p style={{ color: "red" }}>
                  {errors.errors ? errors.errors.email : ""}
                </p>
                <p style={{ color: "red" }}>
                  {errors.errors ? errors.errors.password : ""}
                </p>
                <p style={{ color: "red" }}>
                  {errors.errors ? errors.errors.phone : ""}
                </p>
                <br />
                <form onSubmit={this.onSubmit}>
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
                    <div className="select select--inline form-group">
                      <select
                        className="select-css"
                        onChange={this.onChange}
                        value={country}
                        name="country"
                      >
                        <option value="">Select country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      placeholder="Phone Number"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="row">
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  {/* <div className="password-div">
                <input
                  type={visible ? 'text' : 'password'}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <button type="button" onClick={this.togglePassword}>
                  <img src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594376838/eye_s3luq1.svg" />
                </button>
              </div> */}
                  <p className="row">
                    <input
                      name="agree"
                      id="agree"
                      type="checkbox"
                      checked={check}
                      onChange={() => this.setState({ check: !check })}
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
                  <div className="row">
                    {!loading && (
                      <button type="submit" className="submit">
                        Next
                      </button>
                    )}
                    {loading && (
                      <button type="submit" className="submit" disabled>
                        Submitting...
                      </button>
                    )}
                  </div>
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

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
