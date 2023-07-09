import React, { useState } from "react";
import { DailyLogContext } from "./DailyLogContext";

export const DailyLogProvider = ({ children }) => {
  const [logs, setLogs] = useState({});
  const [dailyLog, setDailyLog] = useState(null);
  const [dailyLogId, setDailyLogId] = useState(null);

  const updateLogs = (newLog: {}) => {
    setLogs((prevLogs) => ({
      ...prevLogs,
      ...newLog,
    }));
  };

  return (
    <DailyLogContext.Provider
      value={{
        logs,
        updateLogs,
        dailyLog,
        setDailyLog,
        dailyLogId,
        setDailyLogId,
      }}
    >
      {children}
    </DailyLogContext.Provider>
  );
};
