import React from "react";
import { RiVirusLine } from "react-icons/ri";

import {
  SidebarContainer,
  SidebarItem,
  Sidebartitle,
  TitleWrapper,
} from "../styles/Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TitleWrapper>
        <Sidebartitle>
          C<RiVirusLine style={{ color: "crimson" }} />
          VID-19
        </Sidebartitle>
      </TitleWrapper>
      <SidebarItem>Global overview</SidebarItem>
      <SidebarItem>Search by country</SidebarItem>
      {/* <SidebarItem>Hola</SidebarItem>
      <SidebarItem>Hola</SidebarItem>
      <SidebarItem>Hola</SidebarItem> */}
    </SidebarContainer>
  );
};

export default Sidebar;
