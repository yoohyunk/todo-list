import { ListPage } from "@/components/ListMenu/ListMenu";

export default async function HomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-4 bg-slate-50 space-x-8 h-screen">
      <div className="w-1/5">
        <ListPage />
      </div>
      <div className="p-4 pt-12 bg-slate-50 w-full border border-slate-900 rounded-xl">
        {children}
      </div>
    </div>
  );
}
