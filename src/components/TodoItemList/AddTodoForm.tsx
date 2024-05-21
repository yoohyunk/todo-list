"use client";

import { useState } from "react";
import { addNewTask } from "../TodoItem/action";

export const AddTodoForm = ({ listId }: AddTodoFormProps) => {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await addNewTask(newTaskName, listId);
        setNewTaskName("");
      }}
      className="flex flex-row justify-center"
    >
      <input
        type="text"
        placeholder="Add New List"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="bg-slate-50 hover:bg-slate-100 p-2 w-full text-slate-400"
      />
      <button
        type="submit"
        className=" text-3xl hover:font-bold text-slate-400"
      >
        +
      </button>
    </form>
  );
};

type AddTodoFormProps = { listId: string };
