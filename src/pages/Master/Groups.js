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

  const [DepartmentState, setDepartmentState] = useState({
    Department: "",
    errors: [],
  });

  const handleChange = (e) => {
    setDepartmentState({
      ...DepartmentState,
      [e.target.name]: e.target.value,
      errors: { ...DepartmentState.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setDepartmentState({
      Department: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!DepartmentState.Department) {
      IsValid = false;
      errors["Department"] = "Department Is Required";
    } else if (!checkonlyletterandcharacter(DepartmentState.Department)) {
      IsValid = false;
      errors["Department"] = "Please Enter Valid Name";
    } else {
      errors["Department"] = "";
    }

    setDepartmentState({
      ...DepartmentState,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(DepartmentState);
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
                Add Department
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormControl
                wrapperclass=""
                type="text"
                label="Department"
                name="Department"
                placeholder="Enter Department"
                value={DepartmentState.Department}
                onChange={handleChange}
                error={
                  DepartmentState.errors
                    ? DepartmentState.errors.Department
                      ? DepartmentState.errors.Department
                      : ""
                    : ""
                }
              />
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

export default Groups;
