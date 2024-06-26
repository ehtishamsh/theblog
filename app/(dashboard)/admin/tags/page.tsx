import GetPath from "@/components/adminPage/GetPath";
import Tags from "@/components/adminPage/Tags";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { authOptions } from "@/lib/auth";
import { Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  if (session == null || session.user?.role !== "admin") {
    return redirect("/sign-in");
  } else {
    return (
      <div className="mt-8 px-5 flex flex-col gap-5">
        <GetPath />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight max-sm:text-xl">
              Tags
            </h1>
            <span className="text-sm text-muted-foreground">
              Manage the tags.
            </span>
          </div>
          <Link
            href={"/admin/tags/new"}
            className="flex items-center gap-5 bg-foreground max-sm:text-sm text-black border-placeholder-default border px-3 py-2 rounded-lg"
          >
            <Plus className="w-5 h-5 max-sm:w-4 max-sm:h-4" /> Add
          </Link>
        </div>
        <DropdownMenuSeparator />
        <Tags />
        <DropdownMenuSeparator />
      </div>
    );
  }
}
export default page;
