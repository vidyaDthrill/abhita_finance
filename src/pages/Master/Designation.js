import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";
import FormControl from "../../components/FormControl";
import { checkonlyletterandcharacter } from "../../config/Validate";

const Designation = () => {
  const data = [
    {
      designation: "Admin",
      status: "Active",
    },
    {
      designation: "Officer",
      status: "Active",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Designation",
        accessor: "designation",
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

  const [Designation, setDesignation] = useState({
    Designation: "",
    errors: [],
  });

  const handleChange = (e) => {
    setDesignation({
      ...Designation,
      [e.target.name]: e.target.value,
      errors: { ...Designation.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setDesignation({
      Designation: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!Designation.Designation) {
      IsValid = false;
      errors["Designation"] = "Designation Is Required";
    } else if (!checkonlyletterandcharacter(Designation.Designation)) {
      IsValid = false;
      errors["Designation"] = "Please Enter Valid Designation";
    } else {
      errors["Designation"] = "";
    }

    setDesignation({
      ...Designation,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(Designation);
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
          Home / Master / <strong>Designation</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Designation</p>
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
                Add Designation
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
                  label="Designation"
                  name="Designation"
                  placeholder="Enter Designation"
                  value={Designation.Designation}
                  onChange={handleChange}
                  error={
                    Designation.errors
                      ? Designation.errors.Designation
                        ? Designation.errors.Designation
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

export default Designation;
