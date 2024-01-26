import Head from 'next/head';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { HeaderSection } from '../components/header';

import BrandCarousel from '../components/brandcarousel';

import Layout from '../components/layouts/article';

const Home = () => (
  <Layout title="Home">
  <Box maxW="full" >
  <Head>
  <title>MyElec - Électricité Générale à Monaco et Alpes Maritimes</title>
  <meta
    name="description"
    content="MyElec est une entreprise monégasque spécialisée en travaux d'électricité générale pour les particuliers et les professionnels à Monaco et dans les Alpes Maritimes. Découvrez nos services de qualité exceptionnelle."
  />
</Head>
    <HeaderSection />

    

      <Section delay={0.1} margin>
      <Heading as="h3" variant="section-title" style={{      
          fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font
              fontWeight: 'bold', // Apply bold style
              fontSize: '20px'}}>
          L&apos;ENTREPRISE
        </Heading>
        <Paragraph>
        MyElec est une entreprise monégasque spécialisée en travaux d&apos;électricité générale pour les particuliers (villas et appartements de luxe) et les professionnels (hôpitaux, magasins, bureaux, logements).
Nous intervenons sur le territoire Monégasque et les Alpes Maritimes pour les marchés privés et publics.
Avec une expérience professionnelle de plus de 10 ans dans un grand groupe, leader du marché de l&apos;électricité, les dirigeants de MyElec ont pu offrir des solutions électriques de qualité exceptionnelle dans le secteur du luxe avec des projets allant de 2 à 10 millions d’euros de chiffres d’affaires
Un parcours engagé et passionné pour une vision d&apos;avenir et un engagement envers la durabilité environnementale.
Mêlant théorie et pratique, enthousiasme et dynamisme, une alliance des savoir-faire permettant de se projeter vers une société humaine et pérenne.{' '}
         
        
        </Paragraph>

       
       
      </Section>

   
{/* <InfoCards/> */}
<Section delay={0.1}>
        <Heading as="h3" variant="section-title" style={{      
          fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font
              fontWeight: 'bold', // Apply bold style
              fontSize: '20px'}}>
        LES MARQUES QUE NOUS PRIVILÉGIONS
        </Heading>
        <Paragraph >
        Dans le domaine exigeant de l&apos;électricité, la qualité de l&apos;équipement est cruciale pour garantir des installations sûres et efficaces. Notre engagement envers l&apos;excellence se reflète dans le choix méticuleux des marques de référence que nous utilisons pour chaque projet. Ces partenariats stratégiques avec des leaders de l&apos;industrie renforcent notre capacité à offrir des solutions fiables et innovantes.
        </Paragraph>

  
       
      </Section>
      <BrandCarousel/>
    </Box>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
