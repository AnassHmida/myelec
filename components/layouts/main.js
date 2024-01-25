import NavBar from '../navbar'
import { Box } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box  >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MyElec est une entreprise monégasque spécialisée en travaux d'électricité générale pour les particuliers et les professionnels à Monaco et dans les Alpes Maritimes. Découvrez nos services de qualité exceptionnelle" />
        <meta name="author" content="MYELEC" />
        <meta name="author" content="MYELEC" />
        <link rel="apple-touch-icon" href="https://www.myelec.mc/images/logo/logo.jpg" />
        <link rel="shortcut icon" href="https://www.myelec.mc/images/logo/logo.jpg" type="image/x-icon" />
        <meta name="twitter:title" content="MYELEC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myelec.mc" />
        <meta name="twitter:creator" content="@myelec.mc" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="MYELEC" />
        <meta name="og:title" content="MYELEC" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.myelec.mc/images/logo/logo.jpg" />
        <title>MyElec - Électricité Générale à Monaco et Alpes Maritimes</title>
      </Head>

      <NavBar path={router.asPath} />




      <Box >
    

        {children}

        <Footer />
      </Box>
    </Box>
  )
}

export default Main
