import React, { useEffect, useRef } from 'react';
import { Flex, Container, Heading } from '@chakra-ui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from './section';
import Paragraph from './paragraph';

gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
  const textSectionRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    // Ensure ScrollTrigger is used for scroll-based animations
    ScrollTrigger.defaults({ markers: true });

    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, x: '-100%' },
      {
        opacity: 1,
        x: 0,
        duration: 1, // Adjust the duration for smoother animation
        ease: 'power1.in',
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: 'top center',
          end: 'top 30%',
          scrub: true,
          onUpdate: (self) => {
            // Check if the text is in the middle of the slide
            if (self.progress > 0.5) {
              // Add your additional animation or effect here
              // For example, you can change the color of the text
              gsap.to(textSectionRef.current, { color: 'red' });
            }
          },
        },
      }
    );
  }, []);

  return (
    <Flex
      flexDirection="row"
      height="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
    >
      {/* Left Text Section */}
      <div
        ref={textSectionRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 4%', // Adjust padding as needed
        }}
      >
        <Container maxW="full" textAlign="left">
        <Section delay={0.1} margin>
        <Heading as="h3" variant="section-title">
          L&apos;entreprise
        </Heading>
        <Paragraph>
        MyElec est une entreprise monégasque spécialisée en travaux d&apos;électricité générale pour les particuliers (villas et appartements de luxe) et les professionnels (hôpitaux, magasins, bureaux, logements).
Nous intervenons sur le territoire Monégasque et les Alpes Maritimes pour les marchés privés et publics.
Avec une expérience professionnelle de plus de 10 ans dans un grand groupe, leader du marché de l&apos;électricité, les dirigeants de MyElec ont pu offrir des solutions électriques de qualité exceptionnelle dans le secteur du luxe avec des projets allant de 2 à 10 millions d’euros de chiffres d’affaires
Un parcours engagé et passionné pour une vision d&apos;avenir et un engagement envers la durabilité environnementale.
Mêlant théorie et pratique, enthousiasme et dynamisme, une alliance des savoir-faire permettant de se projeter vers une société humaine et pérenne.{' '}
         
        
        </Paragraph>

       
       
      </Section>
        </Container>
        {/* Additional text content goes here */}
      </div>

      {/* Right Image Section */}
      <div
        ref={rightImageRef}
        style={{
          backgroundImage: 'url("/.png")',
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
        }}
      />
    </Flex>
  );
};

export default CompanySection;