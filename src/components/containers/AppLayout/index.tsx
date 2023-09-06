import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Todos } from "@/components/containers/Todos";
import { TodoInput } from "@/components/containers/TodoInput";
import { ClearCompletedButton } from "../ClearCompletedButton";
import { RemoveAllTodosButton } from "../RemoveAllTodosButton";
import { useTodosStore } from "@/store";

export function AppLayout() {
  const [isNarrowerThan1200] = useMediaQuery("(max-width: 1200px)");
  const { todos } = useTodosStore();

  const hasTodos = todos.length > 0;

  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      alignItems="center"
      bg="lightgray"
    >
      <Text fontSize="6xl">Todos</Text>
      <Box width={isNarrowerThan1200 ? "95%" : "1200px"} p="5px" bg="#ECECEC">
        <TodoInput />
        <Todos />
        {hasTodos && (
          <Stack direction="row" p={1}>
            <ClearCompletedButton />
            <RemoveAllTodosButton />
          </Stack>
        )}
      </Box>
    </Flex>
  );
}
