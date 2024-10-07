// context/ChartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type ChartContextType = {
  month: string;
  setMonth: (period: string) => void;
};

const MonthContext = createContext<ChartContextType | undefined>(undefined);

export const MonthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [month, setMonth] = useState<string>('january'); 

  return (
    <MonthContext.Provider value={{month, setMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export const useMonthContext = () => {
  const context = useContext(MonthContext);
  if (context === undefined) {
    throw new Error('useChartContext must be used within a ChartProvider');
  }
  return context;
};
