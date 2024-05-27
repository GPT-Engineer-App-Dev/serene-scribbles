import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // Here you would typically send the data to a server
      console.log("New Post:", { title, content });
      toast({
        title: "Post created.",
        description: "Your new post has been created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
    } else {
      toast({
        title: "Error.",
        description: "Both title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add a New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="lg"
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          size="lg"
          height="200px"
        />
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;