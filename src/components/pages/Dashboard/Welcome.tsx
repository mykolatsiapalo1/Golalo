"use client";
import { Task } from "./Task";
import { useState } from "react";
import { UserCard } from "./UserCard";
import { ListingsStats } from "./ListingsStats";
import { Calendar } from "@/components/ui/calendar";
import { Divider } from "@/components/core/Divider";
import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";
import { LocationIcon, ApartmentIcon, RealEstateAgentIcon } from "@/icons";

export function Welcome() {
  const user = useGlobalStore(({ user }) => user);
  if (!user) return null;

  const { categoriesHired, location, type, owned, listings, tasks, messages } =
    user;

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-black-1 py-12 px-[120px]">
      <div className="max-w-[1200px] mx-auto grid gap-8">
        <div className="flex items-start justify-between">
          <Typography variant="32px/700/43.71px" className="text-white-1">
            Welcome back, <span className="text-accent">{user?.name}</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 items-center bg-[#FFFFFF0D] py-3 px-6 rounded-[12px]">
              <Typography variant="32px/700/43.71px" className="text-white-1">
                {messages.length}
              </Typography>
              <Typography variant="16px/600/21.86px" className="text-white-1">
                New Messages
              </Typography>
            </div>
            <div className="flex gap-3 items-center bg-[#FFFFFF0D] py-3 px-6 rounded-[12px]">
              <Typography variant="32px/700/43.71px" className="text-white-1">
                {listings.filter((listing) => !listing.completed).length}
              </Typography>
              <Typography variant="16px/600/21.86px" className="text-white-1">
                Open Listings
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 justify-between gap-16">
          <div className="grid gap-6 col-span-4 content-start">
            <UserCard />
            <ListingsStats />
            <Divider />
            <div className="grid gap-1">
              <Typography variant="14px/400/21px" className="text-white-3">
                Categories hired
              </Typography>
              <Typography variant="18px/700/24.59px" className="text-white-3">
                {categoriesHired.map(({ title }) => title).join(", ")}
              </Typography>
            </div>
            <Divider />
            <div className="grid grid-cols-2 gap-[16px_12px]">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <Typography variant="14px/400/21px" className="text-white-3">
                  From {location}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <ApartmentIcon />
                <Typography variant="14px/400/21px" className="text-white-3">
                  {type}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <RealEstateAgentIcon />
                <Typography variant="14px/400/21px" className="text-white-3">
                  {owned ? "Owned" : "Rented"}
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1.33fr,_1fr] col-span-8 rounded-[12px] overflow-hidden border border-[#FFFFFF26]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full h-full p-0 "
            />
            <div className="bg-[#FFFFFF0D] p-6 border-l border-[#FFFFFF26] grid gap-6 content-start">
              <Typography variant="18px/700/24.59px" className="text-white-1">
                Next Task
              </Typography>
              <div className="grid gap-3">
                {tasks.map((task, index) => (
                  <Task key={index} {...task} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
