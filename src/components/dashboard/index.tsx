import { useEffect, useState } from "react";
import { ApiPaths } from "../../constants";
import ApiService from "../../utils/axios";
import weatherData from "../../data";
import { ChartsContainer } from "../chart";
import Humidity from "../humidity";
import Temprature from "../temprature";
import Radiation from "../radiation";
import "../chart/charts-options";
import Loader from "../loader";

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    ApiService.get(ApiPaths.FORCAST_URL)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        setData(weatherData);
      });
  }, []);

  if (!data) return <Loader />;

  return (
    <ChartsContainer>
      <Humidity
        data={{
          time: data.hourly.time,
          relativehumidity_2m: data.hourly.relativehumidity_2m
        }}
      />
      <Temprature
        data={{
          time: data.daily.time,
          temperature_2m_max: data.daily.temperature_2m_max,
          temperature_2m_min: data.daily.temperature_2m_min
        }}
      />
      <Radiation
        data={{
          time: data.hourly.time,
          direct_radiation: data.hourly.direct_radiation
        }}
      />
    </ChartsContainer>
  );
};

export default Dashboard;
