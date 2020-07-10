import React from "react";
import { Link } from "react-router-dom";
import "./forgot.scss";

export default function Forgot() {
  return (
    <div className="forgot-wrapper">
      <div className="container">
        <Link to="/" className="logo">
          Stokkpile
        </Link>
        <img
          src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1594397518/forgotlarge_dfetd5.svg"
          className="forgot-password"
        />
        <div className="reset">
          <p className="reset-header">Reset Password</p>
          <p className="reset-text">
            Enter the email attached to your account to get a password reset
            link
          </p>
          <form>
            <input type="email" name="email" placeholder="Email" />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          <Link to="/login" className="cancel">
            Cancel
          </Link>
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
