import React, { useMemo, useState } from "react";
import Table from "../../components/Table";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdAdd, MdDelete } from "react-icons/md";
import FormControl from "../../components/FormControl";
import { checkonlyletterandcharacter } from "../../config/Validate";

const Groups = () => {
  const data = [
    {
      grCode: "gr101",
      grName: "Abhita Gr 1",
      branch: "Pune",
      status: "Active",
    },
    {
      grCode: "gr102",
      grName: "Abhita Gr 2",
      branch: "Pune",
      status: "Active",
    },
    {
      grCode: "gr103",
      grName: "Abhita Gr 3",
      branch: "Pune",
      status: "Active",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Group Code",
        accessor: "grCode",
      },
      {
        Header: "Group Name",
        accessor: "grName",
      },
      {
        Header: "Branch",
        accessor: "branch",
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

  const [GroupState, setGroupState] = useState({
    GrCode: "",
    errors: [],
  });

  const handleChange = (e) => {
    setGroupState({
      ...GroupState,
      [e.target.name]: e.target.value,
      errors: { ...GroupState.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setGroupState({
      GrCode: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!GroupState.GroupName) {
      IsValid = false;
      errors["GroupName"] = "Group Name Is Required";
    } else if (!checkonlyletterandcharacter(GroupState.GroupName)) {
      IsValid = false;
      errors["GroupName"] = "Please Enter Valid GroupName";
    } else {
      errors["GroupName"] = "";
    }

    if (!GroupState.GroupName) {
      IsValid = false;
      errors["Branch"] = "Branch Is Required";
    } else if (!checkonlyletterandcharacter(GroupState.Branch)) {
      IsValid = false;
      errors["Branch"] = "Please Enter Valid Branch";
    } else {
      errors["Branch"] = "";
    }

    setGroupState({
      ...GroupState,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(GroupState);
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
          Home / Master / <strong>Groups</strong>
        </p>
        <button
          className="add-btn d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <MdAdd size={20} />
          <p>Group</p>
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
                Add Group
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Group Code</label>
                <input
                  className="form-control"
                  type="text"
                  name="GrCode"
                  placeholder="GR1010"
                  disabled
                />
              </div>
              <div className="mb-1">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Group Name"
                  name="GroupName"
                  placeholder="Enter Group Name"
                  value={GroupState.GroupName}
                  onChange={handleChange}
                  error={
                    GroupState.errors
                      ? GroupState.errors.GroupName
                        ? GroupState.errors.GroupName
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="mb-1">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Branch"
                  name="Branch"
                  placeholder="Enter Branch"
                  value={GroupState.Branch}
                  onChange={handleChange}
                  error={
                    GroupState.errors
                      ? GroupState.errors.Branch
                        ? GroupState.errors.Branch
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="ps-2">
                <label className="form-label">Status</label>
                <div className="d-flex">
                  <div className="form-check pe-5">
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

export default Groups;
