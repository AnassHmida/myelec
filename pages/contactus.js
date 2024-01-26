import React, { useState } from 'react';
import { Flex, Box, Input, Textarea, Button, useToast, Center, Text, useTheme } from '@chakra-ui/react';

const ContactForm = () => {
  const theme = useTheme(); // Access Chakra UI theme
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Email Sent',
          description: 'Your message has been sent successfully. We will get back to you soon!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Error sending email 2:', response.statusText);

        toast({
          title: 'Error',
          description: 'An error occurred. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error sending email 3:', error);

      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh">
      <Box width="400px" m={10}>
        <Center mb={8}>
          <Text fontSize="xl" fontWeight="bold">
            Contact us and we&apos;ll get back to you as soon as possible!
          </Text>
        </Center>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Access Chakra UI theme color
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Access Chakra UI theme color
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Access Chakra UI theme color
          />
          <Center>
            <Button type="submit" colorScheme="red" size="md">
              Send Message
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
