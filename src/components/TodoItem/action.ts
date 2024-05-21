"use server";

import { Task } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const handleTodoToggle = async (
  taskId: string,
  currentStatus: "done" | "todo"
) => {
  const res = await fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: currentStatus === "done" ? "todo" : "done",
    }),
  });
  const updatedTask: Task = await res.json();
  console.log(updatedTask);
  revalidatePath("/tasks");
};

export const addNewTask = async (taskName: string, listId: string) => {
  if (taskName === "") {
    return;
  }

  const res = await fetch("http://localhost:3000/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuidv4(),
      name: taskName,
      status: "todo",
      listId: listId,
    }),
  });
  await res.json();
  revalidateTag("tasks");
};

export const deleteTask = async (taskId: string) => {
  const res = await fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE",
  });
  await res.json();
  revalidateTag("lists");
};
