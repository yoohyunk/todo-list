"use client";

import Link from "next/link";
import React from "react";
import { deleteList } from "./actions";
import { TrashIcon } from "@heroicons/react/24/outline";

export const ListRow = ({ listId, listName, progressBar }: ListRowProps) => {
  return (
    <div className="flex justify-between group hover:bg-slate-200 rounded-2xl">
      <Link
        href={`/lists/${listId}`}
        className="font-bold group-hover:text-gray-600 w-full p-2 rounded-3xl text-2xl"
      >
        {listName}
      </Link>
      {progressBar}
      <button
        className="text-transparent group-hover:text-white hover:bg-sky-800 p-2 rounded-xl"
        style={{ backgroundImage: "url('/icons/delete_icon.png')" }}
        onClick={() => {
          deleteList(listId);
          console.log("Delete clicked");
        }}
        aria-label="Delete"
      >
        <TrashIcon
          className="h-6 w-6 text-gray-500 hover:text-slate-200"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

type ListRowProps = {
  listId: string;
  listName: string;
  progressBar: React.ReactNode;
};
