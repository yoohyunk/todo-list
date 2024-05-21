import { List, Task, getTasksFromList } from "@/lib/db";
import { TodoItem } from "../TodoItem/TodoItem";
import { AddTodoForm } from "./AddTodoForm";
import { deleteTask } from "../TodoItem/action";
import { TodoItemRow } from "./TodoItemRow";

const getTasks = async (listId: string) => {
  const res = await fetch(`http://localhost:3000/tasks/?listId=${listId}`);
  const data: Task[] = await res.json();
  const resList = await fetch(`http://localhost:3000/lists/${listId}`);
  const dataList: List = await resList.json();
  const listName = dataList.name;
  return {
    listName,
    items: data,
  };
};

export const TodoItemList = async ({ listId }: TodoItemListProps) => {
  const tasks = await getTasks(listId);

  return (
    <>
      <div className="space-y-4 w-3/5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-500">{tasks.listName}</h1>
          <AddTodoForm listId={listId} />
        </div>
        <div className="p-2 rounded text-gray-600">
          {tasks.items.map((task) => (
            <TodoItemRow
              key={task.id}
              taskId={task.id}
              taskName={task.name}
              taskStatus={task.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

type TodoItemListProps = {
  listId: string;
};
