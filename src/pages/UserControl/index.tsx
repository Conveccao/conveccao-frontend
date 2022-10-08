import { useState, useEffect } from "react";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Box,
} from "@mui/material";
import { Main, Table, TableTH, TableTD, TableTDButton } from "./styles";

export function UserControl() {
  const [isLoading, setIsLoading] = useState(false);
  const [nivelUsu, setNivelUsu] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNivelUsu(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderDefault title="Usuários cadastrados" />
      <Sidebar />
      <Main>
        <Table>
          <thead>
            <tr>
              <TableTH>Nome</TableTH>
              <TableTH>Email</TableTH>
              <TableTH>Nível de acesso</TableTH>
              <TableTH>Trocar nível de acesso</TableTH>
            </tr>
          </thead>

          <tbody>
            <tr>
              <TableTD>Vinicius Buarque</TableTD>
              <TableTD>vinicius@gmail.com</TableTD>
              <TableTD>Usuário comum</TableTD>
              <TableTDButton>
                <Box sx={{ minWidth: 80 }}>
                  <FormControl sx={{ minWidth: 250 }}>
                    <Select
                      value={nivelUsu}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Nível de acesso</em>;
                        }
                        return selected;
                        }}
                    >
                      <MenuItem value="Administrador">Administrador</MenuItem>
                      <MenuItem value="Usuário Comum">Usuário Comum</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </TableTDButton>
            </tr>
          </tbody>
        </Table>
      </Main>
    </>
  );
}
