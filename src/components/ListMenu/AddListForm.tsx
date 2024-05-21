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
      className="flex flex-row justify-center"
    >
      <input
        type="text"
        placeholder="Add New List"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        className="bg-slate-50 hover:"
      />
      <button type="submit" className=" text-3xl hover:font-bold ">
        +
      </button>
    </form>
  );
};
