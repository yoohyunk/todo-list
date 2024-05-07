import { getLists } from "@/lib/db";
import Link from "next/link";

const getListsFromServer = async () => {
  return getLists();
};

export default async function HomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const lists = await getListsFromServer();

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-10 p-20 space-y-2 border-2 items-center inset-y-0 left-0 h-dvh w-1/4 bg-slate-50 text-gray-500 text-2xl">
        {lists.map((list) => (
          <Link
            href={`/lists/${list.id}`}
            className="text-center font-bold hover:text-gray-600"
          >
            {list.name}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
