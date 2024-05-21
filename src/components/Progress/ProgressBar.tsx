import { List, Task } from "@/lib/db";
import { calculatePercentTodo } from "./ProgressPercent";

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

export const ProgressBar = async ({ listId }: progressBarProps) => {
  const tasks = await getTasks(listId);
  const percent = calculatePercentTodo({ tasks: tasks.items });

  return (
    <div className="progress-bar">
      {Number(percent) >= 99.99 ? `Completed 👏` : `Completion ${percent} %`}
      <div className="width: `${percent}%` } bg-red-200"></div>
    </div>
  );
};

type progressBarProps = { listId: string };
