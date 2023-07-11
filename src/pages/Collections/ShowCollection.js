import React, { useMemo } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const ShowCollection = () => {
  const data = [
    {
      loanID: "L101",
      custCode: "cc101",
      CustName: "Rita Roy",
      mobile: "9876543221",
      payDate: "21/01/2022",
      amt: "0",
      payMode: "Cash",
      status: "Verified",
    },
    {
      loanID: "L102",
      custCode: "cc101",
      CustName: "Rita Roy",
      mobile: "9876543221",
      payDate: "21/01/2022",
      amt: "0",
      payMode: "Online",
      status: "Pending",
    },
  ];

  const columns = useMemo(
    () => [
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
        accessor: "CustName",
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
        Header: "Payment Mode",
        accessor: "payMode",
      },
      {
        Header: "Status",
        accessor: "status",
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
          Home / Collection / <strong>Show Collection</strong>
        </p>
      </div>

      <div className="table-main-container mb-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Select Branch</label>
              <select className="form-select">
                <option>-- Branch --</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">EMI End Date To</label>
              <input
                className="form-control"
                type="date"
                label="Date"
                name="Date"
              />
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

export default ShowCollection;
