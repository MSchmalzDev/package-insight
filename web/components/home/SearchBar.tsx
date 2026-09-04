"use client";
import { useState } from "react";
import { Command, CommandInput } from "@/components/ui/command";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSearch() {
    if (value.trim() !== "") {
      router.push(`/map?query=${encodeURIComponent(value)}`);
    }
  }

  return (
    <Command className="w-full max-w-lg rounded-lg border border-border bg-background/50 backdrop-blur-md">
      <CommandInput
        placeholder="Search..."
        value={value}
        onValueChange={setValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </Command>
  );
}
