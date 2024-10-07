import React from 'react';
import { Select } from 'antd';
import { useMonthContext } from '../../contexts/Month'; // Import the custom hook


const MonthSelect: React.FC = ({}) => {
  const { month, setMonth} = useMonthContext();

  

  const handleChange = (value: string) => {
    setMonth(value);
  };

  return (
    <Select
        //   defaultValue={month}
          style={{ width: 120}}
          onChange={handleChange}
          value={month}
          options={[
            { value: 'january', label: 'january' },
            { value: 'february', label: 'february' },
            { value: 'march', label: 'march' },
            { value: 'april', label: 'april' },
            { value: 'may', label: 'may' },
            { value: 'june', label: 'june' },
            { value: 'july', label: 'july' },
            { value: 'august', label: 'august' },
            { value: 'september', label: 'september' },
            { value: 'october', label: 'october' },
            { value: 'november', label: 'november' },
            { value: 'december', label: 'december' },        
          ]}
    />
  );
};

export default MonthSelect;
