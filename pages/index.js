
import {
  Container,
  Heading,
  Box,

  useColorModeValue
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { HeaderSection } from '../components/header'

const Home = () => (

   <Container
      maxW="full"

    >

<HeaderSection/>
      <Box

        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box>

    {/* <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          MYELEC
        </Heading>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="/images/takuya.jpg"
            alt="Profile image"
            width="100"
            height="100"
          />
        </Box>
      </Box>
    </Box> */}

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        MyElec est une entreprise monégasque spécialisée en travaux d&apos;électricité générale pour les particuliers (villas et appartements de luxe) et les professionnels (hôpitaux, magasins, bureaux, logements).
Nous intervenons sur le territoire Monégasque et les Alpes Maritimes pour les marchés privés et publics.
Avec une expérience professionnelle de plus de 10 ans dans un grand groupe, leader du marché de l&apos;électricité, les dirigeants de MyElec ont pu offrir des solutions électriques de qualité exceptionnelle dans le secteur du luxe avec des projets allant de 2 à 10 millions d’euros de chiffres d’affaires
Un parcours engagé et passionné pour une vision d&apos;avenir et un engagement envers la durabilité environnementale.
Mêlant théorie et pratique, enthousiasme et dynamisme, une alliance des savoir-faire permettant de se projeter vers une société humaine et pérenne.{' '}
         
        
        </Paragraph>
       
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section> */}
    </Container>

)

export default Home
export { getServerSideProps } from '../components/chakra'
