import React, { useState } from "react";
import "../assets/styles/Header.css";
import "../assets/styles/MediaQueries/HeaderMedia.css";
import { MdSearch } from "react-icons/md";
import { TbBell, TbLogout } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { LuSettings } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { TbHome2 } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { FaRegMoneyBillAlt, FaHandHoldingUsd } from "react-icons/fa";
import { IMAGES } from "../utils/Index";
import { RxDot, RxDotFilled } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();

  const [show, SetShow] = useState(false);
  const funShow = () => {
    SetShow(true);
  };

  return (
    <>
      <div className="header-height">
        <div className="header-fixed">
          <div className="d-flex align-items-center justify-content-between">
            <p className="header-heading">Abhita Finance Software</p>
            <div className="d-flex align-items-center header-right">
              <div className="mx-2">
                {/* <MdSearch size={20} className="icons-color" /> */}
                <div className="box">
                  <form name="search">
                    <input
                      type="text"
                      className="search-input"
                      name="txt"
                      // onMouseOut="this.value = ''; this.blur();"
                    />
                  </form>
                  <MdSearch size={20} className="icons-color search" />
                </div>
              </div>

              <div className="relative">
                <div
                  className="mx-2 notification"
                  // onClick={funShow}
                >
                  <TbBell size={20} className="icons-color" />
                  <div className="notification-count">
                    <p>5</p>
                  </div>
                </div>
                {/* {show ? (
                  <div className="notification-dropdown">
                    <h5>Notification</h5>
                    <hr />
                    <ul>
                      <li className="d-flex align-items-start">
                        <RxDotFilled size={30} className="notification-dot" />
                        <div>
                          <p className="notification-nm">CSR Name</p>
                          <div className="notification-gr-details">
                            <p className="notification-gr">
                              Gr101 - Group Name
                            </p>
                            <p className="notification-gr">Demand- 10,000/-</p>
                           
                            <p className="notification-gr">
                              Collection- 8,000/-
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )} */}
              </div>

              <div className="dropdown">
                <div
                  className="dropdown-toggle d-flex align-items-center ms-3 "
                  // type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="acc-man">
                    <FcBusinessman size={30} className="icons-color" />
                  </div>
                  <div className="ms-2">
                    <h5>User Name</h5>
                    <p className="header-designation">Developer</p>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-list">
                  <li data-bs-dismiss="offcanvas">
                    <a className="dropdown-item d-flex" href="/">
                      <TbLogout size={20} />
                      <p className="ps-2"> Logout</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ms-3">
                <LuSettings
                  size={20}
                  className="icons-color setting"
                  onClick={() => navigate("/app/settings")}
                />
              </div>
            </div>
            <CgMenuRight
              size={25}
              className="header-menu"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            />
          </div>
        </div>
      </div>

      {/* Offcanvas Header */}

      <div
        className="offcanvas offcanvas-start mb-offcanvas"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header offcanvas-img-inner-wrapper">
          <img src={IMAGES.AbhitaLogo} alt="logo" className="offcanvas-logo" />

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-list">
            <ul>
              <li data-bs-dismiss="offcanvas">
                <Link
                  to="/app/dashboard"
                  className="d-flex offcanvas-sidebar-title"
                >
                  <TbHome2 size={20} />
                  <p className="ps-2">Dashboard</p>
                </Link>
              </li>
              <li
                className="d-flex accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <AiOutlinePlusCircle size={20} />
                      <p className="ps-2">Master</p>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/groups"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Group</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/bank"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Bank</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/branches"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Branches</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/designation"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Designation</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="d-flex accordion accordion-flush" id="Customers">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <IoPeopleOutline size={20} />
                      <p className="ps-2">Customers</p>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#Customers"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/customers"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Customers</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/customers_group"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Customer Group</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                className="d-flex offcanvas-sidebar-title"
              >
                <Link
                  to="/app/create_group_loan"
                  className="d-flex offcanvas-sidebar-title"
                >
                  <FaRegMoneyBillAlt size={20} />
                  <p className="ps-2">Create Group Loan</p>
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                className="d-flex offcanvas-sidebar-title"
              >
                <Link
                  to="/app/loan_summary"
                  className="d-flex offcanvas-sidebar-title"
                >
                  <BiRupee size={20} />
                  <p className="ps-2">Loan Summary</p>
                </Link>
              </li>
              <li
                data-bs-dismiss="offcanvas"
                className="d-flex offcanvas-sidebar-title"
              >
                <Link
                  to="/app/disbursement"
                  className="d-flex offcanvas-sidebar-title"
                >
                  <FaHandHoldingUsd size={20} />
                  <p className="ps-2">Disbursement</p>
                </Link>
              </li>
              <li className="d-flex accordion accordion-flush" id="Customers">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <BsCollection size={20} />
                      <p className="ps-2">Collections</p>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#Customers"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/show_collection"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Show Collection</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/emi_collection"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">EMI Collection</p>
                          </Link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                          <Link
                            to="/app/customers_collection"
                            className="d-flex offcanvas-sidebar-title"
                          >
                            <RxDot size={15} />
                            <p className="ps-2">Customer Collection</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
