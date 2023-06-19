import React, { createContext } from "react";

type SymptomLogContextType = {
  logs: any;
  updateLogs: (log: any) => void;
};

export const SymptomLogContext = createContext<SymptomLogContextType>({
  logs: null,
  updateLogs: () => {},
});
