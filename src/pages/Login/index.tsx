import ModalLogin from "../../components/ModalLogin";
import { Container } from "./styles";

import ControleSessao from '../../Login/ControleSessao';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Login() {

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
    <Container>
      <ModalLogin/>
    </Container>
  );
}