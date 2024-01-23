import NextLink from 'next/link';
import { Flex, Container, useColorModeValue, css } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const HeaderSection = () => (
  <Flex
    flexDirection="column"
    height="100vh"
    w="100%"
    bgImage="url('/monaco-bg.jpg')" // Replace 'your_image_url' with the actual URL
    bgSize="cover"
    css={{
      backdropFilter: 'blur(10px)',
      animation: `${zoomIn} 10s ease-in-out infinite alternate`, // Animation applied directly
    }}
    zIndex={50}
    display="flex"
    position="relative"
    justifyContent="center" // Center the content horizontally
    alignItems="center" // Center the content vertically
    marginBottom="100px"
    padding="50px" // Adjust the padding as needed
  >
    <Container
      maxW="full"
      fontSize={30}
      textAlign="center" // Center the text
      marginBottom="10px" // Add some space below the title
    >
      MYELEC
    </Container>

    {/* Line under the title */}
    <Container
      maxW="full"
      fontSize={24}
      textAlign="center" // Center the text
      marginTop="20px" // Add some space above the text
    >
      Votre Partenaire en Électricité dans l’Univers du Luxe
      <br />
      TRAVAUX D’INSTALLATION ET DE RENOVATION ELECTRIQUE
    </Container>
  </Flex>
);

// Define the keyframes directly in the same file
const zoomIn = css`
  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;
