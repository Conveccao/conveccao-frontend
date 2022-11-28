import { SetStateAction, useEffect, useMemo, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import axios from "axios";
import { URI } from "../../integration/uri";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Select, MenuItem, FormControl, Box } from "@mui/material";
import { Main, Table, TableTH, TableTD, TableTDButton, SectionSearch, TextSearch } from "./styles";
import UserHandlers from "../../integration/handlers/userHandlers";

export function UserControl({ list = [] }) {

  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);
  const userHandler = new UserHandlers();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersModerators, setUsersModerators]: any[] = useState([]);

  const handleUpdateUser = async (id: number, role: string) => {
    try {
      await userHandler.handleUpdateUser(id, role);
    } catch (error) {
      console.log(error)
    }
  }

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
    if (!autenticado || SessionController.getUserRole() != 'admin') {
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
    const res = await axios.get(URI.USERS);
    return res.data;
  };

  const getAllUsers = async () => {
    const allUsers: [] = await handleGetAll();
    const userList = getUsersModerators(allUsers);
    // setUsers(allUsers); --> todos os usuários da aplicação, incluindo os admins
    setUsersModerators(userList);
  };

  const getUsersModerators =  (userList: []) => {
    const tempUserList: any[] = [];
    userList.forEach(user => {
      if(user['role'] != 'admin' && !userExistsInList(usersModerators, user['id'])) {
        tempUserList.push(user)
      }
    })
    return tempUserList;
  }

  const userExistsInList = (userList: any[], userId: number) => {
    userList.forEach((user: any) => {
      if(user['id'] == userId) return true
    })
    return false
  }

  useEffect(() => {
    getAllUsers();
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [getAllUsers]);


  // BUSCAR ESTAÇÕES POR NOME
  const [busca, setBusca] = useState('')

  const usuariosFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return usersModerators.filter((user: any) =>
        user.email.toLowerCase().includes(lowerBusca))
  }, [busca, users])

  // ORDENAR CHAMADOS POR TITULO
  const [order, setOrder] = useState(1)
  const [colunmOrder, setColunmOrder] = useState('title')

  const handleOrder = (fieldName: SetStateAction<string>) => {
      setOrder(-order)
      setColunmOrder(fieldName)
  }

  usuariosFiltrados.sort((a, b) => {
      return a[colunmOrder] < b[colunmOrder] ? -order : order;
  })

  return (
    <>
      <HeaderDefault title="Usuários Cadastrados" />
      <Sidebar />
      <Main>

        <SectionSearch>
          <TextSearch  
            placeholder="Procure pelo email do usuário"
            type="text"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)} 
          />
        </SectionSearch>

        <Table>
          <thead>
            <tr>
              <TableTH onClick={() => handleOrder('name')} >Nome ⇵</TableTH>
              <TableTH onClick={() => handleOrder('email')} >Email ⇵</TableTH>
              <TableTH onClick={() => handleOrder('role') }>Nível de acesso ⇵</TableTH>
              <TableTH>Trocar nível de acesso</TableTH>
            </tr>
          </thead>

          <tbody>
            {usuariosFiltrados.map((user: any) => (
              <tr key={user.id} >
                <TableTD>{user.name}</TableTD>
                <TableTD>{user.email}</TableTD>
                <TableTD>{user.role}</TableTD>
                <TableTDButton>
                  <Box sx={{ minWidth: 80 }}>
                    <FormControl sx={{ minWidth: 250 }}>
                      <Select
                        onChange={(e) => handleUpdateUser(user.id, e.target.value)}
                        value=''
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Escolha o nível de acesso</em>;
                          }
                          return selected;
                        }}
                      >
                        <MenuItem value="admin">Administrador</MenuItem>
                        <MenuItem value="moderator">Moderador</MenuItem>
                        <MenuItem value="user">Usuário Comum</MenuItem>
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