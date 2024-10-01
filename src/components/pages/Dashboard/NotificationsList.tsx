"use client";
import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";
import { Notification } from "./Notification";

export function NotificationsList() {
  const user = useGlobalStore(({ user }) => user);
  if (!user) return null;
  const { notifications } = user;
  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  );

  return (
    <div className="grid gap-6 content-start">
      <div className="flex items-center gap-3">
        <Typography variant="24px/800/32.78px">New Notifications</Typography>
        <div className="bg-[#FF712533] rounded-[8px] px-3 py-[3px]">
          <Typography variant="16px/600/21.86px" className="text-accent">
            {unreadNotifications.length}
          </Typography>
        </div>
      </div>
      <div className="grid gap-4">
        {unreadNotifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
    </div>
  );
}
