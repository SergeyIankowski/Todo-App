import { Box, Flex, Text } from "@chakra-ui/react";
import { Todos } from "../Todos";
import { TodoInput } from "../../view/TodoInput";

export function AppLayout() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      alignItems="center"
      bg="lightgray"
    >
      <Text fontSize="6xl">Todos</Text>
      <Box width="1200px" bg="#ececec">
        <TodoInput />
        <Todos />
      </Box>
    </Flex>
  );
}
