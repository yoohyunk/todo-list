import { getTasksFromList } from "@/lib/db";

export default async function HomePage({
  params,
}: {
  params: { listId: string };
}) {
  const { listId } = params;

  const tasks = getTasksFromList(listId);

  return (
    <div className="p-20 h-dvh w-3/4 border-8 border-slate-50 bg-violet-400 text-slate-50 flex flex-col gap-7">
      <div className="text-3xl font-bold ">{listId}</div>

      <div className="flex flex-col gap-4 w-4/5 text-gray-400 ">
        {tasks.map((task) => (
          <div key={task.id} className=" ">
            <div className="flex flex-row bg-slate-50 p-5 rounded-xl justify-between hover:bg-purple-300 hover:text-slate-50">
              <div>{task.name}</div>
              <div>{task.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
