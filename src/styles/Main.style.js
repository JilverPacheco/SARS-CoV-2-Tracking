import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.section)`
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const CardWrapper = styled.div`
  width: 400px;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  // border: 2px solid #000;
  @media (max-width: 768px) {
    width: 100%;
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Card = styled.div`
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  width: 200px;
  background-color: #fff;
  padding: 5px 30px;
  h2 {
    font-family: OswaldBold;
    // border: 2px solid #000;
  }
  p {
    // border: 2px solid #000;
    font-family: OswaldRegular;
  }
`;

export const GlobalInformation = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
`;
