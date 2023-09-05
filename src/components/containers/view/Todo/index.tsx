import { Checkbox, Flex, Text } from "@chakra-ui/react";

interface Props {
  checked: boolean;
  text: string;
}

export function Todo({ text, checked }: Props) {
  return (
    <Flex justifyContent="space-between" width="100%" padding="0 20%">
      <Checkbox isChecked={checked} size="lg" />
      <Text fontSize="3xl" as="s">
        {text}
      </Text>
    </Flex>
  );
}
