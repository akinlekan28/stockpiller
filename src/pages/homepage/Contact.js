import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import './contact.scss'

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="outside-overlay">
        <div className="clickable"></div>
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">Stockpiller</div>
            <div className="sidebar-close">
              <span
                class="iconify"
                data-icon="bx:bx-arrow-back"
                data-inline="false"
                style={{
                  color: '#ffffff',
                  fontSize: '20px',
                  marginTop: '7px',
                }}
              ></span>
            </div>
          </div>
          <div className="sidebar-content">
            <ul className="sidebar-options">
              <a className="sidebar-link" href="#">
                <li className="sidebar-option">About</li>
              </a>
              <Link className="sidebar-link" to="/">
                <li className="sidebar-option">Coperate</li>
              </Link>

              <a className="sidebar-link" href="#">
                <li className="sidebar-option">How it works</li>
              </a>
              <Link className="sidebar-link" to="/contact">
                <li className="sidebar-option">Contact Us</li>
              </Link>
            </ul>
            <div className="sidebar-buttons">
              <Link className="sidebar-btn" to="/login">
                Login
              </Link>
              <Link className="sidebar-btn" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100">
        <header>
          <img
            className="Header-background"
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/q_auto,f_auto/v1594330427/bg_ummupn.svg"
            alt="homepage top background"
          />
          <div className="Header-content">
            <div className="heading-top">
              <div className="logo fw-700 fs-18">
                <Link to="/">Stockpiller</Link>
              </div>
              <div className="hamburger">
                <span className="hamburger-child"></span>
                <span className="hamburger-child"></span>
                <span className="hamburger-child"></span>
              </div>
              <nav className="navbar aligned">
                <ul className="nav-options">
                  <li className="nav-item">
                    <Link to="/" className="navlink">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="navlink">
                      Coperate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="navlink">
                      How it works?
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="navlink">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="navlink">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="btn-outline-white btn">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: '100%', height: '150px' }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
