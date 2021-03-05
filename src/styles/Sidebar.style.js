import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100vh;
  background-color: #3e4049;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Sidebartitle = styled.h1`
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f2f5;
  font-family: OswaldBold;
`;
export const SidebarItem = styled.div`
font-size:20px;
font-family: OswaldRegular;
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  padding-left: 20px;
//   border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
