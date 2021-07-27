import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

  const [paciente, setPaciente] = useState({});
  const [colaborador, setColaborador] = useState({});
  const [master, setMaster] = useState({});

  return (
    <GlobalContext.Provider value={{paciente, setPaciente, colaborador, setColaborador, master, setMaster}}>
      { children }
    </GlobalContext.Provider>
  )
}