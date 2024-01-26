import { Flex, Container, Heading } from '@chakra-ui/react';
import Section from './section';
import { useTranslation } from 'react-i18next';

export const HeaderSection = () => {


  const {t} = useTranslation()
return(
  <Flex
    flexDirection="column"
    height="100vh"
    w="100%"
    position="relative"
    overflow="hidden"
  >
    {/* Background Image */}
    <div
      style={{
        backgroundImage: 'url("/monaco-bg.jpg")',
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        animation: 'animatedBackground 15s linear infinite alternate',
      }}
    />

    {/* Semi-Black Filter with Transparent Gradient */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
      }}
    />

    {/* Content */}
    <Flex
      flexDirection="column"
      position="relative"
      zIndex={3} // Set a higher zIndex for the content
      paddingTop={['40', '40', '100']}
      paddingLeft={'4%'}
    >
      <Section delay={0.2}>
        <Container maxW="full" textAlign="left">
          <Heading as="h1"  fontSize={['5xl', '6xl', '8xl']} fontWeight="bold" fontFamily="'Montserrat', sans-serif" color={'white'}>
           {t("title")}
          </Heading>
        </Container>
      </Section>
      {/* Line under the title */}
      <Section delay={0.4}>
        <Container maxW="full" textAlign="left">
          <Heading as="h2" fontSize={24} fontWeight="normal" fontFamily="'Montserrat', sans-serif" color={'white'}>
          {t("description")}
          </Heading>
        </Container>
      </Section>
    </Flex>
  </Flex>

);
    }

// Use the styles with emotion or add to your global CSS
