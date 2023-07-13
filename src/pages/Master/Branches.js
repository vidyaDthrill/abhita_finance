import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";
import FormControl from "../../components/FormControl";
import {
  checkemail,
  checkonlyletterandcharacter,
  checkonlynumbervalue,
} from "../../config/Validate";

const Branches = () => {
  const data = [
    {
      brCode: "br101",
      brName: "Abhita br 1",
      city: "Pune",
      state: "Maharashtra",
      openingDate: "21/01/2021",
      contact: "9812345670",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Branch Code",
        accessor: "brCode",
      },
      {
        Header: "Branch Name",
        accessor: "brName",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Opening Date",
        accessor: "openingDate",
      },
      {
        Header: "Contact No.",
        accessor: "contact",
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

  const [BranchState, setBranchState] = useState({
    BranchCode: "",
    PinCode: "",
    Date: "",
    Email: "",
    Address: "",
    Contact: "",
    City: "",
    State: "",
    Country: "",
    errors: [],
  });

  const handleChange = (e) => {
    setBranchState({
      ...BranchState,
      [e.target.name]: e.target.value,
      errors: { ...BranchState.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setBranchState({
      BranchCode: "",
      PinCode: "",
      Date: "",
      Email: "",
      Address: "",
      Contact: "",
      City: "",
      State: "",
      Country: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!BranchState.BranchCode) {
      IsValid = false;
      errors["BranchCode"] = "Branch Code Is Required";
    } else if (!checkonlyletterandcharacter(BranchState.BranchCode)) {
      IsValid = false;
      errors["BranchCode"] = "Please Enter Valid Branch Code";
    } else {
      errors["BranchCode"] = "";
    }

    if (!BranchState.PinCode) {
      IsValid = false;
      errors["PinCode"] = "Pin Code Is Required";
    } else if (!checkonlynumbervalue(BranchState.PinCode)) {
      IsValid = false;
      errors["PinCode"] = "Please Enter Valid Pin Code";
    } else {
      errors["PinCode"] = "";
    }

    if (!BranchState.Date) {
      IsValid = false;
      errors["Date"] = "Date Is Required";
    } else {
      errors["Date"] = "";
    }

    if (!BranchState.Email) {
      IsValid = false;
      errors["Email"] = "Email ID Is Required";
    } else if (!checkemail(BranchState.Email)) {
      IsValid = false;
      errors["Email"] = "Please Enter valid Email id";
    } else {
      errors["Email"] = "";
    }

    if (!BranchState.Address) {
      IsValid = false;
      errors["Address"] = "Address Is Required";
    } else if (!checkonlyletterandcharacter(BranchState.Address)) {
      IsValid = false;
      errors["Address"] = "Please Enter Valid Address";
    } else {
      errors["Address"] = "";
    }

    if (!BranchState.Contact) {
      IsValid = false;
      errors["Contact"] = "Contact No. Is Required";
    } else if (!checkonlynumbervalue(BranchState.Contact)) {
      IsValid = false;
      errors["Contact"] = "Please Enter Valid Contact No.";
    } else {
      errors["Contact"] = "";
    }

    if (!BranchState.City) {
      IsValid = false;
      errors["City"] = "City Is Required";
    } else if (!checkonlyletterandcharacter(BranchState.City)) {
      IsValid = false;
      errors["City"] = "Please Enter Valid City";
    } else {
      errors["City"] = "";
    }

    if (!BranchState.State) {
      IsValid = false;
      errors["State"] = "State Is Required";
    } else if (!checkonlyletterandcharacter(BranchState.State)) {
      IsValid = false;
      errors["State"] = "Please Enter Valid State";
    } else {
      errors["State"] = "";
    }

    if (!BranchState.Country) {
      IsValid = false;
      errors["Country"] = "Country Is Required";
    } else if (!checkonlyletterandcharacter(BranchState.Country)) {
      IsValid = false;
      errors["Country"] = "Please Enter Valid Country";
    } else {
      errors["Country"] = "";
    }

    setBranchState({
      ...BranchState,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(BranchState);
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
          Home / Master / <strong>Branches</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Branch List</p>
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
                Add Branch List
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="Branch Code"
                    name="BranchCode"
                    placeholder="Enter Branch Code"
                    value={BranchState.BranchCode}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.BranchCode
                          ? BranchState.errors.BranchCode
                          : ""
                        : ""
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="Pin Code"
                    name="PinCode"
                    placeholder="Enter Pin Code"
                    value={BranchState.PinCode}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.PinCode
                          ? BranchState.errors.PinCode
                          : ""
                        : ""
                    }
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="date"
                    label="Opening Date"
                    name="Date"
                    placeholder="Enter Opening Date"
                    value={BranchState.Date}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.Date
                          ? BranchState.errors.Date
                          : ""
                        : ""
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="email"
                    label="Email ID"
                    name="Email"
                    placeholder="Enter Email ID"
                    value={BranchState.Email}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.Email
                          ? BranchState.errors.Email
                          : ""
                        : ""
                    }
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="Address"
                    name="Address"
                    placeholder="Enter Address"
                    value={BranchState.Address}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.Address
                          ? BranchState.errors.Address
                          : ""
                        : ""
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="Contact No."
                    name="Contact"
                    placeholder="Enter Contact No."
                    value={BranchState.Contact}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.Contact
                          ? BranchState.errors.Contact
                          : ""
                        : ""
                    }
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="City"
                    name="City"
                    placeholder="Enter City"
                    value={BranchState.City}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.City
                          ? BranchState.errors.City
                          : ""
                        : ""
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="select"
                    label="Select State"
                    name="State"
                    value={BranchState.State}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.State
                          ? BranchState.errors.State
                          : ""
                        : ""
                    }
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <FormControl
                    wrapperclass=""
                    type="text"
                    label="Country"
                    name="Country"
                    placeholder="Enter Country"
                    value={BranchState.Country}
                    onChange={handleChange}
                    error={
                      BranchState.errors
                        ? BranchState.errors.Country
                          ? BranchState.errors.Country
                          : ""
                        : ""
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label className="form-label">Status</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Status"
                      id="StatusActive"
                    />
                    <label className="form-check-label" for="StatusActive">
                      Active
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Status"
                      id="StatusInactive"
                      checked
                    />
                    <label className="form-check-label" for="StatusInactive">
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

export default Branches;
