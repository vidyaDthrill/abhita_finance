import React, { useState } from "react";
import "../assets/styles/LoanSummaryDetails.css";

const LoanSummaryDetails = () => {
  const [PaymentState, setPaymentState] = useState(false);

  const funPaymentState = () => {
    setPaymentState(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="p-2">
            <div className="loan-profile-card">
              <div className="loan-profile-name">
                <p>Seema</p>
              </div>
              <ul>
                <li>
                  <p>Code</p>
                  <p>NFJS1901</p>
                </li>
                <li>
                  <p>Mobile</p>
                  <p>9087654321</p>
                </li>
                <li>
                  <p>Group</p>
                  <p>Abhita</p>
                </li>
              </ul>
              <div className="d-flex justify-content-center pb-3">
                <button className="btn">View Profile</button>
              </div>
            </div>
            <div className="loan-profile-card mt-3">
              <div className="loan-profile-name">
                <p>Payment Details</p>
              </div>
              <ul>
                <li>
                  <p>Total Amount</p>
                  <p>72364892</p>
                </li>
                <li>
                  <p>Received Amount</p>
                  <p>765565</p>
                </li>
                <li>
                  <p>Due Amount</p>
                  <p>8907</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="p-2">
            <div className="loan-summary-right-side">
              <nav class="nav">
                <a
                  class="nav-link pe-5 active"
                  aria-current="page"
                  href="#"
                  onClick={funPaymentState}
                >
                  Payment Record
                </a>
                <a class="nav-link pe-5" href="#">
                  EMI Record
                </a>
                <a class="nav-link pe-5" href="#">
                  Due
                </a>
                <a class="nav-link pe-5" href="#">
                  Advance Payment
                </a>
                <a class="nav-link" href="#">
                  Settlement
                </a>
              </nav>
              <div className="py-3">
                {PaymentState ? <p>Payment Record</p> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanSummaryDetails;
