"use client";
import { Listing } from "./Listing";
import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";

export function Listings() {
  const listings = useGlobalStore(({ user }) => user?.listings);
  if (!listings) return null;

  const openListings = listings.filter((listing) => !listing.completed);

  return (
    <div className="grid gap-6 content-start">
      <div className="flex items-center gap-3">
        <Typography variant="24px/800/32.78px">Open Listings</Typography>
        <div className="bg-[#FF712533] rounded-[8px] px-3 py-[3px]">
          <Typography variant="16px/600/21.86px" className="text-accent">
            {openListings.length}
          </Typography>
        </div>
      </div>
      <div className="grid gap-4">
        {openListings.map((listing) => (
          <Listing key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}
