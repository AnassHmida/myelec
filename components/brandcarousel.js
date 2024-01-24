import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';


const brands = [
  '/images/logo/3.png',
  '/images/logo/4.png',
  '/images/logo/6.png',
  '/images/logo/7.png',
  '/images/logo/8.png',
  '/images/logo/9.png',
  '/images/logo/10.png',
  '/images/logo/11.png',
  '/images/logo/12.png',
  '/images/logo/13.png',
];

// Duplicate the brands array to make it infinite
const infiniteBrands = [...brands, ...brands];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * ${brands.length}));
  }
`;

const BrandCarousel = () => {
  const { colorMode } = useColorMode();
console.log("color mode ==== ",colorMode)
  return (
    <Box
      className="slider"
      height="150px"
      margin="auto"
      overflow="hidden"
      position="relative"
      width="100%"
    >
      <Box
        className="slide-track"
        animation={`${scroll} 40s linear infinite`}
        display="flex"
        width={`calc(250px * ${infiniteBrands.length})`}
        position="absolute"
      >
        {infiniteBrands.map((brand, index) => (
          <Box
            key={index}
            className="slide"
            height="150px"
            width="250px"
            position="relative"
            overflow="hidden"
          >
            <img
              src={brand}
              alt={`Brand ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'relative',
                filter: colorMode === 'light' ?  'invert(1) brightness(200%)' : 'none' ,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandCarousel;
