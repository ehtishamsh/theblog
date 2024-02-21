import { Tag, columns } from "@/app/(dashboard)/admin/tags/columns";
import { DataTable } from "@/app/(dashboard)/admin/tags/data-table";

async function getData(): Promise<Tag[]> {
  // Fetch data from your API here.
  const fetchData = await fetch(
    "https://65d55b523f1ab8c63436c590.mockapi.io/api/v1/tags"
  );
  const data = await fetchData.json();
  return data;
}

export default async function Tags() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}