import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

export const BalanceHeader = styled(Box)`
  margin-top: 10%;
  display: flex;
  padding: 0 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceDiv = styled(Box)`
  color: white;
  font-size: 25px;
  font-weight: bold;
  & p {
    color: grey;
    font-size: 16px;
  }
`;

export const NFTImage = styled('img')`
  height: 40vh;
  width: 100%;
  padding: 1px;
  border-radius: 30px;
`;

export const PriceBox = styled('div')`
width: 100%;
padding: 10px;
border-radius: 20px;
color: white;
display: flex;
justify-content: space-between;
background-color: "#2d2d35"
`;

export const StyledButtonBase = styled(Button)(({theme})=> ({
    textTransform: 'lowercase !important',
    borderRadius: '20px',
    '& span': {
      letterSpacing: '0.1em',
      fontWeight: 600,
      fontSize: '20px'
    }  
  }));

export const StyledChartButton = styled(StyledButtonBase)`
    border-radius: 15px; 
    padding: 10px; 
    font-size: 14px;
    font-weight: bold; 
    margin-left: 2px;
    background-color: ${props=> props.selected ? 'white !important' : ''};
    color: ${props=> props.selected ? 'black !important' : ''}
`;

export const ScrollableContainer = styled(Box)`
  overflow-x: auto;
`;

export const StyledHeader = styled(Box)`
  margin-top: 10%;
  display: flex;
  padding: 20px;
 justify-content: space-between;
`;

export const StyledSpan = styled('span')`
    font-size: 20px;
    display: flex;
    text-transform: lowercase;
    padding: 20px;
`;

export const StickyButtonWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
    margin-bottom: 5%;
    text-align: center;
    & .MuiButton-root.MuiButton-root {
        font-size: 20px;
    padding: 15px 50px;
    border-radius: 25px;
    margin: 0 4px;
    text-transform: lowercase;
    font-weight: bold;
    :nth-of-type(1) {
        background-color: #5b55c0;
        color: #fff;
    }
    :nth-of-type(2) {
        background-color: #bae299;
        color: black;
    }

    }
`;