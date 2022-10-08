import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { StationDisplay } from "../../components/StationDetails";

import { Main, Footer, Container } from "./styles";

export function StationDetails() {
  return (
    <Container>
      <HeaderDefault title="Detalhes da estação" />
      <Sidebar />
      <Main>
        <StationDisplay />
      </Main>
      <Footer></Footer>
    </Container>
  );
}
