import Image from "next/image";
import { IUser } from "@/globalStore/globalStore";
import { daysAgo, formatDate } from "@/lib/utils";
import { Typography } from "@/components/core/Typography";
import { CalendarIcon, HourGlassIcon, MoreIcon } from "@/icons";

export function Listing({
  title,
  category,
  description,
  price,
  images,
  priceType,
  startDate,
  endDate,
  hiredTradie,
  location,
  nextTask,
}: IUser["listings"][number]) {
  return (
    <div>
      <div className="grid gap-4 border border-[#0000001A] rounded-[12px_12px_0_0] p-6">
        <div className="flex items-start justify-between">
          <Typography variant="24px/800/32.78px">{title}</Typography>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Typography variant="16px/600/21.86px" className="text-black-5">
                {location}
              </Typography>
              <div className="h-1 w-1 rounded-full bg-black-5" />
              <Typography variant="16px/600/21.86px" className="text-black-5">
                {daysAgo(startDate)} days ago
              </Typography>
            </div>
            <MoreIcon />
          </div>
        </div>
        <div className="px-3 py-1.5 border border-[#0000001A] rounded-full w-fit">
          <Typography variant="14px/400/21px" className="text-black-5">
            {category}
          </Typography>
        </div>
        <Typography
          variant="16px/400/24px"
          className="text-black-5 truncate-lines-3"
        >
          {description}
        </Typography>
        <div className="grid gap-3">
          <Typography variant="18px/700/24.59px" className="text-black-4">
            Uploaded media
          </Typography>
          <div className="flex gap-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`uploaded media ${index}`}
                width={80}
                height={80}
                className="rounded-[12px]"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-1 items-end gap-2">
            <Typography variant="24px/800/32.78px">A$ {price}</Typography>
            <Typography variant="16px/400/21.86px" className="text-black-5">
              {priceType}
            </Typography>
          </div>
          <div className="flex items-center gap-1.5">
            <HourGlassIcon />
            <Typography variant="16px/700/21.86px" className="text-black-4">
              {(() => {
                const daysLeft = daysAgo(endDate);
                if (daysLeft > 6) {
                  const weeks = Math.floor(daysLeft / 7);
                  return `Ends in ${weeks} ${weeks === 1 ? "week" : "weeks"}`;
                } else {
                  return `Ends in ${daysLeft} ${
                    daysLeft === 1 ? "day" : "days"
                  }`;
                }
              })()}
            </Typography>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <Typography variant="16px/700/21.86px" className="text-black-4">
              {formatDate(startDate, "short")} - {formatDate(endDate, "short")}
            </Typography>
          </div>
        </div>
      </div>
      <div className="border border-[#0000001A] rounded-[0_0_12px_12px] p-6">
        <div className="grid grid-cols-2 items-start">
          <div className="grid gap-3">
            <Typography variant="14px/500/19.12px" className="text-black-5">
              Hired Tradie
            </Typography>
            <div className="flex items-center gap-3">
              <img
                src={hiredTradie.avatar}
                alt={hiredTradie.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <Typography variant="18px/600/24.59px" className="text-black-2">
                  {hiredTradie.name}
                </Typography>
                <Typography variant="14px/500/19.12px" className="text-black-4">
                  {hiredTradie.tag}
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <Typography variant="16px/700/21.86px" className="text-black-5">
              Next Task
            </Typography>
            <div>
              <Typography variant="18px/600/24.59px" className="text-black-2">
                {nextTask.title}
              </Typography>
              <Typography variant="14px/500/19.12px" className="text-black-4">
                {formatDate(nextTask.date, "shortWithTime")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
