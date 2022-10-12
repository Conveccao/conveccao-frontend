import { useState, useEffect } from "react";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import axios from "axios";
import { URI } from "../../integration/uri";

import {
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import { Main, Table, TableTH, TableTD, TableTDButton } from "./styles";

export function UserControl() {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const handleGetAll = async () => {
    const res = await axios.get(URI.USERS);
    return res.data;
  };

  const getAllUsers = async () => {
    const allUsers: [] = await handleGetAll();
    setUsers(allUsers);
  };

  useEffect(() => {
    getAllUsers();
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [getAllUsers]);

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
            {users.map((user: any) => (
              <tr key={user.id} >
                <TableTD>{user.name}</TableTD>
                <TableTD>{user.email}</TableTD>
                <TableTD>{user.role}</TableTD>
                <TableTDButton>
                  <Box sx={{ minWidth: 80 }}>
                    <FormControl sx={{ minWidth: 250 }}>
                      <Select
                        value='Escolha o nível de acesso'
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
            ))}
          </tbody>
        </Table>
      </Main>
    </>
  );
}
