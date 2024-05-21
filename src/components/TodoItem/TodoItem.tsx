"use client";
import { handleTodoToggle } from "./action";

export const TodoItem = ({ taskId, taskName, taskStatus }: TodoItemProps) => {
  return (
    <div
      className="flex flex-row bg-slate-50 p-5 rounded-xl justify-between"
      onClick={() => handleTodoToggle(taskId, taskStatus)}
    >
      <div
        className={`${
          taskStatus === "done"
            ? "line-through bg-green-300"
            : "hover:bg-purple-300 hover:text-slate-50"
        }`}
      >
        {taskName}
      </div>
    </div>
  );
};

type TodoItemProps = {
  taskId: string;
  taskName: string;
  taskStatus: "done" | "todo";
};
