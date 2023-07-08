import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";

export default function MenuItem({ title, icon, to, sub, idx, activeIdx }) {

  const menuItem = useRef();
  return (
    <>
      <li
        className={
          "menu-item" +
          (idx === activeIdx?.m ? " active" : "") +
          (sub && activeIdx.s !== "" && idx === activeIdx?.m ? " open" : "")
        }
        ref={menuItem}
      >
        <Link
          to={!sub ? to : "/app"}
          className="menu-link menu-toggle"
          onClick={(e) => {
            if (sub) {
              e.preventDefault();
              if (e.currentTarget.parentElement.classList.contains("open")) {
                e.currentTarget.parentElement.classList.remove("open");
              } else {
                const items = document.querySelectorAll(
                  ".menu-vertical .menu-inner > .menu-item"
                );
                for (var item of items) {
                  item.classList.remove("open");
                }
                e.currentTarget.parentElement.classList.add("open");
              }
            }
          }}
        >
          {icon}
          <div data-i18n="Layouts" className="sidebar-title">
            {title}
          </div>
        </Link>

        {sub ? (
          <ul className="menu-sub">
            {sub.map((s, i) => (
              <li
                className={
                  "sub-menu-item" +
                  (i === activeIdx.s ? " active" : "")
                }
                key={i}
              >
                <a href={s.to} className="sub-menu-link">
                  <RxDot size={15} />
                  <div>{s.title}</div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </li>
      
    </>
  );
}
