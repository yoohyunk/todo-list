"use server";

import { List } from "@/lib/db";
import { v4 as uuid } from "uuid";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const getListsFromServer = async () => {
  const res = await fetch("http://localhost:3000/lists", {
    next: {
      tags: ["lists"],
    },
  });
  const data: List[] = await res.json();
  return data;
};

export const addNewList = async (listName: string) => {
  if (listName === "") {
    return;
  }
  const res = await fetch("http://localhost:3000/lists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid(),
      name: listName,
    }),
  });
  await res.json();
  revalidateTag("lists");
};

export const deleteList = async (listId: string) => {
  const res = await fetch(
    `http://localhost:3000/lists/${listId}?dependent=tasks`,
    {
      method: "DELETE",
    }
  );
  await res.json();
  revalidateTag("lists");
  redirect("/lists");
};

export const toggleListStatus = async (listId: string) => {
  const res = await fetch(`http://localhost:3000/lists/${listId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "done" }),
  });
  await res.json();
  revalidateTag("lists");
  return data;
};
