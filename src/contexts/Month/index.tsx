// context/ChartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type ChartContextType = {
  period: string;
  setPeriod: (period: string) => void;
};

const ChartContext = createContext<ChartContextType | undefined>(undefined);

export const ChartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [period, setPeriod] = useState<string>('year'); // Default value

  return (
    <ChartContext.Provider value={{ period, setPeriod }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (context === undefined) {
    throw new Error('useChartContext must be used within a ChartProvider');
  }
  return context;
};
