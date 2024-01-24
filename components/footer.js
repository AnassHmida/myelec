import React from 'react';
import {
  Flex,
  Box,
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
    <footer mt="32" pb="16">
      <Container maxW="container.xl">
        <Divider my={6} />
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: '8', lg: '16', xl: '20' }}>
          <Flex direction="column" gap="8">
            {/* Replace with your NavBrand component */}
            <Text textStyle="SectionParagraph"></Text>
            <div>
              <Text textStyle="SectionParagraph"></Text>
              <Text textStyle="SectionParagraph"></Text>
            </div>
          </Flex>
          <Grid
            gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap="8"
          >
            <GridItem>
              <Flex direction="column" gap="5">
                <Text textStyle="FooterLinkGroupTitle">SERVICES</Text>
                <Flex direction={{ base: 'column', sm: 'row', lg: 'column' }} gap="2">
                  <NavLink value="Consultation" href="/service/detail" />
                  <NavLink value="Maintenance" href="/service/detail" />
                  <NavLink value="Tarification" href="/pricing" />
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" gap="5">
                <Text textStyle="FooterLinkGroupTitle">ENTREPRISE</Text>
                <Flex direction={{ base: 'column', sm: 'row', lg: 'column' }} gap="2">
                  <NavLink value="À propos" href="/about" />
                  <NavLink value="Contact" href="/contact" />
                  <NavLink value="Envoyer un devis" href="/quote" />
                  <NavLink value="Politique de confidentialité" href="/privacy-policy" />
                  <NavLink value="Conditions de service" href="/term-of-service" />
                  <NavLink value="Emplois" href="/jobs" />
                  <NavLink value="Blogs" href="/blog" />
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" gap="5">
                <Text textStyle="FooterLinkGroupTitle">RESSOURCES</Text>
                <Flex direction={{ base: 'column', sm: 'row', lg: 'column' }} gap="2">
                  <NavLink value="Support" href="/support" />
                  <NavLink value="Documentation" href="/documentation" />
                  <NavLink value="Licence" href="/license" />
                  <NavLink value="Plan du site" href="/sitemap" />
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Box align="center" opacity={0.4} fontSize="sm" paddingTop={20}>
          &copy; {new Date().getFullYear()} MYELEC. Tous droits réservés.
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
