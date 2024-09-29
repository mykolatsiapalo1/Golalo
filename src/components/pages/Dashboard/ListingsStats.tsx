import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";

export function ListingsStats() {
  const user = useGlobalStore(({ user }) => user);
  if (!user) return null;
  const { listings } = user;

  return (
    <div className="grid grid-cols-3">
      <div className="grid gap-1">
        <Typography variant="14px/400/21px" className="text-white-3">
          Posted Listings
        </Typography>
        <Typography variant="24px/800/32.78px" className="text-white-3">
          {listings.length}
        </Typography>
      </div>
      <div className="grid gap-1">
        <Typography variant="14px/400/21px" className="text-white-3">
          Open Listings
        </Typography>
        <Typography variant="24px/800/32.78px" className="text-white-3">
          {listings.filter((listing) => !listing.completed).length}
        </Typography>
      </div>
      <div className="grid gap-1">
        <Typography variant="14px/400/21px" className="text-white-3">
          Completed Listings
        </Typography>
        <Typography variant="24px/800/32.78px" className="text-white-3">
          {listings.filter((listing) => listing.completed).length}
        </Typography>
      </div>
    </div>
  );
}
