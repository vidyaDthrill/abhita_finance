import React, { useMemo, useState } from "react";
import "../assets/styles/LoanSummaryDetails.css";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const LoanSummaryDetails = () => {
  const navigate = useNavigate();

  const [PaymentState, setPaymentState] = useState(true);
  const [EMIState, setEMIState] = useState(false);

  const funPaymentState = () => {
    setPaymentState(true);
    setEMIState(false);
  };

  const funEMIState = () => {
    setEMIState(true);
    setPaymentState(false);
  };

  const dataPR = [
    {
      payDate: "21/02/2022",
      amt: "2537",
      csr: "Raj Malhotra",
      payMode: "Cash",
      status: "Active",
    },
    {
      payDate: "21/02/2022",
      amt: "2537",
      csr: "Raj Malhotra",
      payMode: "Cash",
      status: "Active",
    },
    {
      payDate: "21/02/2022",
      amt: "2537",
      csr: "Raj Malhotra",
      payMode: "Cash",
      status: "Active",
    },
  ];

  const columnsPR = useMemo(
    () => [
      {
        Header: "Payment Date",
        accessor: "payDate",
      },
      {
        Header: "Amount",
        accessor: "amt",
      },
      {
        Header: "CSR",
        accessor: "csr",
      },
      {
        Header: "Payment Mode",
        accessor: "payMode",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const dataER = [
    {
      emiDate: "21/02/2022",
      principal: "0",
      interest: "0",
      total: "2729",
      
    },
    {
      emiDate: "21/02/2022",
      principal: "0",
      interest: "0",
      total: "2729",
      
    },
    {
      emiDate: "21/02/2022",
      principal: "0",
      interest: "0",
      total: "2729",
      
    },
  ];

  const columnsER = useMemo(
    () => [
      {
        Header: "EMI Date",
        accessor: "emiDate",
      },
      {
        Header: "Principal",
        accessor: "principal",
      },
      {
        Header: "Interest",
        accessor: "interest",
      },
      {
        Header: "Total",
        accessor: "total",
      },
      {
        Header: "Adjustment",
        accessor: "adjustment",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Received",
        accessor: "received",
      },
    ],
    []
  );

  return (
    <>
    <div className="mb-3 d-flex justify-content-between">
        <p>
          Home / Loan Summary / <strong>Loan Summary Details</strong>
        </p>
        
      </div>
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
              <nav className="nav">
                <a
                  className="nav-link pe-5 active"
                  aria-current="page"
                  href="#"
                  onClick={funPaymentState}
                >
                  Payment Record
                </a>
                <a className="nav-link pe-5" href="#" onClick={funEMIState}>
                  EMI Record
                </a>
                <a className="nav-link pe-5" href="#">
                  Due
                </a>
                <a className="nav-link pe-5" href="#">
                  Advance Payment
                </a>
                <a className="nav-link" href="#">
                  Settlement
                </a>
              </nav>
              <div className="py-3">
                {PaymentState ? (
                  <div className="table-main-container">
                    <Table columns={columnsPR} data={dataPR} />
                  </div>
                ) : (
                  ""
                )}

                {EMIState ? (
                  <div className="table-main-container">
                    <Table columns={columnsER} data={dataER} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanSummaryDetails;
