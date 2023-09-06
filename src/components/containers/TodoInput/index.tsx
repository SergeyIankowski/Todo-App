import { FormEvent, useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useTodosStore } from "@/store";

export function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const { setTodo } = useTodosStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText) return;

    const newTodo = {
      id: uuidv4(),
      text: todoText,
      complete: false,
    };
    setTodo(newTodo);
    setTodoText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="5px" alignItems="center">
        <Input
          placeholder="What needs to be done?"
          size="lg"
          width="100%"
          bg="white"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button type="submit" colorScheme="green">
          Add New Todo
        </Button>
      </Flex>
    </form>
  );
}
