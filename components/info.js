import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Box,
  Text,
} from '@chakra-ui/react';

gsap.registerPlugin(ScrollTrigger);

const FadingParagraphs = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    gsap.from(paragraphsRef.current, {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphsRef.current[0],
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

    gsap.from(paragraphsRef.current, {
      opacity: 0,
      x: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphsRef.current[0],
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <Box px={4} py={10}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Box
          key={index}
          ref={(el) => (paragraphsRef.current[index - 1] = el)}
          mb={6}
          bgColor="gray.100"
          borderRadius="md"
          boxShadow="md"
          w="100%"
          maxW="600px"
          p={4}
        >
          <Text fontSize="lg" textAlign="justify">
            Your fading paragraph {index} content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default FadingParagraphs;