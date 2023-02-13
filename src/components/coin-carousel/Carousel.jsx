import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { StyledCarouselContainer } from './styles';

const Carousel = ({items, direction}) => {
    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };
  return (
    <StyledCarouselContainer>
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={10}
        animationDuration={10000}
        animationEasingFunction={'linear'}
        autoWidth
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        transitionTimingFunction={'linear'}
        autoPlayDirection={direction}
      />
    </StyledCarouselContainer>
  )
}

export default Carousel