import { ButtonDefault } from "../../components/ButtonDefault";
import THEME from "../../styles/theme";
import { ImgHTMLAttributes, useEffect, useState } from 'react';




import {
    StationCard,
    CardStation,
    StationCardHeader,
    StationCardTitle,
    StationCardBody,
    StationCardInfoContainer,
    StationCardInfo,
    StationCardImage,
} from "./styles";


import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URI } from "../../integration/uri";


export default function CardStations() {

  const navigate = useNavigate()
  const [stations, setStations] = useState([]);

  const handleGetAll = async () => {
    const res = await axios.get(URI.STATIONS);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllStations = async () => {
    const allStations: [] = await handleGetAll();
    setStations(allStations);
  };

  useEffect(() => {
    getAllStations();
  }, [getAllStations]);

    return (
        <StationCard>

      {stations.map((station: any) => (
        <CardStation>
          <StationCardHeader>
            <StationCardTitle>{station.name}</StationCardTitle>
          </StationCardHeader>
          <StationCardBody>
            <StationCardImage src={station.link} />
          </StationCardBody>
          <StationCardInfoContainer>
            <StationCardInfo>
              {station.reference}
            </StationCardInfo>
          </StationCardInfoContainer>
          <ButtonDefault  
            onClick={(e) => {navigate("/dashboard"); SessionController.setStationData(station)}}
            title="Ver Dados"
            widthButton="230px"
            heightButton="48px"
            backgroundButton={THEME.colors.green_100}
            hoverBackgroundButton={THEME.colors.green_50}
          /> 
        </CardStation>
      ))}
      
      </StationCard>

        
    );
}