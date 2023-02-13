import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { StickyButtonWrapper } from '../components/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImgStyle = {
    height: '50vh',
  width: '100%',
  padding: '1px',
  borderRadius: '30px',
}

const ProductPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state;
  return (
    <div style={{height: '100vh', maxHeight: '100vh', overflowY: 'hidden', position: 'relative'}}>
      <img src={product.image} alt="product" style={ImgStyle}/>
      <Button onClick={()=> navigate('/')} variant='text' sx={{color: 'white', position: 'absolute', top: '30px', left: '0px'}}>
          <ArrowBackIcon fontSize={'large'}/>
    </Button>
      <div>Price: ${product.price.toFixed(2)}</div>
      <div>Time: {product.time.toLocaleString()}</div>
      <StickyButtonWrapper >
        <Button variant='contained' size='large' sx = {{width: '95%', backgroundColor: '#bae299 !important', color: 'black !important'}} >
          place bid
        <ArrowForwardIcon/>
          </Button>
    </StickyButtonWrapper>
    </div>
  )
}

export default ProductPage