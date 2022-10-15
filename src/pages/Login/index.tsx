import ModalLogin from "../../components/ModalLogin";
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Login() {
  return (
    <Container>
      <ModalLogin/>
    </Container>
  );
}