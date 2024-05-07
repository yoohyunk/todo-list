import { getTasksFromList } from "@/lib/db";

export default async function HomePage({
  params,
}: {
  params: { listId: string };
}) {
  const { listId } = params;

  const tasks = getTasksFromList(listId);

  return (
    <div>
      Please select a list {listId}
      {JSON.stringify(tasks)}
    </div>
  );
}
