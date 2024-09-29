import Image from "next/image";
import { StarIcon } from "@/icons";
import { Typography } from "@/components/core/Typography";
import { useGlobalStore } from "@/globalStore/globalStore";

export function UserCard() {
  const user = useGlobalStore(({ user }) => user);

  if (!user) return null;
  const { avatar, name, lastName, tag, role, reviews } = user;

  return (
    <div className="flex items-start gap-4">
      <Image
        src={avatar}
        alt="avatar"
        width={72}
        height={72}
        className="rounded-full"
      />
      <div className="grid gap-2">
        <div className="flex items-center gap-3">
          <Typography variant="24px/800/32.78px" className="text-white-1">
            {name} {lastName}
          </Typography>
          <Typography variant="14px/500/19.12px" className="text-white-1">
            @{tag}
          </Typography>
        </div>
        <div className="flex items-center gap-2 border border-[#FFFFFF1A] rounded-full py-1.5 px-3 w-fit">
          <Typography variant="14px/400/21px" className="text-white-1">
            {role}
          </Typography>
          <Typography variant="14px/400/21px" className="text-white-1">
            •
          </Typography>
          <div className="flex items-center">
            <StarIcon />
            <Typography variant="14px/400/21px" className="text-white-1">
              {reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length}
            </Typography>
            <Typography variant="14px/400/21px" className="text-white-1">
              ({reviews.length})
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
