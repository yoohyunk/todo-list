"use client";

import Link from "next/link";
import React from "react";
import { toggleListStatus } from "./actions";

export const ListRow = ({ listId, listName, progressBar }: ListRowProps) => {
  return (
    <div className="flex justify-between group hover:bg-slate-200">
      <Link
        href={`/lists/${listId}`}
        className="font-bold group-hover:text-gray-600 w-full p-2"
      >
        {listName}
      </Link>
      {progressBar}
      <button
        className="text-transparent group-hover:text-black hover:bg-red-400 p-2"
        onClick={() => toggleListStatus(listId)}
      >
        X
      </button>
    </div>
  );
};

type ListRowProps = {
  listId: string;
  listName: string;
  progressBar: React.ReactNode;
};
