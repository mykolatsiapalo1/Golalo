import {
  Logo,
  PlusIcon,
  ChatIcon,
  HearthIcon,
  NotificationIcon,
} from "@/icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserInfo } from "./UserInfo";
import { Typography } from "./Typography";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "My Listings",
    href: "/my-listings",
  },
];

export default function Header() {
  return (
    <header className="p-[26px_120px]">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <Typography
                      variant="16px/600/21.86px"
                      className="text-black-3"
                    >
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <PlusIcon />
            New Listing
          </Button>
          <Button variant="gray" size="icon">
            <HearthIcon />
          </Button>
          <Button variant="gray" size="icon" unRead>
            <NotificationIcon />
          </Button>
          <Button variant="gray" size="icon" unRead>
            <ChatIcon />
          </Button>
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
