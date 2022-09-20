import { useEffect, useState } from "react";
import axios from "../../integration/axios";
import { URI } from "../../integration/uri";
import THEME from "../../styles/theme";
import {ButtonDefault} from "../ButtonDefault";

import {
  Table,
  STHead,
  STHeadTR,
  STh,
  STBody,
  STBodyTR,
  STd,
  ButtonContainer,
} from "./styles";

export function TableStation() {

  const [stations, setStations] = useState([])

  const handleGetAll = async () => {
    const res = await axios.get(URI.STATIONS)
    return res.data
  }

  const getAllStations = async () => {
    const allStations: [] = await handleGetAll()
    setStations(allStations);
    console.log(allStations);
  }

  useEffect(() => {
    getAllStations()
  }, []);


  return (
    <Table>
      <STHead>
        <STHeadTR>
          <STh>Código da estação</STh>
          <STh>Nome da estação</STh>
          <STh>Localização</STh>
        </STHeadTR>
      </STHead>
      <STBody>
        {stations.map((station: any) => (
          <STBodyTR key = {station["id"]}>
          <STd>{station['id']}</STd>
          <STd>{station['name']}</STd>
          <STd>{station['reference']}</STd>
          <ButtonContainer>
            <ButtonDefault
              title="Detalhes"
              backgroundButton={THEME.colors.green_50}
              widthButton={"184px"}
              heightButton={"40px"}
            />
          </ButtonContainer>
        </STBodyTR>
        ))}
      </STBody>
    </Table>
  );
}
