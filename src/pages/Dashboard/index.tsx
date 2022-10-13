import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";

import ControleSessao from '../../Login/ControleSessao';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);

  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    if (autenticado) {
        if (ControleSessao.getUserCargo() == 'admin') {
            navigate('/home-page')
        } else if (ControleSessao.getUserCargo() == 'moderator') {
            navigate('/home-page')
        } else if (ControleSessao.getUserCargo() == 'user') {
            navigate('/home-page')
        }
    }
}, [autenticado, navigate])

  const checarAutenticacao = async () => {
    const token = ControleSessao.getToken()
    if (token == null) {
      setAutenticado(false)
    } else {
      setAutenticado(true)
    }
    return autenticado
  }


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