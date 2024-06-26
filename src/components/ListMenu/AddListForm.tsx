"use client";

import { useState } from "react";
import { addNewList } from "./actions";

export const AddListForm = () => {
  const [newListName, setNewListName] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await addNewList(newListName);
        setNewListName("");
      }}
      className="flex flex-row justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Add New List"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-2xl text-sm md:text-md"
      />
      <button
        type="submit"
        className=" bg-blue-950 text-white px-4 py-2 rounded-3xl "
      >
        +
      </button>
    </form>
  );
};
