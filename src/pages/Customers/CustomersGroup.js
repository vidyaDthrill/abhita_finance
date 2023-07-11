import React, { useMemo } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";

const CustomersGroup = () => {
  const data = [
    {
      CustCode: "C101",
      CustName: "Rita Roy",
      email: "rita@gmail.com",
      mobile: "9876543221",
      status: "Verified",
    },
    {
      CustCode: "C102",
      CustName: "Rita Roy",
      email: "rita@gmail.com",
      mobile: "9876543221",
      status: "Pending",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Customer Code",
        accessor: "CustCode",
      },
      {
        Header: "Customer Name",
        accessor: "CustName",
      },
      {
        Header: "Email ID",
        accessor: "email",
      },
      {
        Header: "Mobile No.",
        accessor: "mobile",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        Cell: ({ row }) => {
          return (
            <div className="d-flex d-flex justify-content-between">
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
      <div className="mb-3 d-flex justify-content-between">
        <p>
          Home / Customers / <strong>Customers Group</strong>
        </p>
        <button className="add-btn d-flex align-items-center">
          <MdAdd size={20} />
          <p>Customers Group List</p>
        </button>
      </div>

      <div className="table-main-container">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default CustomersGroup;
