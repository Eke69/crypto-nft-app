import { useEffect, useRef, useState } from 'react';
import * as Icons from 'cryptocons';
import { Cryptocon } from 'cryptocons';
import { handleInvertSvgColors, isStringInArray } from '../../utils/handleInvertSvgColors';
import { StyledBadge } from './styles';

export const CoinLogo = ({coin})=> {
    const coinLogo = useRef(null);
    const [ shouldInvert, setShouldInvert ] = useState(false);
    const coinName = coin.name === 'BNB' ? 'Binance' : `${coin.name}`;
    const excludeFromStyling = isStringInArray(coin.name, ['Ethereum', 'Stellar']);
    
    useEffect(()=> {
        if (coinLogo.current && !excludeFromStyling) handleInvertSvgColors(coinLogo.current, setShouldInvert);
    }, [shouldInvert, coin.name, excludeFromStyling])
    return (
        <>
            <StyledBadge>
                {Icons[coinName] ? 
                <Cryptocon icon={coinName} size={30} filter={`grayscale(100%) contrast(100%) ${shouldInvert ? 'invert(100%)': ''}` } ref={coinLogo}/> 
                :
                (
                    <img
                        src={coin?.image}
                        alt={coin.name}
                        height={"30"}
                        width={'30'}
                    />
                )

            }
                </StyledBadge>
  </>
  )
}