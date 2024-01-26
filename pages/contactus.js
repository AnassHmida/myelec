import React, { useState } from 'react';
import { Flex, Box, Input, Textarea, Button, useToast, Center, Text, useTheme, Spinner } from '@chakra-ui/react';

const ContactForm = () => {
  const theme = useTheme(); // Accéder au thème de Chakra UI
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true); // Définir l'état de chargement

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
          title: 'Email envoyé',
          description: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt !',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        // Réinitialiser le formulaire après une soumission réussie
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Erreur lors de l\'envoi de l\'email :', response.statusText);

        toast({
          title: 'Erreur',
          description: 'Une erreur s\'est produite. Veuillez réessayer plus tard.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email :', error);

      toast({
        title: 'Erreur',
        description: 'Une erreur s\'est produite. Veuillez réessayer plus tard.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Réinitialiser l'état de chargement
    }
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh">
      <Box width="400px" m={10}>
        <Center mb={8}>
          <Text fontSize="xl" fontWeight="bold">
            Contactez-nous et nous vous répondrons dès que possible !
          </Text>
        </Center>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Accéder à la couleur du thème de Chakra UI
          />
          <Input
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            value={formData.email}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Accéder à la couleur du thème de Chakra UI
          />
          <Textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            mb={4}
            borderColor={theme.colors.gray[400]} // Accéder à la couleur du thème de Chakra UI
          />
          <Center>
            <Button type="submit" colorScheme="red" size="md" disabled={isLoading}>
              {isLoading ? <Spinner size="sm" color="white" /> : 'Envoyer le message'}
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
