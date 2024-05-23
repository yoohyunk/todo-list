import { ListPage } from "@/components/ListMenu/ListMenu";

export default async function HomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-teal-50 flex flex-col items-center h-screen">
      <div className="container mx-auto p-4">
        <div className="w-full bg-sky-950 text-w text-center py-4 text-4xl mt-3 rounded-lg shadow-md">
          ToDo-List
        </div>
        <div className="flex mt-10 flex-col md:flex-row">
          <div className="md:w-1/4 md:mr-1 p-4 rounded-lg shadow-md text-xl mb-4 bg-gray-100">
            <ListPage />
          </div>
          <div className="flex-1 bg-sky-50 p-4 rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
