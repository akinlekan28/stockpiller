import React, { Component } from 'react'
import { connect } from 'react-redux'
import './home.scss'

class Home extends Component {
  render() {
    return ( 
      <div className="home-wrapper-screen">
        <div className="sidenav__container-home">
          <div className="sidebar-home sidenav-home">
            <a className="logo" href="../index.html">
              Stokkpile.com
            </a>
            <button className="sidenav-close-home">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links-home active-home">
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.667"
                  height="15"
                  viewBox="0 0 11.667 15"
                >
                  <g id="ios-business" transform="translate(0.5 0.5)">
                    <path
                      id="Shape"
                      d="M9.333,14H6.4a.269.269,0,0,1-.266-.27V12.385a.268.268,0,0,0-.266-.269H4.8a.268.268,0,0,0-.266.269V13.73a.269.269,0,0,1-.266.27H1.333a.8.8,0,0,1-.8-.808V3.1A.608.608,0,0,1,.6,1.885h9.466A.608.608,0,0,1,10.133,3.1v10.1A.805.805,0,0,1,9.333,14Zm-1.6-4.039a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269v-.538a.269.269,0,0,0-.266-.27Zm-2.667,0a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269v-.538a.269.269,0,0,0-.267-.27Zm-2.667,0a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269h.533a.269.269,0,0,0,.267-.269v-.538a.269.269,0,0,0-.267-.27ZM7.734,7.808a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269V8.077a.268.268,0,0,0-.266-.269Zm-2.667,0a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269V8.077A.269.269,0,0,0,5.6,7.808Zm-2.667,0a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269h.533A.269.269,0,0,0,3.2,8.616V8.077a.269.269,0,0,0-.267-.269ZM7.734,5.654a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27h.533a.269.269,0,0,0,.266-.27V5.923a.268.268,0,0,0-.266-.269Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27H5.6a.269.269,0,0,0,.267-.27V5.923A.269.269,0,0,0,5.6,5.654Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27h.533a.269.269,0,0,0,.267-.27V5.923a.269.269,0,0,0-.267-.269ZM7.734,3.5a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269V3.769A.268.268,0,0,0,8.267,3.5Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269V3.769A.269.269,0,0,0,5.6,3.5ZM2.4,3.5a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269h.533A.269.269,0,0,0,3.2,4.307V3.769A.269.269,0,0,0,2.933,3.5ZM9,1.211H1.667A.606.606,0,0,1,1.667,0H9A.606.606,0,0,1,9,1.211Z"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <a href="./home.html">Home</a>
              </div>
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path
                    id="Path_419"
                    data-name="Path 419"
                    d="M3,10.778H9.222V3H3ZM3,17H9.222V12.333H3Zm7.778,0H17V9.222H10.778Zm0-14V7.667H17V3Z"
                  />
                </svg>
                <a href="./dashboard.html">Dashboard</a>
              </div>
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.833"
                  height="14"
                  viewBox="0 0 12.833 14"
                >
                  <path
                    id="md-stats"
                    d="M83.5,64h2.333V78H83.5ZM80,73.917h2.333V78H80Zm7-2.333h2.333V78H87Zm3.5-3.5h2.333V78H90.5Z"
                    transform="translate(-80 -64)"
                  />
                </svg>
                <a href="./plans.html">Plans</a>
              </div>
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="15"
                  viewBox="0 0 11 15"
                >
                  <g id="ios-calculator" transform="translate(0.5 0.5)">
                    <path
                      id="Shape"
                      d="M8.919,14H1.081A1.08,1.08,0,0,1,0,12.923V1.077A1.08,1.08,0,0,1,1.081,0H8.919A1.08,1.08,0,0,1,10,1.077V12.923A1.08,1.08,0,0,1,8.919,14ZM7.7,8.347a.81.81,0,0,0-.811.807v2.692a.81.81,0,0,0,1.621,0V9.154A.81.81,0,0,0,7.7,8.347ZM5,11.038a.808.808,0,1,0,.81.807A.81.81,0,0,0,5,11.038Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,2.3,11.038ZM5,8.347a.807.807,0,1,0,.81.807A.81.81,0,0,0,5,8.347Zm-2.7,0a.807.807,0,1,0,.81.807A.81.81,0,0,0,2.3,8.347ZM7.7,5.654a.808.808,0,1,0,.81.807A.81.81,0,0,0,7.7,5.654Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,5,5.654Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,2.3,5.654ZM2.027,1.616a.54.54,0,0,0-.54.538V3.769a.54.54,0,0,0,.54.538H7.973a.54.54,0,0,0,.54-.538V2.154a.54.54,0,0,0-.54-.538Z"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <a href="./transactions.html">Transactions</a>
              </div>
              <div className="link-home">
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
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.98"
                  height="14.981"
                  viewBox="0 0 14.98 14.981"
                >
                  <g
                    id="wallet_1_"
                    data-name="wallet (1)"
                    transform="translate(0.5 0.5)"
                  >
                    <path
                      id="Shape"
                      d="M12.073,13.981H1.271A1.272,1.272,0,0,1,0,12.71V5.084A1.272,1.272,0,0,1,1.271,3.813h1.1L8.625.171A1.258,1.258,0,0,1,10.35.636l1.825,3.187a1.274,1.274,0,0,1,1.169,1.261v.953a.318.318,0,0,1-.318.318H10.8a2.542,2.542,0,1,0,0,5.083h2.224a.318.318,0,0,1,.318.318v.954A1.272,1.272,0,0,1,12.073,13.981ZM10.744,2.6,8.667,3.813h2.769L10.744,2.6ZM9.255.636a.616.616,0,0,0-.31.084L3.632,3.813H4.887L9.8.953A.627.627,0,0,0,9.255.636Z"
                      transform="translate(0 0)"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                    />
                    <path
                      id="Shape-2"
                      data-name="Shape"
                      d="M4.13,3.812H1.906A1.906,1.906,0,1,1,1.906,0H4.13a.955.955,0,0,1,.954.953V2.859A.955.955,0,0,1,4.13,3.812ZM1.906,1.271a.635.635,0,1,0,.635.635A.636.636,0,0,0,1.906,1.271Z"
                      transform="translate(8.897 6.99)"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <a href="./cards.html">Cards</a>
              </div>
              <div className="link-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.812"
                  height="15.15"
                  viewBox="0 0 14.812 15.15"
                >
                  <g id="ios-settings" transform="translate(0.585 0.592)">
                    <path
                      id="Shape"
                      d="M5.186,13.968h0a6.924,6.924,0,0,1-2.027-.862,1.839,1.839,0,0,0-.363-2,1.733,1.733,0,0,0-1.95-.371A7.2,7.2,0,0,1,0,8.662,1.788,1.788,0,0,0,1.126,6.986,1.783,1.783,0,0,0,0,5.309a7.348,7.348,0,0,1,.839-2.08,1.681,1.681,0,0,0,.714.157,1.72,1.72,0,0,0,1.239-.524,1.834,1.834,0,0,0,.363-2A6.854,6.854,0,0,1,5.183,0,1.765,1.765,0,0,0,6.82,1.153,1.766,1.766,0,0,0,8.458,0a6.812,6.812,0,0,1,2.025.862,1.82,1.82,0,0,0,.362,2,1.721,1.721,0,0,0,1.954.367,7.21,7.21,0,0,1,.842,2.076,1.814,1.814,0,0,0,0,3.356,7.236,7.236,0,0,1-.842,2.076,1.733,1.733,0,0,0-1.95.371,1.822,1.822,0,0,0-.362,2,6.876,6.876,0,0,1-2.028.861,1.737,1.737,0,0,0-3.269,0Zm1.666-9.9a2.91,2.91,0,0,0,0,5.818,2.91,2.91,0,0,0,0-5.818Z"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <a href="./settings.html">Settings</a>
              </div>
            </div>
            <a className="logout__link-home" href="./login.html">
              <img src="../assets/images/logout.svg" /> Logout
            </a>
          </div>
        </div>
        <div className="sidebar-home">
          <a className="logo-home" href="../index.html">
            Stokkpile.com
          </a>
          <div className="links-home">
            <div className="link-home active-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.667"
                height="15"
                viewBox="0 0 11.667 15"
              >
                <g id="ios-business" transform="translate(0.5 0.5)">
                  <path
                    id="Shape"
                    d="M9.333,14H6.4a.269.269,0,0,1-.266-.27V12.385a.268.268,0,0,0-.266-.269H4.8a.268.268,0,0,0-.266.269V13.73a.269.269,0,0,1-.266.27H1.333a.8.8,0,0,1-.8-.808V3.1A.608.608,0,0,1,.6,1.885h9.466A.608.608,0,0,1,10.133,3.1v10.1A.805.805,0,0,1,9.333,14Zm-1.6-4.039a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269v-.538a.269.269,0,0,0-.266-.27Zm-2.667,0a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269v-.538a.269.269,0,0,0-.267-.27Zm-2.667,0a.269.269,0,0,0-.267.27v.538a.269.269,0,0,0,.267.269h.533a.269.269,0,0,0,.267-.269v-.538a.269.269,0,0,0-.267-.27ZM7.734,7.808a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269V8.077a.268.268,0,0,0-.266-.269Zm-2.667,0a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269V8.077A.269.269,0,0,0,5.6,7.808Zm-2.667,0a.269.269,0,0,0-.267.269v.539a.269.269,0,0,0,.267.269h.533A.269.269,0,0,0,3.2,8.616V8.077a.269.269,0,0,0-.267-.269ZM7.734,5.654a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27h.533a.269.269,0,0,0,.266-.27V5.923a.268.268,0,0,0-.266-.269Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27H5.6a.269.269,0,0,0,.267-.27V5.923A.269.269,0,0,0,5.6,5.654Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.27h.533a.269.269,0,0,0,.267-.27V5.923a.269.269,0,0,0-.267-.269ZM7.734,3.5a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269h.533a.268.268,0,0,0,.266-.269V3.769A.268.268,0,0,0,8.267,3.5Zm-2.667,0a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269H5.6a.269.269,0,0,0,.267-.269V3.769A.269.269,0,0,0,5.6,3.5ZM2.4,3.5a.269.269,0,0,0-.267.269v.538a.269.269,0,0,0,.267.269h.533A.269.269,0,0,0,3.2,4.307V3.769A.269.269,0,0,0,2.933,3.5ZM9,1.211H1.667A.606.606,0,0,1,1.667,0H9A.606.606,0,0,1,9,1.211Z"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                </g>
              </svg>
              <a href="./home.html">Home</a>
            </div>
            <div className="link-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  id="Path_419"
                  data-name="Path 419"
                  d="M3,10.778H9.222V3H3ZM3,17H9.222V12.333H3Zm7.778,0H17V9.222H10.778Zm0-14V7.667H17V3Z"
                  transform="translate(-3 -3)"
                />
              </svg>
              <a href="./dashboard.html">Dashboard</a>
            </div>
            <div className="link-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.833"
                height="14"
                viewBox="0 0 12.833 14"
              >
                <path
                  id="md-stats"
                  d="M83.5,64h2.333V78H83.5ZM80,73.917h2.333V78H80Zm7-2.333h2.333V78H87Zm3.5-3.5h2.333V78H90.5Z"
                  transform="translate(-80 -64)"
                />
              </svg>
              <a href="./plans.html">Plans</a>
            </div>
            <div className="link-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="15"
                viewBox="0 0 11 15"
              >
                <g id="ios-calculator" transform="translate(0.5 0.5)">
                  <path
                    id="Shape"
                    d="M8.919,14H1.081A1.08,1.08,0,0,1,0,12.923V1.077A1.08,1.08,0,0,1,1.081,0H8.919A1.08,1.08,0,0,1,10,1.077V12.923A1.08,1.08,0,0,1,8.919,14ZM7.7,8.347a.81.81,0,0,0-.811.807v2.692a.81.81,0,0,0,1.621,0V9.154A.81.81,0,0,0,7.7,8.347ZM5,11.038a.808.808,0,1,0,.81.807A.81.81,0,0,0,5,11.038Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,2.3,11.038ZM5,8.347a.807.807,0,1,0,.81.807A.81.81,0,0,0,5,8.347Zm-2.7,0a.807.807,0,1,0,.81.807A.81.81,0,0,0,2.3,8.347ZM7.7,5.654a.808.808,0,1,0,.81.807A.81.81,0,0,0,7.7,5.654Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,5,5.654Zm-2.7,0a.808.808,0,1,0,.81.807A.81.81,0,0,0,2.3,5.654ZM2.027,1.616a.54.54,0,0,0-.54.538V3.769a.54.54,0,0,0,.54.538H7.973a.54.54,0,0,0,.54-.538V2.154a.54.54,0,0,0-.54-.538Z"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                </g>
              </svg>
              <a href="./transactions.html">Transactions</a>
            </div>
            <div className="link-home">
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
            <div className="link-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.98"
                height="14.981"
                viewBox="0 0 14.98 14.981"
              >
                <g
                  id="wallet_1_"
                  data-name="wallet (1)"
                  transform="translate(0.5 0.5)"
                >
                  <path
                    id="Shape"
                    d="M12.073,13.981H1.271A1.272,1.272,0,0,1,0,12.71V5.084A1.272,1.272,0,0,1,1.271,3.813h1.1L8.625.171A1.258,1.258,0,0,1,10.35.636l1.825,3.187a1.274,1.274,0,0,1,1.169,1.261v.953a.318.318,0,0,1-.318.318H10.8a2.542,2.542,0,1,0,0,5.083h2.224a.318.318,0,0,1,.318.318v.954A1.272,1.272,0,0,1,12.073,13.981ZM10.744,2.6,8.667,3.813h2.769L10.744,2.6ZM9.255.636a.616.616,0,0,0-.31.084L3.632,3.813H4.887L9.8.953A.627.627,0,0,0,9.255.636Z"
                    transform="translate(0 0)"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M4.13,3.812H1.906A1.906,1.906,0,1,1,1.906,0H4.13a.955.955,0,0,1,.954.953V2.859A.955.955,0,0,1,4.13,3.812ZM1.906,1.271a.635.635,0,1,0,.635.635A.636.636,0,0,0,1.906,1.271Z"
                    transform="translate(8.897 6.99)"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                </g>
              </svg>
              <a href="./cards.html">Cards</a>
            </div>
            <div className="link-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.812"
                height="15.15"
                viewBox="0 0 14.812 15.15"
              >
                <g id="ios-settings" transform="translate(0.585 0.592)">
                  <path
                    id="Shape"
                    d="M5.186,13.968h0a6.924,6.924,0,0,1-2.027-.862,1.839,1.839,0,0,0-.363-2,1.733,1.733,0,0,0-1.95-.371A7.2,7.2,0,0,1,0,8.662,1.788,1.788,0,0,0,1.126,6.986,1.783,1.783,0,0,0,0,5.309a7.348,7.348,0,0,1,.839-2.08,1.681,1.681,0,0,0,.714.157,1.72,1.72,0,0,0,1.239-.524,1.834,1.834,0,0,0,.363-2A6.854,6.854,0,0,1,5.183,0,1.765,1.765,0,0,0,6.82,1.153,1.766,1.766,0,0,0,8.458,0a6.812,6.812,0,0,1,2.025.862,1.82,1.82,0,0,0,.362,2,1.721,1.721,0,0,0,1.954.367,7.21,7.21,0,0,1,.842,2.076,1.814,1.814,0,0,0,0,3.356,7.236,7.236,0,0,1-.842,2.076,1.733,1.733,0,0,0-1.95.371,1.822,1.822,0,0,0-.362,2,6.876,6.876,0,0,1-2.028.861,1.737,1.737,0,0,0-3.269,0Zm1.666-9.9a2.91,2.91,0,0,0,0,5.818,2.91,2.91,0,0,0,0-5.818Z"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                </g>
              </svg>
              <a href="./settings.html">Settings</a>
            </div>
          </div>
          <a className="logout__link-home" href="./login.html">
            <img src="../assets/images/logout.svg" /> Logout
          </a>
        </div>
        <div className="cover-overlay-home"></div>

        <main>
          <div className="main-container-home">
            <div className="main-header-home">
              <div className="open-home">
                <div className="bar-home"></div>
                <div className="bar-home"></div>
                <div className="bar-home"></div>
              </div>
              <a href="http://" className="backlink-home">
                <div className="back-home">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  <h2>Back</h2>
                </div>
              </a>
              <table className="stocks-home">
                <tr>
                  <td>Rates</td>
                  <td>Blocks</td>
                  <td>Cement</td>
                </tr>
                <tr>
                  <td>Local</td>
                  <td>
                    <img src="../assets/images/Group 44.svg" alt="" />
                    <h3>&#8358 200</h3>
                  </td>
                  <td>
                    <img src="../assets/images/Group 38.svg" alt="" />
                    <h3>&#8358 200</h3>
                  </td>
                </tr>
                <tr>
                  <td>Internatinal</td>
                  <td>
                    <img
                      className="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      className="up-arrow-home"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table>
              <div className="personalize-home">
                <img
                  className="notification-bell-home"
                  src="../assets/images/Group 3.svg"
                  alt=""
                />
                <div className="avatar-home">
                  <img src="../assets/images/Oval.svg" alt="" />
                </div>
                <a href="./logout" className="logoutNav-home">
                  Logout
                </a>
              </div>
            </div>

            <div className="main-body-home">
              <div className="steps-row-home">
                <div className="step-group-home type-1-home">
                  <div className="step-card-home yellow-home">
                    <h2>Step 1</h2>
                    <p>
                      Click on the{' '}
                      <span className="emphasis-home">Add New Plan Button</span>
                    </p>

                    <a href="./no-plan.html" className="btn-link-home">
                      Add new plan
                    </a>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="../assets/images/Group 94.svg"
                      alt=""
                      className="point-forward-home forwards-home"
                    />
                    <img
                      src="../assets/images/Group 96.svg"
                      alt=""
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-1-home">
                  <div className="step-card-home pink-home">
                    <h2>Step 2</h2>
                    <p>Fill the form for the new plan</p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="../assets/images/Group 94.svg"
                      alt=""
                      className="point-backwards-home forwards-home"
                    />
                    <img
                      src="../assets/images/Group 96.svg"
                      alt=""
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-2-home">
                  <div className="step-card-home blue-home">
                    <h2>Step 3</h2>
                    <p>
                      Add a valid debit card before you finish filling the new
                      plan form.
                    </p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="../assets/images/Group 96.svg"
                      alt=""
                      className="point-downawrd-home"
                    />
                  </div>
                </div>
              </div>
              <div className="steps-row-home reverse-home">
                <div className="step-group-home type-3-home">
                  <div className="step-card-home purple-home">
                    <h2>Step 6</h2>
                    <p>
                      Enjoying the depositing ride to withdraw building
                      materials in the future.
                    </p>
                  </div>
                  <div className="directional-arrow-home six-home">
                    <img
                      src="../assets/images/Group 95.svg"
                      alt=""
                      className="point-backwards-home forwards-home"
                    />
                    <img
                      src="../assets/images/Group 96.svg"
                      alt=""
                      className="point-downawrd-home down-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-3-home">
                  <div className="step-card-home cyan-home">
                    <h2>Step 5</h2>
                    <p>Check our dashboard to see you updated plan</p>

                    <a href="./dashboard.html" className="btn-link-home">
                      Dashboard
                    </a>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="../assets/images/Group 95.svg"
                      alt=""
                      className="point-backwards-home forwards-home"
                    />
                  </div>
                </div>
                <div className="step-group-home type-2-home">
                  <div className="step-card-home green-home">
                    <h2>Step 4</h2>
                    <p>Submit the form</p>
                  </div>
                  <div className="directional-arrow-home">
                    <img
                      src="../assets/images/Group 96.svg"
                      alt=""
                      className="point-backwards-home down-home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-home">
            <div className="footer-inner-home">
              <table className="stocks-home">
                <tr>
                  <td>Rates</td>
                  <td>Blocks</td>
                  <td>Cement</td>
                </tr>
                <tr>
                  <td>Local</td>
                  <td>
                    <img src="../assets/images/Group 44.svg" alt="" />
                    <h3>&#8358 200</h3>
                  </td>
                  <td>
                    <img src="../assets/images/Group 38.svg" alt="" />
                    <h3>&#8358 200</h3>
                  </td>
                </tr>
                <tr>
                  <td>Internatinal</td>
                  <td>
                    <img
                      className="down-arrow-home"
                      src="../assets/images/Group 44.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                  <td>
                    <img
                      className="up-arrow-home"
                      src="../assets/images/Group 38.svg"
                      alt=""
                    />
                    <h3>$2</h3>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
