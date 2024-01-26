import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Card = ({ dataImage, title, description }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(0.5);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - e.currentTarget.offsetLeft - e.currentTarget.offsetWidth / 2);
    setMouseY(e.pageY - e.currentTarget.offsetTop - e.currentTarget.offsetHeight / 2);
  };

  console.log(transitionDuration)

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTransitionDuration(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransitionDuration(1.5);
  };

  return (
    <Box
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      mb={{ base: '4', md: '0' }}
      flex={{ base: '0 0 100%', md: '0 0 50%', lg: '0 0 50%' }}
      mx={{ base: 'auto', md: '4' }}
    >
      <Box
        className="card"
        position="relative"
        width="100%"
        height="0"
        paddingBottom="66.67%"
        backgroundColor="#333"
        overflow="hidden"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px"
        transition="1s cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        mx={{ base: 'auto', md: '4' }}
        mt="4" // Margin top
      >
        <Box
          className="card-bg"
          style={{
            opacity: 0.5,
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100%',
            height: '100%',
            padding: '20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transition: '1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
            pointerEvents: 'none',
          }}
        ></Box>
        <motion.div
          className="card-bg"
          style={{
            opacity: 0.5,
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: '20px',
            backgroundImage: `url(${dataImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            scale: isHovered ? 1.2 : 1.2,
            translateX: isHovered ? mouseX * 0.03 : 0, // Adjusted tilting effect
            translateY: isHovered ? mouseY * -0.03 : 0, // Adjusted tilting effect
            transition: 'transform 0.5s', // Added transition for tilting effect
            pointerEvents: 'none',
          }}
          initial={{ scale: 1.2, translateX: mouseX * 0.03, translateY: mouseY * -0.03 }}
          exit={{ scale: 1.2, translateX: mouseX * 0.03, translateY: mouseY * -0.03 }}
        ></motion.div>
        <motion.div
          className="card-info"
          initial={{ y: '100%' }}
          animate={{ y: isHovered ? '0%' : '100%' }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          padding="20px"
          position="absolute"
          bottom="0"
          color="#fff"
        >
          <motion.h2
            style={{
              margin: '30px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'white'
            }}
            initial={{ y: '100%' }}
            animate={{ y: isHovered ? '0%' : '100%' }}
          >
            {title}
          </motion.h2>
          <motion.p
            style={{ margin: '30px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Card;
