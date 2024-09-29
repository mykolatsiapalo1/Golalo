import { Listings } from "./Listings";
import { NotificationsList } from "./NotificationsList";

export function NotificationsAndListings() {
  return (
    <div className="px-[120px] py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr,_1.87fr] gap-16">
        <NotificationsList />
        <Listings />
      </div>
    </div>
  );
}
