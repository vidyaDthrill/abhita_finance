import React, { useMemo } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const EMICollection = () => {
  const data = [
    {
      custCode: "cc101",
      CustName: "Rita Roy",
      mobile: "9876543221",
      loanID: "L101",
      emiDate: "21/01/2022",
      advance: "0",
      currentDue: "0",
      emi: "0",
    },
    {
      loanID: "L102",
      custCode: "cc101",
      CustName: "Rita Roy",
      mobile: "9876543221",
      emiDate: "21/01/2022",
      advance: "0",
      currentDue: "0",
      emi: "0",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Customer Code",
        accessor: "custCode",
      },
      {
        Header: "Customer Name",
        accessor: "CustName",
      },
      {
        Header: "Mobile No.",
        accessor: "mobile",
      },
      {
        Header: "Loan Application ID",
        accessor: "loanID",
      },
      {
        Header: "EMI Date",
        accessor: "emiDate",
      },
      {
        Header: "Advance",
        accessor: "adv",
      },
      {
        Header: "Current Due",
        accessor: "currentDue",
      },
      {
        Header: "EMI",
        accessor: "emi",
      },
      {
        Header: "Action",
        Cell: ({ row }) => {
          return (
            <div className="d-flex">
              <div className="ed-div">
                <LuEye size={20} className="eye-icon " />
              </div>
              <div className="ed-div">
                <TbEdit size={20} className="edit-icon " />
              </div>
              <div className="ed-div">
                <MdDelete size={20} className="delete-icon " />
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
          Home / Collection / <strong>EMI Collection</strong>
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
              <label className="form-label">Designation</label>
              <select className="form-select">
                <option>-- Select Designation --</option>
              </select>
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

export default EMICollection;
