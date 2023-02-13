import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cryptocoin from '../pages/Cryptocoin';
import Homepage from '../pages/Homepage';
import { ProductCard } from './NftList';


const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/cryptocoin/:id' element={<Cryptocoin />} />
            <Route exact path='/nft/:id' element={<ProductCard />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes