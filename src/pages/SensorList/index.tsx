
import { Container, ContainerButton, Title, SHr, ButtonTrash, Header, Content, TitleHeader, BackButton } from "./styles";

import { faTrash, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SessionController from "../../session/sessionController"
import { useNavigate } from "react-router-dom";

import { RadioGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material';
import { ButtonDefault } from "../../components/ButtonDefault";
import THEME from "../../styles/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import { URI } from "../../integration/uri";
import ParameterHandlers from "../../integration/handlers/parameterHandlers";

export function SensorList() {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);
    const [parameters, setParameters] = useState([])
    const [stationParameters, setStationParameters]: any[] = useState([])

    const parameterHandler = new ParameterHandlers()

  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (!autenticado) {
        navigate('/')
    }
  }, [autenticado, navigate])

  useEffect(() => {
    if (!autenticado || SessionController.getUserRole() == 'user') {
        navigate('/home-page')
    }
  }, [autenticado, navigate])

  const checarAutenticacao = async () => {
    const token = SessionController.getToken()
    if (token == null) {
        setAutenticado(false)
    } else {
        setAutenticado(true)
    }
    return autenticado
  }

  const handleGetAll = async () => {
    const res = await axios.get(URI.PARAMETERS)
    return res.data
  }

  const getAllParameters = async () => {
    const allParameters: [] = await handleGetAll()
    const parameterList = getStationParameters(allParameters)
    setParameters(allParameters)
    setStationParameters(parameterList)
  }

  const getStationParameters = (parameterList: []) => {
    const tempParamList: any[] = []
    parameterList.forEach(parameter => {
        if(parameter['station']['id'] == SessionController.getStationId() && !parameterExistsInList(stationParameters, parameter['id'])){
            tempParamList.push(parameter)
        }
    })
    return tempParamList
  }

  const parameterExistsInList = (parameterList: any[], id: number) => {
    parameterList.forEach(parameter => {
        if (id == parameter.id) return true
    })
    return false
  }

  useEffect(() => {
    getAllParameters()
  }, [getAllParameters])

    return (
        <>
            <Header>
                <Content>
                    <BackButton onClick={() => navigate('/station-details')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </BackButton>
                    <TitleHeader>
                        {}
                    </TitleHeader>
                </Content>
            </Header>
            <Container>
                <div>
                    <Title>Parâmetros de {SessionController.getStationName()}</Title>
                    <SHr />
                </div>
                <RadioGroup>
                    {stationParameters.map((parameter: any) => (
                        <div key={parameter.id}>
                        <FormControlLabel value={parameter.id} control={<Checkbox onChange={(e) => parameterHandler.handleActivateParameter(parameter.id)}/>} label={parameter.parameterType.name} />
                        <Tooltip title="Deletar">
                            <ButtonTrash onClick={(e) => parameterHandler.handleDeleteParameter(parameter.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </ButtonTrash>
                        </Tooltip>

                        </div>
                    ))}
                </RadioGroup>
            </Container>
            <ContainerButton>
                <ButtonDefault
                    title="Cadastrar parametros do sensor"
                    backgroundButton={THEME.colors.green_100}
                    widthButton={'15%'}
                    heightButton={'56px'}

                    onClick={() => navigate('/parameter-register')}
                />
            </ContainerButton>
        </>
    )
}