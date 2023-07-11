import React, { useMemo } from "react";
import Table from "../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import FormControl from "../components/FormControl";

const Disbursement = () => {
  const data = [
    {
      amt: "2537",
      disbDate: "21/02/2023",
      startDate: "21/02/2023",
      endDate: "21/02/2023",
      grID: "gr101",
      grName: "Abhita",
      custName: "Rita Roy",
      csr: "Raj Roy",
      status: "Disbursed",
    },
    {
      amt: "2537",
      disbDate: "21/02/2023",
      startDate: "21/02/2023",
      endDate: "21/02/2023",
      grID: "gr101",
      grName: "Abhita",
      custName: "Rita Roy",
      csr: "Raj Roy",
      status: "Disbursed",
    },
    {
      amt: "2537",
      disbDate: "21/02/2023",
      startDate: "21/02/2023",
      endDate: "21/02/2023",
      grID: "gr101",
      grName: "Abhita",
      custName: "Rita Roy",
      csr: "Raj Roy",
      status: "Disbursed",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Amount",
        accessor: "amt",
      },
      {
        Header: "Disbursement Date",
        accessor: "disbDate",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "End Date",
        accessor: "endDate",
      },
      {
        Header: "Group ID",
        accessor: "grID",
      },
      {
        Header: "Group Name",
        accessor: "grName",
      },
      {
        Header: "Customer Name",
        accessor: "custName",
      },
      {
        Header: "CSR",
        accessor: "csr",
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
          Home / <strong>Disbursement</strong>
        </p>
      </div>

      <div className="table-main-container mb-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Disbursed Date From</label>
              <input
                className="form-control"
                type="date"
                name="DisbursedDateFrom"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Disbursed Date To</label>
              <input
                className="form-control"
                type="date"
                name="DisbursedDateTo"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">EMI End Date From</label>
              <input
                className="form-control"
                type="date"
                label="EMI End Date From"
                name="EMIEndDateFrom"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">EMI End Date To</label>
              <input
                className="form-control"
                type="date"
                label="EMI End Date To"
                name="EMIEndDateTo"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-2">
              <label className="form-label">Select Branch</label>
              <select className="form-select">
                <option>-- Branch --</option>
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

export default Disbursement;
