import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";

const options = {
  chart: {
    type: "spline",
  },
  series: [
    {
      data: [1, 2, 3,4,5,6,7,8,9,10],
    },
  ],
  title: {
    text: "Monthly Average Temperature",
  },
  subtitle: {
    text: "Source: WorldClimate.com",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yAxis: {
    title: {
      text: "Temperature (°C)",
    },
  },
}


export function Dashboard() {
  return (
    <>
      <HeaderDefault title="Dashboard"/>
      <Sidebar />
      <Container>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
      </Container>
    </>
  );
}