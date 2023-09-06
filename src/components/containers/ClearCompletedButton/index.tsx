import { useTodosStore } from "@/store";
import { Button } from "@/components/view/Button";

export function ClearCompletedButton() {
  const { removeCompletedTodos } = useTodosStore();

  return (
    <Button type="button" colorScheme="green" onClick={removeCompletedTodos}>
      Clear Completed
    </Button>
  );
}
