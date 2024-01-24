// Import Montserrat Bold from Google Fonts
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Card = ({ dataImage, title, description }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(0.5); // Set the initial duration

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - e.currentTarget.offsetLeft - e.currentTarget.offsetWidth / 2);
    setMouseY(e.pageY - e.currentTarget.offsetTop - e.currentTarget.offsetHeight / 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTransitionDuration(0); // Faster transition on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransitionDuration(1.5); // Slower transition on exit
  };

  return (
    <Box
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        margin: '10px',
        transform: `perspective(800px) rotateY(${isHovered ? mouseX * 0.03 : 0}deg) rotateX(${
          isHovered ? mouseY * -0.03 : 0
        }deg)`,
        transition: `transform ${transitionDuration}s ease-in-out`, // Use transition property with dynamic duration
      }}
    >
      <Box
        className="card"
        style={{
          position: 'relative',
          flex: '0 0 500px',
          width: '500px',
          height: '320px',
          backgroundColor: '#333',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow:
            'rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px',
          transition: '1s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        }}
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
            scale: isHovered ? 1.2 : 1.2, // Zoom effect on hover
            translateX: isHovered ? mouseX * 0.1 : 0,
            translateY: isHovered ? mouseY * 0.1 : 0,
            transition: 'transform 0s', // Set transition duration to 0 for instant motion
            pointerEvents: 'none',
          }}
          initial={{ scale: 1.2, translateX: mouseX * 0.1, translateY: mouseY * 0.1 }} // Initial position when entering
          exit={{ scale: 1.2, translateX: mouseX * 0.1, translateY: mouseY * 0.1 }} // Exit position when leaving
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
              fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font
              fontWeight: 'bold', // Apply bold style
              fontSize: '20px'
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