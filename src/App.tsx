import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "./components/containers/AppLayout";

function App() {
  return (
    <ChakraProvider>
      <AppLayout />
    </ChakraProvider>
  );
}

export default App;
