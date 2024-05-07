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
    <div>
      <div className="flex flex-col space-y-2">
        {lists.map((list) => (
          <Link href={`/lists/${list.id}`}>{list.name}</Link>
        ))}
      </div>
      {children}
    </div>
  );
}
