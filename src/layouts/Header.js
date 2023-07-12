import React from "react";
import "../assets/styles/Header.css";
import "../assets/styles/MediaQueries/HeaderMedia.css";
import { MdSearch } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";

const Header = () => {
  const navigate = useNavigate();
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
              <div className="mx-2 notification">
                <TbBell size={20} className="icons-color" />
                <div className="notification-count">
                  <p>5</p>
                </div>
              </div>
              <div className="d-flex ms-3">
                <div className="acc-man">
                  <FcBusinessman size={30} className="icons-color" />
                </div>
                <div className="ms-2">
                  <h5>User Name</h5>
                  <p className="header-designation">Developer</p>
                </div>
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
        class="offcanvas offcanvas-start "
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="left-side">
            <h4>fweuiw</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
