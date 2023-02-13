import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { motion } from 'framer-motion';
import { slideInRight } from '../styles/animation';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
import CandleStickChart from '../components/CandleStickChart';
import { Box, Button } from '@mui/material';
import { StickyButtonWrapper, StyledHeader, StyledSpan } from '../components/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CoinInfo from '../components/CoinInfo';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Cryptocoin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const fetchCoin = useCallback(async()=> {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }, [id]);

  useEffect(()=> {
    fetchCoin();
  }, [id, fetchCoin]);

  const navigate = useNavigate();
  
  if (!coin) return null;
  return (
    <motion.div
    variants={slideInRight}
      initial={'initial'}
      animate={'enter'}
      exit={'exit'}
      style={{height: '100vh', overflowY: 'hidden', position: 'relative'}}
    >
      <div>
        <StyledHeader>
          <Button onClick={()=> navigate('/')} variant='text' sx={{color: 'white'}}>
          <ArrowBackIcon fontSize={'large'}/>
          </Button>
          <Box sx={{display: 'flex', flex: 1, justifyContent: 'center', marginLeft: '-20px'}}>
            <img
            src={coin?.image.large}
            alt={coin.name}
            height={"30"}
            width={'30'} 
            />
            <StyledSpan sx={{padding: 0, marginLeft: '3px'}}>{coin.name}</StyledSpan>
            </Box>
        </StyledHeader>
        <CoinInfo coin={coin}/>
        <CandleStickChart coin={coin}/>
        <StickyButtonWrapper>
        <Button variant='contained' size='large' >
          sell 
          <ArrowOutwardIcon />
          </Button>
        <Button variant='contained' size='large' >
          buy
          <SouthEastIcon />
          </Button>
        </StickyButtonWrapper>
      </div>
    </motion.div>
  )
}

export default Cryptocoin