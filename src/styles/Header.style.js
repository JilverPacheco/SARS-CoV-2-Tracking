import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.nav)`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size:70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
`;
