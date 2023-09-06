import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

interface Props {
  content: string;
  color: string;
}

export function DividerLabeled({ content, color }: Props) {
  return (
    <Box position="relative" padding="10">
      <Divider />
      <AbsoluteCenter bg={color} color="white" px="4">
        {content}
      </AbsoluteCenter>
    </Box>
  );
}
