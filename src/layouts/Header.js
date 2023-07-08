import React from "react";
import "../assets/styles/Header.css";
import { MdSearch } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-height">
        <div className="header-fixed">
          <div className="d-flex align-items-center justify-content-between">
            <p className="header-heading">Abhita Finance Software</p>
            <div className="d-flex align-items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
