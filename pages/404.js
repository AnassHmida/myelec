import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Flex
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Flex

      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Container         
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center" >
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Box my={6}>
          <Button as={NextLink} href="/" colorScheme="red">
            Return to home
          </Button>
        </Box>
      </Container>
    </Flex>
  )
}

export default NotFound
