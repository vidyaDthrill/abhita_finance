import React, { useMemo } from "react";
import Table from "../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LoanSummary = () => {
  const navigate = useNavigate();

  const data = [
    {
      brCode: "br1010",
      loanID: "L101",
      custCode: "cc101",
      custName: "Rita Roy",
      mobile: "9876543210",
      payDate: "21/02/2022",
      amt: "2537",
      receivedAmt: "0",
    },
    {
      brCode: "br1010",
      loanID: "L101",
      custCode: "cc101",
      custName: "Rita Roy",
      mobile: "9876543210",
      payDate: "21/02/2022",
      amt: "2537",
      receivedAmt: "0",
    },
    {
      brCode: "br1010",
      loanID: "L101",
      custCode: "cc101",
      custName: "Rita Roy",
      mobile: "9876543210",
      payDate: "21/02/2022",
      amt: "2537",
      receivedAmt: "0",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Branch Code",
        accessor: "brCode",
      },
      {
        Header: "Loan ID",
        accessor: "loanID",
      },
      {
        Header: "Customer Code",
        accessor: "custCode",
      },
      {
        Header: "Customer Name",
        accessor: "custName",
      },
      {
        Header: "Mobile No.",
        accessor: "mobile",
      },
      {
        Header: "Payment Date",
        accessor: "payDate",
      },
      {
        Header: "Amount",
        accessor: "amt",
      },
      {
        Header: "Received Amount",
        accessor: "receivedAmt",
      },
      {
        Header: "Action",
        Cell: ({ row }) => {
          return (
            <div className="d-flex">
              <div className="ed-div">
                <LuEye
                  size={20}
                  className="eye-icon"
                  onClick={() => navigate("/app/loan_summary_details")}
                />
              </div>
              <div className="ed-div">
                <TbEdit size={20} className="edit-icon" />
              </div>
              <div className="ed-div">
                <MdDelete size={20} className="delete-icon" />
              </div>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <div className="mb-3">
        <p>
          Home / <strong>Loan Summary</strong>
        </p>
      </div>

      <div className="table-main-container mb-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Branch</label>
              <select className="form-select">
                <option>-- Select Branch --</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Date</label>
              <input className="form-control" type="date" />
            </div>
          </div>
        </div>
      </div>
      <div className="table-main-container">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default LoanSummary;
