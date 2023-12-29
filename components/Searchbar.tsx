"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  }
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search WIki..."
          className="p-2 rounded-lg text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="flex gap-2 items-center bg-black p-2 rounded-lg">
          Search
          <Search />
        </button>
      </form>
    </div>
  );
}
