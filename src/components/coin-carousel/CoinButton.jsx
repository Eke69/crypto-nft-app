import React from 'react';
import { CoinLogo } from './CoinLogo';
import { StyledButton  } from './styles';

const CoinButton = ({coin, onClick}) => {
        return (
        <StyledButton variant='contained' onClick={()=> onClick(coin.id)}>
            <CoinLogo coin={coin}/>
            <span>{coin.name}</span>
        </StyledButton>
        )
};

export default CoinButton;