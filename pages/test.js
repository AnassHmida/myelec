import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import '../styles/file.css'
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  const content = [
    {
      image:
        "https://www.oelis.fr/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/electricité-courant-fort-disjoncteurs.jpeg.webp",
      title: "COURANT FORT/COURANT FAIBLE",
      subtitle:
        "MyElec est spécialisée dans la réalisation des projets d’électricité : courant fort, courant faible et GTB. Garantissant une installation électrique fiable et sécurisée pour tous vos besoins",
    },
    {
      image:
        "https://blog.koorsen.com/hs-fs/hubfs/Integration_of_Access_Control.jpg?width=2400&height=1600&name=Integration_of_Access_Control.jpg",
      title: "SÉCURITÉ INCENDIE CONTRÔLE D'ACCÈS ET INTRUSION",
      subtitle:
        "Votre sécurité est notre priorité ! MyElec offre des systèmes de contrôle d'accès et de détection d'intrusion et d’incendies de pointe pour une tranquillité d'esprit totale",
    },
    {
      image:
        "https://images.ctfassets.net/4cd45et68cgf/6EXykqN1R4oZJaxiuhaq8e/e64eb5191afc9cbc05baa69321cd81dd/NetflixProgressReport_1920x1080.jpg?w=2000",
      title: "ENGAGEMENT ENVIRONNEMENTAL",
      subtitle:
        "Nous nous engageons à minimiser notre empreinte carbone tout en offrant des solutions électriques haut de gamme. Nous utilisons des technologies éco-responsables et promouvons l'efficacité énergétique à chaque étape de notre travail.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/cyber-security-technology-concept-shield-with-keyhole-icon-circuit-board-personal-data_184920-705.jpg",
      title: "NOTRE DISCRÉTION, LA SÉCURITÉ DE VOS BIENS",
      subtitle:
        "Offrir un service à la hauteur des projets de nos clients, avec attention, discrétion et expertise. Une éthique professionnelle rigoureuse, faite de proximité et de discrétion. Nous mettons ainsi en œuvre tous les moyens techniques et humains pour préserver l’intégrité et la confidentialité de nos clients.",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
      
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
   
      <div ref={slider} className="contain">
       {
        content.map((item,index)=>
          <Flex
           key={index}
           className="panel"
           height="100vh"
           width="100vw" 
           justifyContent={'center'}
           paddingTop={10}
         >
       <Card
             height="90%"
             display="flex"
             flexDirection="column"
             background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.image}) center/cover`}
             margin={50}
             borderRadius="xl"
           >
         
             <Flex
                key={index}
                height="100%"
                margin={20}
                justifyContent="center"
                alignItems="center"
              >
                <Box textAlign="center">
                  <Heading
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    fontWeight="bold"
                    marginBottom={10}
                    fontFamily='Montserrat, sans-serif'
                    color={'white'}
                 
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontWeight="medium"
                       fontFamily='Montserrat, sans-serif'
                    fontSize={{ base: "1rem", md: "1.5rem" }}
                    color={'white'}
                 
                  >
                    {item.subtitle}
                  </Text>
                </Box>
              </Flex>
              </Card>
       </Flex>

        
        
        )
       }
      
        
     
      </div>

    </div>
  );
}
