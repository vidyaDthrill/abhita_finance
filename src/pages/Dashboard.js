import React from "react";
import "../assets//styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="mb-3">
        <p>
          Home / <strong>Dashboards</strong>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="top-dashboard-outer-wrapper">
            <div className="top-dashboard-inner-wrapper">
              <div className="d-flex justify-content-end ">
                <div>
                  <h5 className="dashoboard-card-title">Total Collection</h5>
                  <h4 className="dashoboard-card-count">20,00,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="top-dashboard-outer-wrapper">
            <div className="top-dashboard-inner-wrapper">
              <div className="d-flex justify-content-end ">
                <div>
                  <h5 className="dashoboard-card-title">Cash Balance</h5>
                  <h4 className="dashoboard-card-count">20,00,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="top-dashboard-outer-wrapper">
            <div className="top-dashboard-inner-wrapper">
              <div className="d-flex justify-content-end ">
                <div>
                  <h5 className="dashoboard-card-title">Bank Balance</h5>
                  <h4 className="dashoboard-card-count">20,00,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="top-dashboard-outer-wrapper">
            <div className="top-dashboard-inner-wrapper">
              <div className="d-flex justify-content-end ">
                <div>
                  <h5 className="dashoboard-card-title">Total Interest</h5>
                  <h4 className="dashoboard-card-count">20,00,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <div className="middle-dashboard-outer-wrapper">
            <div className="middle-dashboard-inner-wrapper1">
              <h4 className="dashoboard-card-count">20,00,000</h4>
              <h5 className="dashoboard-card-title">Total Collection Amount</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="middle-dashboard-outer-wrapper">
            <div className="middle-dashboard-inner-wrapper2">
              <h4 className="dashoboard-card-count">20,00,000</h4>
              <h5 className="dashoboard-card-title">
                Total Disbursement Amount
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="middle-dashboard-outer-wrapper">
            <div className="middle-dashboard-inner-wrapper3">
              <h4 className="dashoboard-card-count">20,00,000</h4>
              <h5 className="dashoboard-card-title">
                Total Outstanding Amount
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="middle-dashboard-outer-wrapper">
            <div className="middle-dashboard-inner-wrapper4">
              <h4 className="dashoboard-card-count">20,00,000</h4>
              <h5 className="dashoboard-card-title">SMS Balance</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <div className="bottom-dashboard-outer-wrapper">
            <div className="bottom-dashboard-inner-wrapper1">
              <div className="btm-dash-card-title-bg1">
                <h5>Collection</h5>
                <p>Approved</p>
              </div>
              <ul className="px-3 py-1">
                <li className="d-flex justify-content-between py-2">
                  <p>Today</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Weekly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Monthly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Total</p>
                  <p className="app-pen-count">23</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="bottom-dashboard-outer-wrapper">
            <div className="bottom-dashboard-inner-wrapper2">
              <div className="btm-dash-card-title-bg2">
                <h5>Collection</h5>
                <p>Pending</p>
              </div>
              <ul className="px-3 py-1">
                <li className="d-flex justify-content-between py-2">
                  <p>Today</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Weekly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Monthly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Total</p>
                  <p className="app-pen-count">23</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="bottom-dashboard-outer-wrapper">
            <div className="bottom-dashboard-inner-wrapper1">
              <div className="btm-dash-card-title-bg1">
                <h5>Disbursement</h5>
                <p>Approved</p>
              </div>
              <ul className="px-3 py-1">
                <li className="d-flex justify-content-between py-2">
                  <p>Today</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Weekly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Monthly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Total</p>
                  <p className="app-pen-count">23</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="bottom-dashboard-outer-wrapper">
            <div className="bottom-dashboard-inner-wrapper2">
              <div className="btm-dash-card-title-bg2">
                <h5>Disbursement</h5>
                <p>Pending</p>
              </div>
              <ul className="px-3 py-1">
                <li className="d-flex justify-content-between py-2">
                  <p>Today</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Weekly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Monthly</p>
                  <p className="app-pen-count">23</p>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <p>Total</p>
                  <p className="app-pen-count">23</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
