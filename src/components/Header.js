import React from "react";
import { HeaderWrapper } from "../styles/Header.style";
import { RiVirusLine } from "react-icons/ri";

const Header = () => {
  return (
    <HeaderWrapper
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <h1>
        C<RiVirusLine style={{ color: "crimson" }} />
        VID-19
      </h1>
    </HeaderWrapper>
  );
};

export default Header;
