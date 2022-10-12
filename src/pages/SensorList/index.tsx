
import { Container, ContainerButton, Title, SHr, ButtonTrash, Header, Content, TitleHeader, BackButton } from "./styles";

import { faTrash, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RadioGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material';
import { ButtonDefault } from "../../components/ButtonDefault";
import THEME from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export function SensorList() {
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <Content>
                    <BackButton onClick={() => navigate('/home')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </BackButton>
                    <TitleHeader>
                        Estação | 0001
                    </TitleHeader>
                </Content>
            </Header>
            <Container>
                <div>
                    <Title>Sensores da estação Fatec 0001</Title>
                    <SHr />
                </div>
                <RadioGroup>
                    <div>
                        <FormControlLabel value="first" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash>
                                <FontAwesomeIcon icon={faTrash} />
                            </ButtonTrash>
                        </Tooltip>

                    </div>
                    <div>
                        <FormControlLabel value="secondary" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash><FontAwesomeIcon icon={faTrash} /></ButtonTrash>
                        </Tooltip>
                    </div>
                    <div>
                        <FormControlLabel value="third" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash><FontAwesomeIcon icon={faTrash} /></ButtonTrash>
                        </Tooltip>

                    </div>
                    <div>
                        <FormControlLabel value="fourth" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash><FontAwesomeIcon icon={faTrash} /></ButtonTrash>
                        </Tooltip>

                    </div>
                    <div>
                        <FormControlLabel value="fifth" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash><FontAwesomeIcon icon={faTrash} /></ButtonTrash>
                        </Tooltip>

                    </div>
                    <div>
                        <FormControlLabel value="sixth" control={<Checkbox />} label="Sensor pluviométrico" />
                        <Tooltip title="Deletar">
                            <ButtonTrash><FontAwesomeIcon icon={faTrash} /></ButtonTrash>
                        </Tooltip>

                    </div>
                </RadioGroup>
            </Container>
            <ContainerButton>
                <ButtonDefault
                    title="Cadastrar parametros do sensor"
                    backgroundButton={THEME.colors.green_100}
                    widthButton={'15%'}
                    heightButton={'56px'}

                    onClick={() => navigate('/parameterregister')}
                />
            </ContainerButton>
        </>
    )
}