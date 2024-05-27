import { Container, Text, VStack, Heading, Box, Image, Link, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("black", "white")}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts, experiences, and ideas.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link href="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
      </VStack>
    </Container>
  );
};

export default Index;