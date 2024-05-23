import { ListPage } from "@/components/ListMenu/ListMenu";

export default async function HomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-teal-50 flex flex-col items-center h-screen">
      <div className="container mx-auto">
        <div className="w-full bg-sky-950 text-w text-center py-4 text-4xl mt-3 rounded-lg shadow-md">
          ToDo-List
        </div>
        <div className="flex mt-10">
          <div className="w-1/4  p-4 rounded-lg shadow-md text-xl mb-4  bg-gray-100">
            <ListPage />
          </div>
          <div className="flex-1 ml-4 bg-sky-50 p-4 rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
