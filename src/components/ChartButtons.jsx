import React from 'react';
import { timeData } from '../utils/timeData';
import { ScrollableContainer, StyledChartButton } from './styles';

const ChartButtons = ({setDays, setFlag, days}) => {
  return (
    <ScrollableContainer>
    {timeData.map((day) => (
        <StyledChartButton
          key={day.value}
          onClick={() => {setDays(day.value);
            setFlag(false);
          }}
          selected={day.value === days}
          variant='contained'
        >
          {day.label}
        </StyledChartButton>
      ))}
      </ScrollableContainer>
  )
}

export default ChartButtons