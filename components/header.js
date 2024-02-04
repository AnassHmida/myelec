import React from "react";
import { Flex, Container, Heading, Card, useColorMode } from '@chakra-ui/react';
import Section from './section';

export const HeaderSection = () => {
  const { colorMode } = useColorMode();

  // Dynamically set the background color based on color mode
  const bgColor = colorMode === "light" ? 'rgba(240 ,231 ,219,1)' : 'rgba(32,32,35,1)';

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      w="100%"
      position="relative"
      paddingTop={['40', '40', '55']}
      overflow="hidden"
    >
      {/* Background Image */}
      <Card
        className="container"
        height="100vh"
        background={`linear-gradient(to top, ${bgColor} 0%, rgba(0,0,0,0) 0%), url("/monaco-bg.jpg") center/cover`}
        display="flex"
        flexDirection="column"

        
        margin={10}
        borderRadius="lg" // Adjust the corner radius as needed
      >
        {/* Content */}
        <Flex
          flexDirection="column"
          zIndex={3} // Set a higher zIndex for the content
          paddingTop={['50', '40', '10']}
          paddingLeft={'0%'}
        >
          <Section delay={0.2}>
            <Container maxW="full" textAlign="left">
              <Heading as="h1" fontSize={['5xl', '6xl', '8xl']} fontWeight="bold" fontFamily="'Montserrat', sans-serif" color={'white'}>
                MYELEC
              </Heading>
            </Container>
          </Section>
          {/* Line under the title */}
          <Section delay={0.4}>
            <Container maxW="full" textAlign="left">
              <Heading as="h2" fontSize={24} fontWeight="normal" fontFamily="'Montserrat', sans-serif" color={'white'}>
                Votre Partenaire en Électricité dans l’Univers du Luxe
                <br />
                Travaux d’installation et de rénovation électrique.
              </Heading>
            </Container>
          </Section>
        </Flex>
      </Card>
    </Flex>
  );
};
