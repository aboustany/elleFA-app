import React, { useState } from "react";
import { SymptomLogContext } from "./SymptomLogContext";

export const SymptomLogProvider = ({ children }) => {
  const [logs, setLogs] = useState({});

  const updateLogs = (newLog) => {
    setLogs((prevLogs) => ({
      ...prevLogs,
      ...newLog,
    }));
  };

  return (
    <SymptomLogContext.Provider value={{ logs, updateLogs }}>
      {children}
    </SymptomLogContext.Provider>
  );
};
