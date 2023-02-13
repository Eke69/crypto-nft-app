import React, {useCallback, useEffect, useState} from 'react';
import { VictoryChart, VictoryAxis, VictoryCandlestick } from 'victory';
import { HistoricalChart } from '../config/api';
import axios from "axios";
import ChartButtons from './ChartButtons';

const CandleStickChart = ({coin}) => {
    const [ historicalData, setHistoricalData ] = useState();
    const [ days, setDays ] = useState(1);
    const [_, setFlag] = useState(false);
      
      const formatData = (data) => {
        let previousClose = data[0][1];
        return data.map((d, i) => {
          let open = previousClose + (Math.random() * 5000 - 2500);
          let close;
          if (i === data.length - 1) {
            close = open + (Math.random() * 5000 - 2500);
          } else {
            close = data[i + 1][1] + (Math.random() * 5000 - 2500);
          }
          previousClose = close;
          const high = Math.max(open, close) + Math.random() * 5000;
          const low = Math.min(open, close) - Math.random() * 5000;
          return { x: new Date(d[0]), open, close, high, low };
        });
      };

    const fetchHistoricData = useCallback(async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, 'USD'));
        setFlag(true);
        setHistoricalData(data.prices);
      }, [coin.id, days])
    
      useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [days, fetchHistoricData]);
      const chartData = historicalData ? formatData(historicalData): [];
  
  return (
    <div>
        <ChartButtons setDays={setDays} setFlag={setFlag} days={days} />
         <VictoryChart
    width={350}
        height={300}
    responsive={true}
      padding={{ left: 20, right: 20, top: 20, bottom: 20 }}
      domainPadding={{ x: days < 30 ? -500 : -800}}
    >
        <VictoryAxis style={{ axis: {stroke: "none"} }} tickFormat={() => ''} />
      <VictoryCandlestick
        candleColors={{ positive: "#bae299", negative: "#5b55c0" }}
        data={chartData}
        candleRatio={days < 30 ? 0.8 : 0.5}
        candleWidth={days < 30 ? 3 : 2}
        x="x"
        open="open"
        close="close"
        high="high"
        low="low"
        
      />
    </VictoryChart>
    </div>
  )
}

export default CandleStickChart;
