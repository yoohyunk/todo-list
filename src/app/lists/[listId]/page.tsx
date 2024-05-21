import { TodoItem } from "@/components/TodoItem/TodoItem";
import { TodoItemList } from "@/components/TodoItemList/TodoItemList";
import { getTasksFromList, updateTodoItem } from "@/lib/db";

export const revalidate = 1;

export default async function ListPage({
  params,
}: {
  params: { listId: string };
}) {
  const { listId } = params;

  return <TodoItemList listId={listId} />;
}
