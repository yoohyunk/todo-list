"use client";

import { deleteTask, handleTodoToggle } from "../TodoItem/action";
import {
  TrashIcon,
  CheckIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

export const TodoItemRow = ({
  taskId,
  taskName,
  taskStatus,
}: TodoItemRowProps) => {
  return (
    <div className="text-2xl text-gray-600 flex flex-row justify-between items-center rounded-3xl hover:bg-slate-200 p-2 group">
      <div
        className={
          taskStatus === "done"
            ? "font-bold line-through text-gray-400"
            : "font-bold"
        }
      >
        {taskName}
      </div>
      <div>
        <button
          className={
            taskStatus === "done"
              ? "text-transparent group-hover:text-black rounded-3xl hover:bg-yellow-400 p-2"
              : "text-transparent group-hover:text-black rounded-3xl hover:bg-green-400 p-2"
          }
          onClick={() => handleTodoToggle(taskId, taskStatus)}
        >
          {taskStatus === "done" ? (
            <ArrowUturnLeftIcon
              className="h-6 w-6 text-gray-500 hover:text-slate-200"
              aria-hidden="true"
            />
          ) : (
            <CheckIcon
              className="h-6 w-6 text-gray-500 hover:text-slate-200"
              aria-hidden="true"
            />
          )}
        </button>
        <button
          className="text-transparent group-hover:text-black rounded-3xl hover:bg-red-400 p-2"
          onClick={() => deleteTask(taskId)}
        >
          <TrashIcon
            className={`h-6 w-6 text-gray-500 hover:text-slate-200`}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

type TodoItemRowProps = {
  taskId: string;
  taskName: string;
  taskStatus: "done" | "todo";
};
