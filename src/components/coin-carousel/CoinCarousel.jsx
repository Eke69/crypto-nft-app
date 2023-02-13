import React, { useEffect, useState } from 'react';
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import CoinButton from './CoinButton';
import Carousel from './Carousel';
import { splitArrayIntoTwoParts } from '../../utils/splitArrayInTwo';
import { useNavigate } from 'react-router-dom';

const CoinCarousel = () => {
    const [coinData, setCoinData] = useState([]);
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins('USD'));
        setCoinData(data);
    }
    useEffect(()=> {
        fetchTrendingCoins();
    }, []);

    const navigate = useNavigate();

    const onButtonClick =(coinId)=> {
      navigate(`/cryptocoin/${coinId}`);
    };

    const getCoinButtonRow = (coinRow) => {
      return (
           coinRow.map((coin, index) => {
            return (
              <CoinButton key={index} coin={coin} onClick={onButtonClick}/>
            )
            }
            )
      )
    };

    if (!coinData.length) {
      return null;
    }else {
      const carouselRows = splitArrayIntoTwoParts(coinData);
  return (
   <>
   <Carousel items={getCoinButtonRow(carouselRows[0])} direction={'ltr'} />
   <Carousel items={getCoinButtonRow(carouselRows[1])} direction={'rtl'} />
  </>
  )
    }
}

export default CoinCarousel
