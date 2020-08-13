import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../store/actions/authActions'
import Tada from 'react-reveal/Tada'
import './forgot.scss'
import { toast } from 'react-toastify'

class Forgot extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      errors: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const payload = {
      email: this.state.email,
    }

    this.props
      .forgotPassword(payload)
      .then((res) => {
        if (res && res.status_code == 200) {
          toast.success(res.data)
          this.setState({ email: '' })
        }
      })
      .catch((err) => console.log(err))
  }
  render() {
    const { errors } = this.state
    const { loading } = this.props.auth

    return (
      <div className="forgot-wrapper">
        <div className="container-fluid">
          <Link to="/" className="logo">
            Stockpiller
          </Link>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594397518/forgotlarge_dfetd5.svg"
            className="forgot-password"
          />
          <div className="reset">
            <Tada>
              <div className="reset-card">
                <p className="reset-header">Reset Password</p>
                <p className="reset-text">
                  Enter the email attached to your account to get a password
                  reset link
                </p>
                {errors.error && (
                  <p
                    style={{
                      color: 'red',
                    }}
                  >
                    {errors.error ? errors.error : ''}
                  </p>
                )}
                <form onSubmit={this.onSubmit.bind(this)}>
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChange.bind(this)}
                    placeholder="Email"
                  />
                  {!loading && (
                    <button type="submit" className="submit">
                      Submit
                    </button>
                  )}
                  {loading && (
                    <button type="submit" className="submit" disabled>
                      Submitting...
                    </button>
                  )}
                </form>
                <Link to="/login" className="cancel">
                  Cancel
                </Link>
                {/* <hr />
          <p className="terms-and-conditions">
            <Link to="/terms">Terms & Conditions</Link> and
            <Link to="/privacy"> Privacy Policy</Link>
          </p> */}
              </div>
            </Tada>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

const mapDispatchToProps = {
  forgotPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot)
