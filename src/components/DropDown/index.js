import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({serviceDropdown}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
        <ul
            className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}
            onClick={() => setDropdown(!dropdown)}
        >
            {serviceDropdown.map((item) => {
                return (
                    <li key={item.id}>
                    <Link
                        to={item.path}
                        className={item.cName}
                        onClick={() => setDropdown(false)}
                    >
                        {item.title}
                    </Link>
                    </li>
                );
            })}
        </ul>
    </>
  );
}

export default Dropdown;