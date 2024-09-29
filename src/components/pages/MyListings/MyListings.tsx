"use client";
import { Listing } from "../Dashboard/Listing";
import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MyListings() {
  const user = useGlobalStore(({ user }) => user);
  if (!user) return null;

  const { listings } = user;
  const activeListings = listings.filter((listing) => !listing.completed);
  const inactiveListings = listings.filter((listing) => listing.completed);

  const tabs = [
    {
      name: "Active",
      listings: activeListings,
    },
    {
      name: "Inactive",
      listings: inactiveListings,
    },
  ];

  return (
    <div className="max-w-[790px] mx-auto grid gap-8 py-12">
      <Typography variant="32px/700/43.71px" className="text-black-2">
        My Listings
      </Typography>

      <Tabs defaultValue={tabs.at(0)?.name} className="grid gap-6">
        <TabsList className="grid w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.name} value={tab.name}>
              <div className="flex items-center gap-1.5 pb-4 text-inherit">
                <Typography variant="16px/700/21.86px" className="text-inherit">
                  {tab.name}
                </Typography>
                <div className="bg-[color-mix(in_srgb,_currentColor_20%,_transparent)] rounded-[4px] px-2.5 py-1.5 text-inherit">
                  <Typography
                    variant="14px/600/19.12px"
                    className="text-inherit"
                  >
                    {tab.listings.length}
                  </Typography>
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.name} value={tab.name}>
            <div className="grid gap-4">
              {tab.listings.map((listing) => (
                <Listing key={listing.id} {...listing} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
