import React, { useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuiSommesNous = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const quiSommesNous = document.querySelector(".qui-sommes-nous");

    gsap.to(quiSommesNous, {
      autoAlpha: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: quiSommesNous,
        start: "top 90%", // Adjusted start position
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Box className="qui-sommes-nous" textAlign="center" mt={20}>
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" fontFamily="Montserrat">
        QUI SOMME NOUS ?
      </Text>
    </Box>
  );
};

const Point = ({ title, text, imageSrc, isLeft }) => {
  const pointRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const point = pointRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: point,
        start: "top center",
        end: "+=70%",
        scrub: true,
        id: `point-${title}`,
      },
    });

    tl.from(point.querySelector("img"), {
      autoAlpha: 0,
      duration: 0.5,
      x: isLeft ? -50 : 50,
    });
    tl.from(
      point.querySelector("article"),
      { autoAlpha: 0, translateY: 50 },
      0.2
    );
  }, []);

  return (
    <Flex
      ref={pointRef}
      className="point"
      height={{ base: "auto", md: "100vh" }}
      width="100%"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      padding={{ base: 4, md: 8 }}
      flexDirection={{ base: "column", md: isLeft ? "row" : "row-reverse" }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${imageSrc})`}
        backgroundSize="cover"
        backgroundPosition="center"
        opacity="0.01" // Adjusted opacity
      />
      <Flex
        flexBasis={{ base: "auto", md: "50%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          overflow="hidden"
          borderRadius="8px"
        >
          <img
            src={imageSrc}
            alt="random"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </Flex>
      <Flex
        flexBasis="50%"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        <article>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4} textAlign="center">
            {title}
          </Text>
          <Text textAlign="center">{text}</Text>
        </article>
      </Flex>
    </Flex>
  );
};

const ParallaxComponent = () => {
  return (
    <>
      <QuiSommesNous />

      <section className="philosophie">
        <div className="wrapper">
          <Point
            title="MyElec est une entreprise monégasque spécialisée en travaux d'électricité générale pour les particuliers (villas et appartements de luxe) et les professionnels (hôpitaux, magasins, bureaux, logements)."
            imageSrc="/images/logo/logo.jpg"
            isLeft
          />
          <Point
            title="Nous intervenons sur le territoire Monégasque et les Alpes Maritimes pour les marchés privés et publics."
            imageSrc="https://frenchmoments.eu/wp-content/uploads/2014/08/Monaco-by-night-@kityyaya-via-Twenty20-scaled.jpg"
          />
          <Point
            title="Avec une expérience professionnelle de plus de 10 ans dans un grand groupe, leader du marché de l'électricité, les dirigeants de MyElec ont pu offrir des solutions électriques de qualité exceptionnelle dans le secteur du luxe avec des projets allant de 2 à 10 millions d’euros de chiffres d’affaires."
            imageSrc="https://frenchmoments.eu/wp-content/uploads/2014/08/Monaco-by-night-@kityyaya-via-Twenty20-scaled.jpg"
            isLeft
          />
          <Point
            title="Un parcours engagé et passionné pour une vision d'avenir et un engagement envers la durabilité environnementale."
            imageSrc="https://frenchmoments.eu/wp-content/uploads/2014/08/Monaco-by-night-@kityyaya-via-Twenty20-scaled.jpg0"
          />
          <Point
            title="Mêlant théorie et pratique, enthousiasme et dynamisme, une alliance des savoir-faire permettant de se projeter vers une société humaine et pérenne."
            imageSrc="https://frenchmoments.eu/wp-content/uploads/2014/08/Monaco-by-night-@kityyaya-via-Twenty20-scaled.jpg"
            isLeft
          />
        </div>
      </section>

      <section className="vh"></section>
    </>
  );

};

export default ParallaxComponent;
