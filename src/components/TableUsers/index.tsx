import { useEffect, useState } from "react";
import axios from "../../integration/axios";
import { URI } from "../../integration/uri";
import THEME from "../../styles/theme";
import { ButtonDefault } from "../ButtonDefault";

import {
  Table,
  STHead,
  STHeadTR,
  STh,
  STBody,
  STBodyTR,
  STd,
  ButtonContainer,
  Select,
} from "./styles";

export function TableUsers() {

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
          <STh>Nome</STh>
          <STh>Email</STh>
          <STh>Nível de Acesso</STh>
          <STh>Trocar Nível de Acesso</STh>
        </STHeadTR>
      </STHead>
      <STBody>


        
        <STBodyTR>
          <STd>Gustavo Santos</STd>
          <STd>gustavoleandro616@gmail.com</STd>
          <STd>Administrador</STd>
          <STd>
            <Select>
              <option value="" hidden>Nível de Usuário</option>
              <option value="1">Administrador</option>
              <option value="2">Usuário Comum</option>
            </Select>
          </STd>
        </STBodyTR>

        <STBodyTR>
          <STd>Gustavo Santos</STd>
          <STd>gustavoleandro616@gmail.com</STd>
          <STd>Usuário Comum</STd>
          <STd>
            <Select>
              <option value="" hidden>Nível de Usuário</option>
              <option value="1">Administrador</option>
              <option value="2">Usuário Comum</option>
            </Select>
          </STd>
        </STBodyTR>

      </STBody>
    </Table>
  );
}
