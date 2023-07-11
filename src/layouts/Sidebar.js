import React, { useEffect, useState } from "react";
import "../assets/styles/Sidebar.css";
import { IMAGES } from "../utils/Index";
import { TbHome2 } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { FaRegMoneyBillAlt, FaHandHoldingUsd } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState({ m: 0, s: "" });
  const sideMenu = [
    {
      icon: <TbHome2 size={25} className="sidebar-icons" />,
      title: "Dashboard",
      to: "/app/dashboard",
    },
    {
      icon: <AiOutlinePlusCircle size={25} className="sidebar-icons" />,
      title: "Master",
      sub: [
        { title: "Groups", to: "/app/groups" },
        { title: "Bank", to: "/app/bank" },
        { title: "Branches ", to: "/app/branches" },
        { title: "Designation ", to: "/app/designation" },
      ],
    },
    {
      icon: <IoPeopleOutline size={25} className="sidebar-icons" />,
      title: "Customers",
      sub: [
        { title: "Customers", to: "/app/customers" },
        { title: "Customers Group", to: "/app/customers_group" },
      ],
    },
    {
      icon: <FaRegMoneyBillAlt size={25} className="sidebar-icons" />,
      title: "Create Group Loan",
      to: "/app/create_group_loan",
    },
    {
      icon: <BiRupee size={25} className="sidebar-icons" />,
      title: "Loan Summary",
      to: "/app/loan_summary",
    },
    {
      icon: <FaHandHoldingUsd size={25} className="sidebar-icons" />,
      title: "Disbursement",
      to: "/app/disbursement",
    },
    {
      icon: <BsCollection size={25} className="sidebar-icons" />,
      title: "Collections",
      sub: [
        { title: "Show Collection", to: "/app/show_collection" },
        { title: "EMI Collection", to: "/app/emi_collection" },
        { title: "Customers Collection", to: "/app/customers_collection" },
      ],
    },
  ];

  useEffect(() => {
    let sIdx = "";
    const index = sideMenu.findIndex((item) => {
      if (item.to) {
        return location.pathname === item.to;
      } else if (item.sub) {
        sIdx = item?.sub?.findIndex((sub) => {
          let childCheck = sub?.childRoute?.findIndex((child) => {
            return location.pathname === `${sub.to}/${child}`;
          });
          return sub.to === location.pathname || Math.sign(childCheck) >= 0
            ? true
            : false;
        });
        return Math.sign(sIdx) >= 0 ? true : false;
      }
    });
    setActiveIdx({ m: index, s: sIdx });
  }, [location]);

  return (
    <>
      <div className="img-outer-wrapper">
        <div className="img-inner-wrapper">
          <img src={IMAGES.AbhitaLogo} alt="logo" className="logo" />
        </div>
      </div>
      <div className="sidebar-menu">
        <ul className="sidebar-menu-ul">
          {sideMenu?.map((menu, idx) => (
            <MenuItem {...menu} key={idx} idx={idx} activeIdx={activeIdx} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
