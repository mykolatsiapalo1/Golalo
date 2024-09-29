import { EditIcon } from "@/icons";
import { formatDate } from "@/lib/utils";
import { IUser } from "@/globalStore/globalStore";
import { Typography } from "@/components/core/Typography";

export function Task({ color, title, date }: IUser["tasks"][number]) {
  return (
    <div className="grid gap-4 grid-flow-col grid-cols-[auto_1fr_auto] items-center border-[1.5px] border-[#FFFFFF26] rounded-[12px] p-4">
      <div
        className={`w-1.5 h-1.5 rounded-full`}
        style={{ background: color }}
      />
      <div className="grid gap-0.5">
        <Typography variant="14px/700/19.12px" className="text-white-3">
          {title}
        </Typography>
        <Typography variant="16px/600/21.86px" className="text-white-3">
          {formatDate(date)}
        </Typography>
      </div>
      <EditIcon />
    </div>
  );
}
