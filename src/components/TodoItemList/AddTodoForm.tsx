"use client";

import { useState } from "react";
import { addNewTask } from "../TodoItem/action";
import { PlusIcon } from "@heroicons/react/24/outline";

export const AddTodoForm = ({ listId }: AddTodoFormProps) => {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await addNewTask(newTaskName, listId);
        setNewTaskName("");
      }}
      className="flex flex-row justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Add New Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="w-full p-2 border text-slate-600 border-gray-300 rounded-2xl"
      />
      <button
        type="submit"
        className=" bg-cyan-700 text-white px-4 py-2 rounded-3xl"
      >
        <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </form>
  );
};

type AddTodoFormProps = { listId: string };
