import { ButtonDefault } from "../../components/ButtonDefault";
import THEME from "../../styles/theme";
import { ImgHTMLAttributes } from 'react';

import {
    StationCard,
    StationCardHeader,
    StationCardTitle,
    StationCardBody,
    StationCardInfoContainer,
    StationCardInfo,
    StationCardImage,
} from "./styles";

import { useNavigate } from 'react-router-dom';

type StationCardProps = ImgHTMLAttributes<HTMLImageElement> & {
    stationName: string;
    stationImage: string;
    stationInfo: string;
};

export default function CardStation({ stationName, stationImage, stationInfo }: StationCardProps) {
    const navigate = useNavigate();
    return (
        <StationCard>
          <StationCardHeader>
            <StationCardTitle>{stationName}</StationCardTitle>
          </StationCardHeader>
          <StationCardBody>
            <StationCardImage src={stationImage} alt={stationName}/>
          </StationCardBody>
          <StationCardInfoContainer>
            <StationCardInfo>
              {stationInfo}
            </StationCardInfo>
          </StationCardInfoContainer>
          <ButtonDefault
            onClick={() => navigate('/dashboard-escola')}
            title={stationName}
            widthButton="230px"
            heightButton="48px"
            backgroundButton={THEME.colors.green_100}
            hoverBackgroundButton={THEME.colors.green_50}
          />
        </StationCard>
    );
}