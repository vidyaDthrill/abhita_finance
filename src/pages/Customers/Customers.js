import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";
import { checkonlyletterandcharacter } from "../../config/Validate";
import FormControl from "../../components/FormControl";

const Customers = () => {
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

  const [Customer, setCustomer] = useState({
    Customer: "",
    errors: [],
  });

  const handleChange = (e) => {
    setCustomer({
      ...Customer,
      [e.target.name]: e.target.value,
      errors: { ...Customer.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setCustomer({
      Customer: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!Customer.Customer) {
      IsValid = false;
      errors["Customer"] = "Customer Is Required";
    } else if (!checkonlyletterandcharacter(Customer.Customer)) {
      IsValid = false;
      errors["Customer"] = "Please Enter Valid Customer";
    } else {
      errors["Customer"] = "";
    }

    setCustomer({
      ...Customer,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(Customer);
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
          Home / Customers / <strong>Customers</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Customers List</p>
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
        <div className="modal-dialog modal-dialog-60">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">
                Add Customer
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
                  type="text"
                  label="Customer"
                  name="Customer"
                  placeholder="Enter Customer"
                  value={Customer.Customer}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Customer
                        ? Customer.errors.Customer
                        : ""
                      : ""
                  }
                />
              </div>

              <div className="ps-2">
                <label className="form-label">Status</label>
                <div className="d-flex">
                  <div class="form-check pe-5">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Status"
                      id="StatusActive"
                    />
                    <label class="form-check-label" for="StatusActive">
                      Active
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Status"
                      id="StatusInactive"
                      checked
                    />
                    <label class="form-check-label" for="StatusInactive">
                      Inactive
                    </label>
                  </div>
                </div>
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

export default Customers;
