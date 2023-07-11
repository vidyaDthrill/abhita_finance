import React, { useMemo, useState } from "react";
import Table from "../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";
import {
  checkonlyletterandcharacter,
  checkonlynumbervalue,
} from "../config/Validate";
import FormControl from "../components/FormControl";

const CreateGroupLoan = () => {
  const data = [
    {
      payAmt: "2537",
      custName: "Rita Roy",
      grID: "gr101",
      csr: "Raj Roy",
      branchName: "Pune",
      status: "Pending",
    },
    {
      payAmt: "2537",
      custName: "Rita Roy",
      grID: "gr101",
      csr: "Raj Roy",
      branchName: "Pune",
      status: "Pending",
    },
    {
      payAmt: "2537",
      custName: "Rita Roy",
      grID: "gr101",
      csr: "Raj Roy",
      branchName: "Pune",
      status: "Pending",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Payment Amount",
        accessor: "payAmt",
      },
      {
        Header: "Customer Name",
        accessor: "custName",
      },
      {
        Header: "Group ID",
        accessor: "grID",
      },
      {
        Header: "CSR",
        accessor: "csr",
      },
      {
        Header: "Branch Name",
        accessor: "branchName",
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

  const [GroupLoanState, setGroupLoanState] = useState({
    Branch: "",
    Group: "",
    AgentID: "",
    Customer: "",
    errors: [],
  });

  const handleChange = (e) => {
    setGroupLoanState({
      ...GroupLoanState,
      [e.target.name]: e.target.value,
      errors: { ...GroupLoanState.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setGroupLoanState({
      Branch: "",
      Group: "",
      AgentID: "",
      Customer: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!GroupLoanState.Branch) {
      IsValid = false;
      errors["Branch"] = "Branch Is Required";
    } else if (!checkonlyletterandcharacter(GroupLoanState.Branch)) {
      IsValid = false;
      errors["Branch"] = "Please Enter Valid Branch";
    } else {
      errors["Branch"] = "";
    }

    if (!GroupLoanState.GroupLoanState) {
      IsValid = false;
      errors["Group"] = "Group Is Required";
    } else if (!checkonlyletterandcharacter(GroupLoanState.Group)) {
      IsValid = false;
      errors["Group"] = "Please Enter Valid Group";
    } else {
      errors["Group"] = "";
    }

    if (!GroupLoanState.AgentID) {
      IsValid = false;
      errors["AgentID"] = "Agent ID Is Required";
    } else if (!checkonlynumbervalue(GroupLoanState.AgentID)) {
      IsValid = false;
      errors["AgentID"] = "Please Enter Valid Agent ID";
    } else {
      errors["AgentID"] = "";
    }

    if (!GroupLoanState.Customer) {
      IsValid = false;
      errors["Customer"] = "Customer Is Required";
    } else if (!checkonlyletterandcharacter(GroupLoanState.Customer)) {
      IsValid = false;
      errors["Customer"] = "Please Enter Valid Customer";
    } else {
      errors["Customer"] = "";
    }

    setGroupLoanState({
      ...GroupLoanState,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(GroupLoanState);
    if (validate()) {
      clearStates();
      alert("Done");
    } else {
      alert("Please Enter Proper Details ");
    }
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <p>
          Home / <strong>Create Group Loan</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Group Loan</p>
        </button>
      </div>

      <div className="table-main-container">
        <Table columns={columns} data={data} />
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-30">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">
                Add Group Loan
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="">
                <FormControl
                  wrapperclass=""
                  type="select"
                  label="Branch"
                  name="Branch"
                  value={GroupLoanState.Branch}
                  onChange={handleChange}
                  error={
                    GroupLoanState.errors
                      ? GroupLoanState.errors.Branch
                        ? GroupLoanState.errors.Branch
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="">
                <FormControl
                  wrapperclass=""
                  type="select"
                  label="Group"
                  name="Group"
                  value={GroupLoanState.Group}
                  onChange={handleChange}
                  error={
                    GroupLoanState.errors
                      ? GroupLoanState.errors.Group
                        ? GroupLoanState.errors.Group
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="">
                <FormControl
                  wrapperclass=""
                  type="select"
                  label="Agent ID"
                  name="AgentID"
                  value={GroupLoanState.AgentID}
                  onChange={handleChange}
                  error={
                    GroupLoanState.errors
                      ? GroupLoanState.errors.AgentID
                        ? GroupLoanState.errors.AgentID
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="">
                <FormControl
                  wrapperclass=""
                  type="select"
                  label="Customer"
                  name="Customer"
                  value={GroupLoanState.Customer}
                  onChange={handleChange}
                  error={
                    GroupLoanState.errors
                      ? GroupLoanState.errors.Customer
                        ? GroupLoanState.errors.Customer
                        : ""
                      : ""
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="cancel-btn"
                data-bs-dismiss="modal"
              >
                Cancle
              </button>
              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGroupLoan;
