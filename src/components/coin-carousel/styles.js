import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

export const StyledButton = styled(Button)(({theme})=> ({
    textTransform: 'lowercase !important',
    borderRadius: '20px',
    '& span': {
      marginLeft: '0.5rem',
      letterSpacing: '0.1em',
      fontWeight: 600,
      fontSize: '20px'
    },
    '& img': {
        borderRadius: '100%',
        filter: 'contrast(200%) brightness(200%) grayscale(100%)'
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      '& span': {
        color: theme.palette.primary.main
      },
      '& div': {
        backgroundColor: 'black',
        '& svg, & img': {
          filter: 'none',
        },
        '& svg path, & img': { 
          filter: 'grayscale(1) invert(94%) sepia(11%) saturate(1103%) hue-rotate(36deg) brightness(100%) contrast(89%)',
        }
      }
    },
  }));
  
  export const StyledBadge = styled(Box)`
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background: white;
      display: inline-flex;
      justify-content: center;
      align-items: center;
  `;
  
  export const StyledCarouselContainer = styled(Box)`
   li.alice-carousel__stage-item {
      margin: 0 1px;
   }
  `;