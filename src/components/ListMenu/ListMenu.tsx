import { getListsFromServer } from "./actions";
import { AddListForm } from "./AddListForm";
import { ListRow } from "./ListRow";
import { ProgressBar } from "../Progress/ProgressBar";

export async function ListPage() {
  const lists = await getListsFromServer();

  return (
    <div className="p-4 pt-12 bg-slate-50 text-gray-500 text-2xl border border-slate-900 rounded-xl h-full">
      <AddListForm />
      {lists.map((list) => (
        <ListRow
          key={list.id}
          listId={list.id}
          listName={list.name}
          progressBar={<ProgressBar listId={list.id} />}
        />
      ))}
    </div>
  );
}
