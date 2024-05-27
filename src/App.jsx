import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Button, useColorMode, Flex } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    );
  };

  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <ColorModeSwitcher />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;