import React, { useState } from "react";
import {
  checkonlyletterandcharacter,
  checkonlynumbervalue,
} from "../../config/Validate";
import FormControl from "../../components/FormControl";

const AddCustomer = () => {
  const [Main, setMain] = useState(true);
  const [UserId, setUserId] = useState(false);
  const [Bank, setBank] = useState(false);

  const funMain = () => {
    setMain(true);
    setUserId(false);
  };

  const funUserId = () => {
    setUserId(true);
    setMain(false);
  };

  const funBank = () => {
    setBank(true);
    setUserId(false);
    setMain(false);
  };

  const [Customer, setCustomer] = useState({
    // Main
    CustomerName: "",
    CustomerAliseName: "",
    CustomerMobile: "",
    Email: "",
    Date: "",
    Branch: "",
    FatherNm: "",
    MotherNm: "",
    SpouseNm: "",
    Pincode: "",
    Address: "",
    Area: "",
    City: "",
    District: "",
    State: "",
    // User Identification
    Photo: "",
    Aadhar: "",
    Pan: "",
    Bank: "",
    // Bank Details & Location
    AccountNo: "",
    Ifsc: "",
    BankName: "",
    BankAddress: "",
    AccountNm: "",
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
      // Main
      CustomerName: "",
      CustomerAliseName: "",
      CustomerMobile: "",
      Email: "",
      Date: "",
      Branch: "",
      FatherNm: "",
      MotherNm: "",
      SpouseNm: "",
      Pincode: "",
      Address: "",
      Area: "",
      City: "",
      District: "",
      State: "",
      // User Identification
      Photo: "",
      Aadhar: "",
      Pan: "",
      Bank: "",
      // Bank Details & Location
      AccountNo: "",
      Ifsc: "",
      BankName: "",
      BankAddress: "",
      AccountNm: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;
    if (!Customer.CustomerName) {
      IsValid = false;
      errors["CustomerName"] = "Customer Name Is Required";
    } else if (!checkonlyletterandcharacter(Customer.CustomerName)) {
      IsValid = false;
      errors["CustomerName"] = "Please Enter Valid Customer Name";
    } else {
      errors["CustomerName"] = "";
    }

    if (!Customer.CustomerAliseName) {
      IsValid = false;
      errors["CustomerAliseName"] = "Customer Alise Name Is Required";
    } else if (!checkonlyletterandcharacter(Customer.CustomerAliseName)) {
      IsValid = false;
      errors["CustomerAliseName"] = "Please Enter Valid Customer Alise Name";
    } else {
      errors["CustomerAliseName"] = "";
    }

    if (!Customer.CustomerMobile) {
      IsValid = false;
      errors["CustomerMobile"] = "Customer Mobile Is Required";
    } else if (!checkonlynumbervalue(Customer.CustomerMobile)) {
      IsValid = false;
      errors["CustomerMobile"] = "Please Enter Valid Customer Mobile";
    } else {
      errors["CustomerMobile"] = "";
    }

    if (!Customer.Email) {
      IsValid = false;
      errors["Email"] = "Email ID Is Required";
    } else if (!checkonlynumbervalue(Customer.Email)) {
      IsValid = false;
      errors["Email"] = "Please Enter Valid Email ID";
    } else {
      errors["Email"] = "";
    }

    if (!Customer.Date) {
      IsValid = false;
      errors["Date"] = "Date of Birth Is Required";
    } else {
      errors["Date"] = "";
    }

    if (!Customer.Branch) {
      IsValid = false;
      errors["Branch"] = "Branch Is Required";
    } else if (!checkonlyletterandcharacter(Customer.Branch)) {
      IsValid = false;
      errors["Branch"] = "Please Enter Valid Branch";
    } else {
      errors["Branch"] = "";
    }

    if (!Customer.FatherNm) {
      IsValid = false;
      errors["FatherNm"] = "Father Name Is Required";
    } else if (!checkonlyletterandcharacter(Customer.FatherNm)) {
      IsValid = false;
      errors["FatherNm"] = "Please Enter Valid Father Name";
    } else {
      errors["FatherNm"] = "";
    }

    if (!Customer.MotherNm) {
      IsValid = false;
      errors["MotherNm"] = "Mother Name Is Required";
    } else if (!checkonlyletterandcharacter(Customer.MotherNm)) {
      IsValid = false;
      errors["MotherNm"] = "Please Enter Valid Mother Name";
    } else {
      errors["MotherNm"] = "";
    }

    if (!Customer.SpouseNm) {
      IsValid = false;
      errors["SpouseNm"] = "Spouse Is Required";
    } else if (!checkonlyletterandcharacter(Customer.SpouseNm)) {
      IsValid = false;
      errors["SpouseNm"] = "Please Enter Valid Spouse";
    } else {
      errors["SpouseNm"] = "";
    }

    if (!Customer.Pincode) {
      IsValid = false;
      errors["Pincode"] = "Pincode Is Required";
    } else if (!checkonlynumbervalue(Customer.Pincode)) {
      IsValid = false;
      errors["Pincode"] = "Please Enter Valid Pincode";
    } else {
      errors["Pincode"] = "";
    }

    if (!Customer.Address) {
      IsValid = false;
      errors["Address"] = "Address Is Required";
    } else if (!checkonlyletterandcharacter(Customer.Address)) {
      IsValid = false;
      errors["Address"] = "Please Enter Valid Address";
    } else {
      errors["Address"] = "";
    }

    if (!Customer.Area) {
      IsValid = false;
      errors["Area"] = "Area Is Required";
    } else if (!checkonlyletterandcharacter(Customer.Area)) {
      IsValid = false;
      errors["Area"] = "Please Enter Valid Area";
    } else {
      errors["Area"] = "";
    }

    if (!Customer.City) {
      IsValid = false;
      errors["City"] = "City Is Required";
    } else if (!checkonlyletterandcharacter(Customer.City)) {
      IsValid = false;
      errors["City"] = "Please Enter Valid City";
    } else {
      errors["City"] = "";
    }

    if (!Customer.State) {
      IsValid = false;
      errors["State"] = "State Is Required";
    } else if (!checkonlyletterandcharacter(Customer.State)) {
      IsValid = false;
      errors["State"] = "Please Enter Valid State";
    } else {
      errors["State"] = "";
    }

    if (!Customer.District) {
      IsValid = false;
      errors["District"] = "District Is Required";
    } else if (!checkonlyletterandcharacter(Customer.District)) {
      IsValid = false;
      errors["District"] = "Please Enter Valid District";
    } else {
      errors["District"] = "";
    }

    if (!Customer.Photo) {
      IsValid = false;
      errors["Photo"] = "Photo Is Required";
    } else {
      errors["Photo"] = "";
    }

    if (!Customer.Aadhar) {
      IsValid = false;
      errors["Aadhar"] = "Aadhar Is Required";
    } else {
      errors["Aadhar"] = "";
    }

    if (!Customer.Pan) {
      IsValid = false;
      errors["Pan"] = "Pan Card Is Required";
    } else {
      errors["Pan"] = "";
    }

    if (!Customer.Bank) {
      IsValid = false;
      errors["Bank"] = "Bank Card Is Required";
    } else {
      errors["Bank"] = "";
    }

    if (!Customer.AccountNo) {
      IsValid = false;
      errors["AccountNo"] = "Account No. Is Required";
    } else if (!checkonlyletterandcharacter(Customer.AccountNo)) {
      IsValid = false;
      errors["AccountNo"] = "Please Enter Valid Account No.";
    } else {
      errors["AccountNo"] = "";
    }

    if (!Customer.Ifsc) {
      IsValid = false;
      errors["Ifsc"] = "IFSC Code Is Required";
    } else if (!checkonlyletterandcharacter(Customer.Ifsc)) {
      IsValid = false;
      errors["Ifsc"] = "Please Enter Valid IFSC Code";
    } else {
      errors["Ifsc"] = "";
    }

    if (!Customer.BankName) {
      IsValid = false;
      errors["BankName"] = "Bank Name Is Required";
    } else if (!checkonlyletterandcharacter(Customer.BankName)) {
      IsValid = false;
      errors["BankName"] = "Please Enter Valid Bank Name";
    } else {
      errors["BankName"] = "";
    }

    if (!Customer.BankAddress) {
      IsValid = false;
      errors["BankAddress"] = "Bank Address Is Required";
    } else if (!checkonlyletterandcharacter(Customer.BankAddress)) {
      IsValid = false;
      errors["BankAddress"] = "Please Enter Valid Bank Address";
    } else {
      errors["BankAddress"] = "";
    }

    if (!Customer.AccountNm) {
      IsValid = false;
      errors["AccountNm"] = "Name On Account Is Required";
    } else if (!checkonlyletterandcharacter(Customer.AccountNm)) {
      IsValid = false;
      errors["AccountNm"] = "Please Enter Valid Name On Account";
    } else {
      errors["AccountNm"] = "";
    }

    setCustomer({
      ...Customer,
      errors: errors,
    });
    return IsValid;
  };

  const handleMainSubmit = () => {
    console.log(Customer);
    if (validate()) {
      clearStates();
      alert("Done");
    } else {
      alert("Please Enter Proper Details ");
    }
  };

  const handleUiSubmit = () => {
    console.log(Customer);
    if (validate()) {
      clearStates();
      alert("Done");
    } else {
      alert("Please Enter Proper Details ");
    }
  };

  const handleBankSubmit = () => {
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
      <h4 className="">Add Customer</h4>
      <hr />
      <nav className="nav ">
        <a
          className="nav-link me-3 active "
          aria-current="page"
          href="#"
          onClick={funMain}
        >
          Main
        </a>
        <a className="nav-link me-3" href="#" onClick={funUserId}>
          User Identification
        </a>
        <a className="nav-link me-3" href="#" onClick={funBank}>
          Bank Details & Location
        </a>
        <a className="nav-link me-3" href="#">
          Income
        </a>
        <a className="nav-link me-3" href="#">
          Reference
        </a>
        <a className="nav-link" href="#">
          Nominee & Group
        </a>
      </nav>

      <div className="py-3">
        {Main ? (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Customer Name"
                  name="CustomerName"
                  placeholder="Enter Customer Name"
                  value={Customer.CustomerName}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.CustomerName
                        ? Customer.errors.CustomerName
                        : ""
                      : ""
                  }
                />
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Customer Alise Name"
                  name="CustomerAliseName"
                  placeholder="Enter Customer Alise Name"
                  value={Customer.CustomerAliseName}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.CustomerAliseName
                        ? Customer.errors.CustomerAliseName
                        : ""
                      : ""
                  }
                />
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Customer Mobile Number"
                  name="CustomerMobile"
                  placeholder="Enter Customer Mobile Number"
                  value={Customer.CustomerMobile}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.CustomerMobile
                        ? Customer.errors.CustomerMobile
                        : ""
                      : ""
                  }
                />
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Alternative Mobile Number"
                  name="AlternativeMobile"
                  placeholder="Enter Alternative Mobile Number"
                  value={Customer.CustomerMobile}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.CustomerMobile
                        ? Customer.errors.CustomerMobile
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Email ID"
                  name="Email"
                  placeholder="Enter Email ID"
                  value={Customer.Email}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Email
                        ? Customer.errors.Email
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ps-2">
                <label className="form-label">Gender</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Gender"
                      id="Male"
                    />
                    <label className="form-check-label" for="Male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Gender"
                      id="Female"
                      checked
                    />
                    <label className="form-check-label" for="Female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Date of Birth"
                  name="Date"
                  placeholder="Enter Date of Birth"
                  value={Customer.Date}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Date
                        ? Customer.errors.Date
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Group Name"
                  name="Groupnm"
                  placeholder="Enter Groupnm"
                  value={Customer.Groupnm}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Groupnm
                        ? Customer.errors.Groupnm
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="select"
                  label="Branch"
                  name="Branch"
                  placeholder="Enter Branch"
                  value={Customer.Branch}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Branch
                        ? Customer.errors.Branch
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Father Name"
                  name="FatherNm"
                  placeholder="Enter Father Name"
                  value={Customer.FatherNm}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.FatherNm
                        ? Customer.errors.FatherNm
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Mother Name"
                  name="MotherNm"
                  placeholder="Enter Mother Name"
                  value={Customer.MotherNm}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.MotherNm
                        ? Customer.errors.MotherNm
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Spouse Name"
                  name="SpouseNm"
                  placeholder="Enter Spouse Name"
                  value={Customer.SpouseNm}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.SpouseNm
                        ? Customer.errors.SpouseNm
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Pincode"
                  name="Pincode"
                  placeholder="Enter Pincode"
                  value={Customer.Pincode}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Pincode
                        ? Customer.errors.Pincode
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Address"
                  name="Address"
                  placeholder="Enter Address"
                  value={Customer.Address}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Address
                        ? Customer.errors.Address
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Area"
                  name="Area"
                  placeholder="Enter Area"
                  value={Customer.Area}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Area
                        ? Customer.errors.Area
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="City"
                  name="City"
                  placeholder="Enter City"
                  value={Customer.City}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.City
                        ? Customer.errors.City
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="District"
                  name="District"
                  placeholder="Enter District"
                  value={Customer.District}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.District
                        ? Customer.errors.District
                        : ""
                      : ""
                  }
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="cancel-btn"
                onClick={handleMainSubmit}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          ""
        )}

        {UserId ? (
          <>
            <div className="">
              <FormControl
                wrapperclass=""
                type="file"
                label="Upload Photo"
                name="Photo"
                value={Customer.Photo}
                onChange={handleChange}
                error={
                  Customer.errors
                    ? Customer.errors.Photo
                      ? Customer.errors.Photo
                      : ""
                    : ""
                }
              />
            </div>
            <div className="">
              <FormControl
                wrapperclass=""
                type="file"
                label="Upload Aadhar Card"
                name="Aadhar"
                value={Customer.Aadhar}
                onChange={handleChange}
                error={
                  Customer.errors
                    ? Customer.errors.Aadhar
                      ? Customer.errors.Aadhar
                      : ""
                    : ""
                }
              />
            </div>
            <div className="">
              <FormControl
                wrapperclass=""
                type="file"
                label="Upload Pan Card"
                name="Pan"
                value={Customer.Pan}
                onChange={handleChange}
                error={
                  Customer.errors
                    ? Customer.errors.Pan
                      ? Customer.errors.Pan
                      : ""
                    : ""
                }
              />
            </div>
            <div className="">
              <FormControl
                wrapperclass=""
                type="file"
                label="Upload Bank Passbook"
                name="Bank"
                value={Customer.Bank}
                onChange={handleChange}
                error={
                  Customer.errors
                    ? Customer.errors.Bank
                      ? Customer.errors.Bank
                      : ""
                    : ""
                }
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="cancel-btn"
                onClick={handleUiSubmit}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          ""
        )}

        {Bank ? (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Account No."
                  name="AccountNo"
                  placeholder="Enter Account No."
                  value={Customer.AccountNo}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.AccountNo
                        ? Customer.errors.AccountNo
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="IFSC Code"
                  name="Ifsc"
                  placeholder="Enter IFSC Code"
                  value={Customer.Ifsc}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.Ifsc
                        ? Customer.errors.Ifsc
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Bank Name"
                  name="BankName"
                  placeholder="Enter Bank Name"
                  value={Customer.BankName}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.BankName
                        ? Customer.errors.BankName
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Bank Address"
                  name="BankAddress"
                  placeholder="Enter Bank Address"
                  value={Customer.BankAddress}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.BankAddress
                        ? Customer.errors.BankAddress
                        : ""
                      : ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FormControl
                  wrapperclass=""
                  type="text"
                  label="Name on Account"
                  name="AccountNm"
                  placeholder="Enter Name on Account"
                  value={Customer.AccountNm}
                  onChange={handleChange}
                  error={
                    Customer.errors
                      ? Customer.errors.AccountNm
                        ? Customer.errors.AccountNm
                        : ""
                      : ""
                  }
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="cancel-btn"
                onClick={handleBankSubmit}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <hr />
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="add-btn"
            onClick={handleBankSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
