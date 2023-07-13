import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { HiOutlineDocument, HiOutlineDocumentCheck } from "react-icons/hi2";
import { MdAdd, MdDelete } from "react-icons/md";
import { checkonlyletterandcharacter } from "../../config/Validate";
import FormControl from "../../components/FormControl";

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
            <div className="d-flex">
              <div className="ed-div">
                <HiOutlineDocument size={20} className="doc-icon " />
              </div>
              <div className="ed-div">
                <HiOutlineDocumentCheck size={20} className="verified-icon " />
              </div>
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

  const [CustomerGroupState, setCustomerGroupState] = useState({
    Customer: "",
    errors: [],
  });

  const handleChange = (e) => {
    setCustomerGroupState({
      ...CustomerGroupState,
      [e.target.name]: e.target.value,
      errors: { ...CustomerGroupState.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setCustomerGroupState({
      Customer: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!CustomerGroupState.Branch) {
      IsValid = false;
      errors["Branch"] = "Branch Is Required";
    } else if (!checkonlyletterandcharacter(CustomerGroupState.Branch)) {
      IsValid = false;
      errors["Branch"] = "Please Enter Valid Branch";
    } else {
      errors["Branch"] = "";
    }

    if (!CustomerGroupState.Branch) {
      IsValid = false;
      errors["Customer"] = "Customer Is Required";
    } else if (!checkonlyletterandcharacter(CustomerGroupState.Customer)) {
      IsValid = false;
      errors["Customer"] = "Please Enter Valid Customer";
    } else {
      errors["Customer"] = "";
    }

    if (!CustomerGroupState.Branch) {
      IsValid = false;
      errors["Group"] = "Group Is Required";
    } else if (!checkonlyletterandcharacter(CustomerGroupState.Group)) {
      IsValid = false;
      errors["Group"] = "Please Enter Valid Group";
    } else {
      errors["Group"] = "";
    }

    setCustomerGroupState({
      ...CustomerGroupState,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(CustomerGroupState);
    if (validate()) {
      clearStates();
      alert("Done");
    } else {
      alert("Please Enter Proper Details ");
    }
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <p>
          Home / Customers / <strong>Customers Group</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          accordion
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Customers Group List</p>
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
                Add Customer Group
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="">
                  <FormControl
                    wrapperclass=""
                    type="select"
                    label="Branch"
                    name="Branch"
                    value={CustomerGroupState.Branch}
                    onChange={handleChange}
                    error={
                      CustomerGroupState.errors
                        ? CustomerGroupState.errors.Branch
                          ? CustomerGroupState.errors.Branch
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
                    value={CustomerGroupState.Customer}
                    onChange={handleChange}
                    error={
                      CustomerGroupState.errors
                        ? CustomerGroupState.errors.Customer
                          ? CustomerGroupState.errors.Customer
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
                    value={CustomerGroupState.Group}
                    onChange={handleChange}
                    error={
                      CustomerGroupState.errors
                        ? CustomerGroupState.errors.Group
                          ? CustomerGroupState.errors.Group
                          : ""
                        : ""
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="cancel-btn"
                data-bs-dismiss="modal"
              >
                Cancel
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

export default CustomersGroup;
