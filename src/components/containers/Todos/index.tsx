import { useMemo } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Todo } from "@/components/view/Todo";
import { useTodosStore } from "@/store";
import { ITodo } from "@/interfaces/ITodo";
import { DividerLabeled } from "@/components/view/DividerLabeled/Index";

export function Todos() {
  const { todos } = useTodosStore();
  const completedTodos = useMemo(
    () => todos.filter((item) => item.complete === true),
    [todos]
  );
  const uncompletedTodos = useMemo(
    () => todos.filter((item) => item.complete === false),
    [todos]
  );
  const hasCompletedTodos = completedTodos.length !== 0;

  return (
    <Flex direction="column">
      {uncompletedTodos.map((todo: ITodo) => (
        <Box key={todo.id}>
          <Todo id={todo.id} text={todo.text} complete={todo.complete} />
          <Divider />
        </Box>
      ))}
      {hasCompletedTodos && (
        <DividerLabeled content="Completed" color="#38A169" />
      )}
      {completedTodos.map((todo: ITodo) => (
        <Box key={todo.id}>
          <Todo id={todo.id} text={todo.text} complete={todo.complete} />
          <Divider />
        </Box>
      ))}
    </Flex>
  );
}
