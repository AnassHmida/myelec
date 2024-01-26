import { forwardRef } from 'react';
import Logo from './logo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { useTranslation } from 'next-i18next'; // Import useTranslation hook

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;
  const { toggleColorMode } = useColorMode();
  const { t } = useTranslation(); // Initialize useTranslation hook
  const router = useRouter();

  const switchLanguage = (language) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <Box
      position="fixed"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={3000}
    >
      <Container
        display="flex"
        maxW="full"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/sd" path={path}>
            {t('L\'entreprise')}
          </LinkItem>
          <LinkItem href="/pp" path={path}>
            {t('Nos Métiers')}
          </LinkItem>
          <LinkItem href="/sd" path={path}>
            {t('Références')}
          </LinkItem>
          <LinkItem href="/contactus">{t('Contacter nous')}</LinkItem>
        </Stack>

        <Box flex={3} padding={5} align="right">
          {/* Language Buttons */}
          <IconButton
            icon="🇬🇧"
            variant="outline"
            borderRadius="md"
            p={2}
            mr={2}
             colorScheme={useColorModeValue('purple', 'orange')}
            onClick={() => switchLanguage('en')}
          />
          <IconButton
            icon="🇫🇷"
            variant="outline"
            borderRadius="md"
            p={2}
            mr={2}
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            //icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={() => switchLanguage('fr')}
          />

          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  {t('L\'entreprise')}
                </MenuItem>
                <MenuItem as={MenuLink} href="/sd">
                  {t('Nos Métiers')}
                </MenuItem>
                <MenuItem as={MenuLink} href="/sd">
                  {t('Références')}
                </MenuItem>
                <MenuItem as={MenuLink} href="/contactus">
                  {t('Contacter nous')}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
