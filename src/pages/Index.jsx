import { Container, Text, VStack, Heading, Box, Image, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local storage or server
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  return (
    <Container
      centerContent
      maxW="container.md"
      py={8}
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
      {posts.length > 0 ? (
          posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h2" size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
              <Button mt={4} colorScheme="red" onClick={() => handleDelete(index)}>Delete</Button>
            </Box>
          ))
        ) : (
          <Text>No posts available.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;