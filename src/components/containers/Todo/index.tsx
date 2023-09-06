import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { ITodo } from "@/interfaces/ITodo";
import { useTodosStore } from "@/store";

type Props = ITodo;

export function Todo({ text, complete, id }: Props) {
  const { changeTodoStatus } = useTodosStore();

  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      padding="0 20%"
      bg="white"
      onClick={() => changeTodoStatus(id)}
    >
      <Checkbox size="lg" colorScheme="green" isChecked={complete} />
      <Text fontSize="3xl" as={complete ? "s" : undefined}>
        {text}
      </Text>
    </Flex>
  );
}
