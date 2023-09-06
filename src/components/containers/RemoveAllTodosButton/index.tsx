import { Button } from "@/components/view/Button";
import { useTodosStore } from "@/store";

export function RemoveAllTodosButton() {
  const { removeAllTodos } = useTodosStore();

  return (
    <Button type="button" colorScheme="green" onClick={removeAllTodos}>
      Remove All Todos
    </Button>
  );
}
