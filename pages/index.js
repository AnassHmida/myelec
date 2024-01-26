import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { HeaderSection } from '../components/header';

import BrandCarousel from '../components/brandcarousel';

import Layout from '../components/layouts/article';


const Home = () => {
const {t} = useTranslation()

return(
  <Layout title="Home">
    <Box maxW="full">
    <Head>
  <title>MyElec - Électricité Générale à Monaco et Alpes Maritimes</title>
  <meta
    name="description"
    content="MyElec est une entreprise monégasque spécialisée en travaux d'électricité générale pour les particuliers et les professionnels à Monaco et dans les Alpes Maritimes. Découvrez nos services de qualité exceptionnelle."
  />
</Head>
    <HeaderSection />

    

      <Section delay={0.1} margin>
        <Heading as="h3" variant="section-title">
          {t('companyTitle')}
        </Heading>
        <Paragraph>{t('companyDescription')}</Paragraph>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {t('brandsTitle')}
        </Heading>
        <Paragraph>{t('brandsDescription')}</Paragraph>
      </Section>
      <BrandCarousel />
    </Box>
  </Layout>

)
}



export default Home
export { getServerSideProps } from '../components/chakra'
