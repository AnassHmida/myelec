import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container paddingTop={100}>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
