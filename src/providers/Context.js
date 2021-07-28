import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [paciente, setPaciente] = useState({});
  const [colaborador, setColaborador] = useState({});
  const [master, setMaster] = useState({});
  const [medico, setMedico] = useState({});
  const [procedimento, setProcedimento] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        paciente,
        setPaciente,
        colaborador,
        setColaborador,
        master,
        setMaster,
        medico,
        setMedico,
        procedimento,
        setProcedimento
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
