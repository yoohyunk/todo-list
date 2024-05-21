"use client";

import { deleteTask, handleTodoToggle } from "../TodoItem/action";

export const TodoItemRow = ({
  taskId,
  taskName,
  taskStatus,
}: TodoItemRowProps) => {
  return (
    <div className="text-2xl  text-gray-600 flex flex-row justify-between items-center hover:bg-slate-200 p-2 group">
      <div
        className={
          taskStatus === "done"
            ? "font-bold line-through text-gray-400"
            : "font-bold"
        }
      >
        {taskName}
      </div>
      <button
        className="text-transparent group-hover:text-black hover:bg-red-400 p-2"
        onClick={() => handleTodoToggle(taskId, taskStatus)}
      >
        X
      </button>
    </div>
  );
};

type TodoItemRowProps = {
  taskId: string;
  taskName: string;
  taskStatus: "done" | "todo";
};
