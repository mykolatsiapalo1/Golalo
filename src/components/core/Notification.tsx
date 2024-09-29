"use client";

import { CrossIcon } from "@/icons";
import { Typography } from "./Typography";
import { formatTimeAgo } from "@/lib/utils";
import { IUser, useGlobalStore } from "@/globalStore/globalStore";

export function Notification({
  id,
  title,
  description,
  date,
}: IUser["notifications"][number]) {
  const readNotification = useGlobalStore(
    ({ readNotification }) => readNotification
  );

  return (
    <div className="grid grid-flow-col justify-between items-center gap-6 p-6 bg-white-2 rounded-[12px]">
      <div className="grid gap-3">
        <Typography variant="16px/700/21.86px" className="text-black-3">
          {title}
        </Typography>
        <Typography variant="14px/400/21px" className="text-black-3">
          {description}
        </Typography>
      </div>
      <div className="grid h-full content-between">
        <CrossIcon
          onClick={() => readNotification(id)}
          className="cursor-pointer"
        />
        <Typography variant="14px/400/21px" className="text-black-5">
          {formatTimeAgo(date)}
        </Typography>
      </div>
    </div>
  );
}
