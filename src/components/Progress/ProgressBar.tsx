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
    <div className="w-full h-5">
      <div className="w-full max-w-xl p-4">
        <div className="w-full bg-gray-300 rounded-full h-6">
          <div
            className="bg-cyan-900 h-6 rounded-full"
            style={{
              width: `${percent}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

type progressBarProps = { listId: string };
