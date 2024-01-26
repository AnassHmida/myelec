import React from 'react';
import {
  Flex,
  Box,
  Stack,
  Text,
  Link,
  Container,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';

const NavLink = ({ value, href }) => (
  <Link href={href} color="gray.600" _hover={{ color: 'blue.500' }}>
    {value}
  </Link>
);

const Footer = () => {
  return (
    <footer pb="16">
      <Container maxW="container.xl">
        <Divider my={6} />
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: '8', lg: '16', xl: '20' }}>
          <Flex direction="column" gap="8">
            {/* Replace with your NavBrand component */}
            <Text textStyle="SectionParagraph">contact@mcmyelec.mc</Text>
            <div>
              <Text textStyle="SectionParagraph">
                Directeur : 06.40.97.12.54
              </Text>
              <Text textStyle="SectionParagraph">
                Directeur travaux : 06.62.50.53.75
              </Text>
            </div>
          </Flex>
          <Container>
            <Grid
              gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap="8"
            >
              <GridItem>
                <Flex direction="column" gap="5">
                  <Text textStyle="FooterLinkGroupTitle">SERVICES</Text>
                  <Stack direction="column" gap="2">
                    <NavLink value="Consultation" href="/service/detail" />
                    <NavLink value="Maintenance" href="/service/detail" />
                    <NavLink value="Tarification" href="/pricing" />
                  </Stack>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex direction="column" gap="5">
                  <Text textStyle="FooterLinkGroupTitle">ENTREPRISE</Text>
                  <Stack direction="column" gap="2">
                    <NavLink value="À propos" href="/about" />
                    <NavLink value="Contact" href="/contactus" />
                    <NavLink value="Envoyer un devis" href="/quote" />
                    <NavLink value="Politique de confidentialité" href="/privacy-policy" />
                    <NavLink value="Conditions de service" href="/term-of-service" />
                    <NavLink value="Emplois" href="/jobs" />
                    <NavLink value="Blogs" href="/blog" />
                  </Stack>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex direction="column" gap="5">
                  <Text textStyle="FooterLinkGroupTitle">RESSOURCES</Text>
                  <Stack direction="column" gap="2">
                    <NavLink value="Support" href="/support" />
                    <NavLink value="Documentation" href="/documentation" />
                    <NavLink value="Licence" href="/license" />
                    <NavLink value="Plan du site" href="/sitemap" />
                  </Stack>
                </Flex>
              </GridItem>
            </Grid>
          </Container>
        </Flex>
        <Box align="center" opacity={0.4} fontSize="sm" paddingTop={20}>
          &copy; {new Date().getFullYear()} MYELEC. Tous droits réservés.
        </Box>
      </Container>
    </footer>
  );
};



export default Footer;
