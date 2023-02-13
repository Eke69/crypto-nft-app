import React from 'react';
import Balance from '../components/Balance';
import CoinCarousel from '../components/coin-carousel/CoinCarousel';
import { motion } from 'framer-motion';
import { slideInRight } from '../styles/animation';
import NftList from '../components/NftList';

const Homepage = () => {
  return (
    <motion.div
    variants={slideInRight}
    initial={'initial'}
    animate={'enter'}
    exit={'exit'}
    >
        <Balance />
        <CoinCarousel />
        <NftList/>
    </motion.div>
  )
}

export default Homepage