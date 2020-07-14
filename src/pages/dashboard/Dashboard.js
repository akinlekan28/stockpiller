import React, { Component } from "react";
import { connect } from "react-redux";
import "./dashboard.scss";

const DashBoard = () => {
  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__container">
        <div className="dashboard__sidenav__container">
          <div className="sidebar sidenav">
            <a className="logo" href="../index.html">Stokkpile.com</a>
            <button className="sidenav-close">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links">
              <div className="link">
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
              <div className="link active">
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
                    transform="translate(-3 -3) #fff"
                  />
                </svg>
                <a href="./dashboard.html">Dashboard</a>
              </div>
              <div className="link">
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
              <div className="link">
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
              <div className="link">
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
              <div className="link">
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
              <div className="link">
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
            <a className="logout__link" href="./login.html">
              <img src="../assets/images/logout.svg" /> Logout
            </a>
          </div>
        </div>
        <div className="sidebar">
          <a className="logo" href="../index.html">Stokkpile.com</a>
          <div className="links">
            <div className="link">
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
            <div className="link active">
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
            <div className="link">
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
            <div className="link">
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
            <div className="link">
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
            <div className="link">
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
            <div className="link">
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
          <a className="logout__link" href="./login.html">
            <img src="../assets/images/logout.svg" /> Logout
          </a>
        </div>
        <div className="main">
          <div className="top">
            <button className="sidenav-btn">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
            <div className="back">
              <img src="../assets/images/back.svg" alt="" />
              <a href="">Back</a>
            </div>
            <table className="rates top">
              <tr>
                <td>Rates</td>
                <td>Block</td>
                <td>Cement</td>
              </tr>
              <tr>
                <td>Local</td>
                <td>
                  <img src="../assets/images/rate-down.svg" alt="" />
                  &#8358 200
                </td>
                <td>
                  <img src="../assets/images/rate-up.svg" alt="" />
                  &#8358 2000
                </td>
              </tr>
              <tr>
                <td>International</td>
                <td>
                  <img src="../assets/images/rate-down.svg" alt="" />
                  $2
                </td>
                <td>
                  <img src="../assets/images/rate-up.svg" alt="" />
                  $2
                </td>
              </tr>
            </table>
            <div className="user-controls">
              <div className="notifications">
                <img src="../assets/images/notifications.svg" alt="" />
              </div>
              <div className="user">
                <img src="../assets/images/user.svg" alt="" />
              </div>
              <button className="logout">
                Logout
              </button>
            </div>
          </div>
          <a className="new-plan" href="./no-plan.html">
            New Plans
          </a>
          <div className="cards">
            <div className="card brown">
              <div className="header">
                Lagos House
              </div>
              <div className="content">
                <div className="content__properties">
                  <p className="content__properties__header">
                    List of Properties
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Units of Block</span>
                    <span className="amount">1000/</span>
                    <span className="target-amount">2000</span>
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Bags of Cement</span>
                    <span className="amount">26/</span>
                    <span className="target-amount">
                      100
                    </span>
                  </p>
                </div>
                <div className="content__amount__deposited">
                  <p className="content__amount__deposited__header">
                    Amount deposited
                  </p>
                  <p className="amount">
                    ₦10,000
                  </p>
                </div>
              </div>
            </div>
            <div className="card blue">
              <div className="header">
                America's House
              </div>
              <div className="content">
                <div className="content__properties">
                  <p className="content__properties__header">
                    List of Properties
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Units of Block</span>
                    <span className="amount">1000/</span>
                    <span className="target-amount">2000</span>
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Bags of Cement</span>
                    <span className="amount">26/</span>
                    <span className="target-amount">
                      100
                    </span>
                  </p>
                </div>
                <div className="content__amount__deposited">
                  <p className="content__amount__deposited__header">
                    Amount deposited
                  </p>
                  <p className="amount">₦10,000</p>
                </div>
              </div>
            </div>
            <div className="card pink">
              <div className="header">
                Kenya House
              </div>
              <div className="content">
                <div className="content__properties">
                  <p className="content__properties__header">
                    List of Properties
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Units of Block</span>
                    <span className="amount">1000/</span>
                    <span className="target-amount">2000</span>
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Bags of Cement</span>
                    <span className="amount">26/</span>
                    <span className="target-amount">
                      100
                    </span>
                  </p>
                </div>
                <div className="content__amount__deposited">
                  <p className="content__amount__deposited__header">
                    Amount deposited
                  </p>
                  <p className="amount">₦10,000</p>
                </div>
              </div>
            </div>
            <div className="card green">
              <div className="header">
                Kenya Office
              </div>
              <div className="content">
                <div className="content__properties">
                  <p className="content__properties__header">
                    List of Properties
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Units of Block</span>
                    <span className="amount">1000/</span>
                    <span className="target-amount">2000</span>
                  </p>
                  <p className="content__properties__details">
                    <span className="title">Bags of Cement</span>
                    <span className="amount">26/</span>
                    <span className="target-amount">
                      100
                    </span>
                  </p>
                </div>
                <div className="content__amount__deposited">
                  <p className="content__amount__deposited__header">
                    Amount deposited
                  </p>
                  <p className="amount">₦10,000</p>
                </div>
              </div>
            </div>
          </div>
          <table className="rates bottom">
            <tr>
              <td>Rates</td>
              <td>Block</td>
              <td>Cement</td>
            </tr>
            <tr>
              <td>Local</td>
              <td>
                <img src="../assets/images/rate-down.svg" />
                &#8358 200
              </td>
              <td>
                <img src="../assets/images/rate-up.svg" />
                &#8358 2000
              </td>
            </tr>
            <tr>
              <td>International</td>
              <td>
                <img src="../assets/images/rate-down.svg" />
                $2
              </td>
              <td>
                <img src="../assets/images/rate-up.svg" />
                $2
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
