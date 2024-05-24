"use client";

import Link from "next/link";
import React, { useState } from "react";
import { deleteList } from "./actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "../tooltip/tooltip";

export const ListRow = ({ listId, listName, progressBar }: ListRowProps) => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  return (
    <div className="flex justify-between group p-2 gap-4 hover:bg-slate-200 rounded-3xl sm:flex-row md:flex-col lg:flex-row">
      <div
        className="relative w-1/2 md:w-full lg:w-1/2"
        onMouseOver={() => setIsTooltipShown(true)}
        onMouseOut={() => setIsTooltipShown(false)}
      >
        <div className="overflow-hidden">
          <Link
            href={`/lists/${listId}`}
            className="font-bold group-hover:text-gray-600 p-2 rounded-3xl text-2xl"
          >
            {listName}
          </Link>
        </div>
        <div className="absolute -top-10 left-4 p-0 text-slate-100 text-xs rounded-xl">
          <Tooltip isShown={isTooltipShown} tooltipText={listName} />
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className="w-full">{progressBar}</div>
        <button
          className="text-transparent group-hover:text-black rounded-3xl hover:bg-red-400 p-2"
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
    </div>
  );
};

type ListRowProps = {
  listId: string;
  listName: string;
  progressBar: React.ReactNode;
};
