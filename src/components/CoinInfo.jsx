import { Box } from '@mui/material';
import React from 'react';
import { StyledSpan } from './styles';
import { theme } from '../utils/theme';

const CoinInfo = ({coin}) => {
    const currentPrice = coin.market_data.current_price.usd.toFixed(2);
    const percentage = coin.market_data.price_change_percentage_24h?.toFixed(2);
    const priceChange = coin.market_data.price_change_24h?.toFixed(2);
    const profit = coin?.market_data.price_change_percentage_24h >= 0;
    const smallSpanStyle = {
        color: profit ? theme.palette.secondary.main : theme.palette.neutral.dark,
        padding: '4px',
        alignItems: 'center',
        fontSize: '16px'
    }
  return (
    <Box sx={{ display: 'flex'}}>
        <StyledSpan sx={{fontSize: '2.5rem', paddingTop: 0, paddingRight: 0}}>$ {currentPrice} </StyledSpan>
        <>
        <StyledSpan sx={smallSpanStyle}>{profit ? '+' : ''}{priceChange}</StyledSpan>
        <StyledSpan sx={smallSpanStyle}>{`(${percentage}%)`}</StyledSpan>
        </>
    </Box>
  )
}

export default CoinInfo