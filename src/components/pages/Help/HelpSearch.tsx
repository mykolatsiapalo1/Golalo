"use client";
import { useState } from "react";
import { SearchIcon } from "@/icons";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/core/Typography";

const lastSearches = [
  "Posting a listing",
  "Changing my profile details",
  "Canceling a listing",
];

export function HelpSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-black-1 p-8">
      <div className="grid gap-8 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end">
          <Typography variant="32px/700/43.71px" className="text-white-1">
            How can we help?
          </Typography>
          <Typography
            variant="16px/700/21.86px"
            className="text-white-1 pb-1.5"
          >
            My Support Tickets
          </Typography>
        </div>
        <div className="grid gap-6">
          <Input
            variant="dark"
            placeholder="Search..."
            className="max-w-[500px] w-full"
            icon={<SearchIcon />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-4">
            {lastSearches.map((search) => (
              <div
                key={search}
                className="py-2 px-5 bg-[#FFFFFF1A] rounded-[32px] cursor-pointer"
                onClick={() => setSearch(search)}
              >
                <Typography variant="16px/700/21.86px" className="text-white-1">
                  {search}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
