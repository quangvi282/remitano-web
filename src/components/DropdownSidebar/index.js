import React from "react";
import { DropdownLink, SidebarLabel } from "./DropdownSidebarElements";

const DropdownSidebar = ({toggle, serviceDropdown}) => {

  return (
    <>
        {serviceDropdown.map((item, index) => {
            return (
              <DropdownLink onClick={toggle} to={item.path} key={index}>
              {/* {item.icon} */}
                  <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );  
          
        })}
    </>
  );
}

export default DropdownSidebar;