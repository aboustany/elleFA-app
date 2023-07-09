import React, { createContext, useState } from "react";

type DailyLogContextType = {
  logs: any;
  updateLogs: (log: any) => void;
  dailyLog: any;
  setDailyLog: (log: any) => void;
  dailyLogId: String;
  setDailyLogId: (log: String) => void;
};

export const DailyLogContext = createContext<DailyLogContextType>({
  logs: null,
  updateLogs: () => {},
  dailyLog: null,
  setDailyLog: () => {},
  dailyLogId: null,
  setDailyLogId: () => {},
});
