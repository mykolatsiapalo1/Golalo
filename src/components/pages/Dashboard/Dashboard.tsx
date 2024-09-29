import { Welcome } from "./Welcome";
import { NotificationsAndListings } from "./NotificationsAndListings";

export function Dashboard() {
  return (
    <div>
      <Welcome />
      <NotificationsAndListings />
    </div>
  );
}
