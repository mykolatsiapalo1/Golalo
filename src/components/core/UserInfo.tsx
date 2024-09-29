"use client";
import { useGlobalStore } from "@/globalStore/globalStore";

export function UserInfo() {
  const user = useGlobalStore((state) => state.user);

  return (
    <div className="border-2 border-white-2 rounded-full h-12 w-12 overflow-hidden">
      <img
        src={user?.avatar}
        alt="user avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
