import React, { useState, useEffect } from "react";
import {
  Card,
  CardWrapper,
  //   GlobalInformation,
  MainContainer,
  MainWrapper,
} from "../styles/Main.style";

import BarChart from "./BarCharts";

// https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true
const Main = () => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    fetch(
      "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setGlobalData(response);
      })
      .catch((e) => {
        return console.log(e);
      });
  }, []);



  return (
    <MainContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
    >
      <CardWrapper>
       
        <Card>
          <h2>Confirmed</h2>
          <p>{globalData.confirmed}</p>
        </Card>
        <Card>
          <h2>Deaths</h2>
          <p>{globalData.deaths}</p>
        </Card>
        <Card>
          <h2>Recovered</h2>
          <p>{globalData.recovered}</p>
        </Card>
      </CardWrapper>
      <MainWrapper>
        <BarChart globalData={globalData} />
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;
