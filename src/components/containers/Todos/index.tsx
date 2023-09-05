import { Divider, Flex } from "@chakra-ui/react";
import { Todo } from "../../view/Todo";

export function Todos() {
  return (
    <Flex direction="column">
      <Todo checked text="make first" />
      <Divider />
      <Todo checked text="make second" />
      <Divider />
      <Todo checked text="make third" />
      <Divider />
    </Flex>
  );
}
