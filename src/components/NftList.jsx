import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/image-1.jpeg';
import image2 from '../assets/image-2.jpeg';
import image3 from '../assets/image-3.jpeg';
import image4 from '../assets/image-4.png';
import { NFTImage, PriceBox } from "./styles";

const stockImages = [
  image1, image2, image3
];

export const ProductCard = ({ image, price, time, onClick }) => (
  <div style={{ display: "inline-block", width: '100%', padding: '1px' }} onClick={onClick}>
    <NFTImage src={image} alt="product" />
    <PriceBox>
    <div style={{display: 'flex'}}> 
        <img src={image4} alt="eth" height={'20px'} width={'20px'} style={{backgroundColor: 'transparent'}}/>
        <span>{price.toFixed(2)}</span>
    </div>
    <div style={{color: 'grey'}}>{time.toLocaleTimeString()}</div>
    </PriceBox>
  </div>
);

const NftList = () => {
    const products = React.useMemo(() => 
    Array.from({ length: 50 }).map(() => ({
      image: stockImages[Math.floor(Math.random() * stockImages.length)],
      price: Math.random() * 1.5,
      time: new Date() 
    }))
  , []);

    useEffect(() => {
        const interval = setInterval(() => {
          products.forEach((product, index) => {
            products[index].time = new Date(product.time.getTime() + 1000);
          });
        }, 1000);
        return () => clearInterval(interval);
      }, [products]);

      const navigate = useNavigate();
  
    return (
      <div style={{marginTop: '10px'}}>
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} price={product.price} time={product.time} onClick={()=> navigate()} />
        ))}
      </div>
    );
  };
  
export default NftList;