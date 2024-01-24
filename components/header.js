import { Flex, Container, Heading, css } from '@chakra-ui/react';
import Section from './section';

export const HeaderSection = () => (
  <Flex
    flexDirection="column"
    height="100vh"
    w="100%"
    bgImage="url('/monaco-bg.jpg')"
    bgSize="cover"
    css={{
      backdropFilter: 'blur(10px)',
      animation: `${zoomIn} 10s ease-in-out infinite alternate`,
    }}
    zIndex={50}
    display="flex"
    position="relative"
    paddingTop={'14%'}
    paddingLeft={'4%'}
  >
    <Section delay={0.2}>
      <Container maxW="full" textAlign="left">
        <Heading as="h1" fontSize={30} fontWeight="bold" fontFamily="'Montserrat', sans-serif">
          MYELEC
        </Heading>
      </Container>
    </Section>
    {/* Line under the title */}
    <Section delay={0.4}>
      <Container maxW="full" textAlign="left" marginTop="20px">
        <Heading as="h2" fontSize={24} fontWeight="normal" fontFamily="'Montserrat', sans-serif">
          Votre Partenaire en Électricité dans l’Univers du Luxe
          <br />
          Travaux d’installation et de rénovation électrique.
        </Heading>
      </Container>
    </Section>
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