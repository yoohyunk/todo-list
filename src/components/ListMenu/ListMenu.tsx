import { getListsFromServer } from "./actions";
import { AddListForm } from "./AddListForm";
import { ListRow } from "./ListRow";
import { ProgressBar } from "../Progress/ProgressBar";

export async function ListPage() {
  const lists = await getListsFromServer();

  return (
    <div className="p-4  text-sky-700 text-2xl rounded-xl h-full flex flex-col gap-3">
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
