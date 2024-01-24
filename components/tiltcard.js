import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 4, text: 'Card 4' },
];

const calculateTilt = (event) => {
  const boundingBox = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - boundingBox.left - boundingBox.width / 2;
  const offsetY = event.clientY - boundingBox.top - boundingBox.height / 2;
  const maxX = boundingBox.width / 2;
  const maxY = boundingBox.height / 2;
  const tiltX = (offsetY / maxY) * 10;
  const tiltY = -(offsetX / maxX) * 10;

  return { tiltX, tiltY };
};

const TiltingCards = () => {
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {cards.map((card) => (
        <TiltingCard
          key={card.id}
          text={card.text}
          tilt={tilt}
          onMove={(event) => setTilt(calculateTilt(event, card))}
        />
      ))}
    </div>
  );
};

const cardStyle = {
  width: '150px',
  height: '200px',
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
};

const TiltingCard = ({ text, onMove,tilt }) => {
  return (
    <motion.div
      style={{ ...cardStyle, transform: `rotateX(${tilt.tiltX}deg) rotateY(${tilt.tiltY}deg)` }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseMove={onMove}
    >
      {text}
    </motion.div>
  );
};

export default TiltingCards;
