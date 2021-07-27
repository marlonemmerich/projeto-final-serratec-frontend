import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

  const [paciente, setPaciente] = useState({});

  return (
    <GlobalContext.Provider value={{paciente, setPaciente}}>
      { children }
    </GlobalContext.Provider>
  )
}