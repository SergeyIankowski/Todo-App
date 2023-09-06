import { Button as ChackraButton, ButtonProps } from "@chakra-ui/react";

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <ChackraButton type={type} colorScheme="green" onClick={onClick}>
      {children}
    </ChackraButton>
  );
}
