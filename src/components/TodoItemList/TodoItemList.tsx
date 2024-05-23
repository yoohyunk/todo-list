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

  // sort tasks by status
  tasks.items.sort((a, b) => {
    if (a.status === "done" && b.status === "todo") {
      return 1;
    }
    if (a.status === "todo" && b.status === "done") {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <div className="space-y-0 w-full mb:space-y-4 mb:w-3/5">
        <div className="flex flex-col mb:justify-between gap-2">
          <h1 className="text-3xl mb-4 text-slate-600">{tasks.listName}</h1>
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
