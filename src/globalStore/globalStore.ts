import { create } from "zustand";

enum UserRole {
  Household = "Household",
  Tradie = "Tradie",
  Admin = "Admin",
}

export interface IUser {
  id: number;
  name: string;
  lastName: string;
  tag: string;
  email: string;
  avatar: string;
  role: UserRole;
  notifications: {
    id: number;
    title: string;
    description: string;
    date: string;
    read: boolean;
  }[];
  categoriesHired: {
    id: number;
    title: string;
  }[];
  location: string;
  reviews: {
    id: number;
    rating: number;
  }[];
  type: string;
  owned: boolean;
  listings: {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    images: string[];
    priceType: string;
    startDate: string;
    endDate: string;
    status: string;
    hiredTradie: Pick<IUser, "name" | "avatar" | "tag">;
    location: string;
    completed: boolean;
    nextTask: IUser["tasks"][number];
  }[];
  tasks: {
    id: number;
    title: string;
    description: string;
    status: string;
    date: string;
    category: string;
    color: string;
  }[];
  messages: {
    id: number;
    title: string;
    date: string;
  }[];
}

const tasks: IUser["tasks"] = ["#FFFFFF", "#FF7125", "#DC3545"].map(
  (color, id) => ({
    id,
    title: `Task ${id + 1}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem leo, suscipit eget elit porttitor, volutpat consequat turpis. In interdum mauris et urna maximus, sed tincidunt nulla porta. Maecenas congue risus enim. Quisque egestas augue sem, nec egestas leo mattis ut. Phasellus non sem eu massa finibus volutpat. Vestibulum condimentum augue odio, in dapibus erat vehicula ut. Praesent ac massa at urna dignissim iaculis egestas ut felis. Nullam pharetra, lorem non congue fringilla, nisl ex ullamcorper nibh, nec vehicula nulla libero id dui. Pellentesque bibendum pulvinar tempor. Fusce sodales tincidunt ex, non aliquet arcu consectetur posuere. Mauris suscipit auctor tempor. Phasellus a finibus felis, vel porta nibh. Ut laoreet purus sed enim feugiat, non bibendum nunc semper. Cras aliquam velit in tincidunt pulvinar. Morbi vitae dictum nibh. Sed viverra nunc sit amet libero tincidunt euismod.`,
    status: "open",
    date: new Date(Date.now() + id * 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "Accounting",
    color,
  })
);

const listings: IUser["listings"] = Array.from(
  { length: 12 },
  (_, id) => ({
    id,
    title: "New Listing",
    category: "Accounting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem leo, suscipit eget elit porttitor, volutpat consequat turpis. In interdum mauris et urna maximus, sed tincidunt nulla porta. Maecenas congue risus enim. Quisque egestas augue sem, nec egestas leo mattis ut. Phasellus non sem eu massa finibus volutpat. Vestibulum condimentum augue odio, in dapibus erat vehicula ut.  Praesent ac massa at urna dignissim iaculis egestas ut felis. Nullam pharetra, lorem non congue fringilla, nisl ex ullamcorper nibh, nec vehicula nulla libero id dui. Pellentesque bibendum pulvinar tempor. Fusce sodales tincidunt ex, non aliquet arcu consectetur posuere. Mauris suscipit auctor tempor. Phasellus a finibus felis, vel porta nibh. Ut laoreet purus sed enim feugiat, non bibendum nunc semper. Cras aliquam velit in tincidunt pulvinar. Morbi vitae dictum nibh.  Sed viverra nunc sit amet libero tincidunt euismod.",
    price: 50,
    images: [
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    ],
    priceType: "Fixed Rate",
    startDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "open",
    hiredTradie: {
      name: "Jane Doe",
      avatar:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      tag: "janedoe",
    },
    location: "Sydney",
    completed: id > 1,
    nextTask: tasks[0],
  })
);

const reviews: IUser["reviews"] = Array.from({ length: 10 }, (_, id) => ({
  id,
  rating: 5,
}));

const messages: IUser["messages"] = Array.from(
  { length: 10 },
  (_, id) => ({
    id,
    title: "New Message",
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  })
);

const categoriesHired: IUser["categoriesHired"] = [
  "Accounting",
  "Architect",
  "Bricklayer",
].map((title, id) => ({ id, title }));

const notifications: IUser["notifications"] = Array.from({
  length: 3,
}).map((_, id) => ({
  id,
  title: "Notification Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem leo, suscipit eget elit porttitor, volutpat consequat turpis.",
  date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  read: false,
}));

const MOCK_USER: IUser = {
  id: 0,
  name: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  avatar:
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  tag: "johndoe",
  role: UserRole.Household,
  notifications,
  categoriesHired,
  location: "Sydney",
  reviews,
  type: "Apartment",
  owned: true,
  listings,
  tasks,
  messages,
};

export const useGlobalStore = create<{
  user: IUser | null;
  setUser: (user: IUser) => void;
  readNotification: (id: number) => void;
}>((set) => ({
  user: MOCK_USER,
  setUser: (user: IUser) => set({ user }),
  readNotification: (id: number) =>
    set((state) =>
      !state.user
        ? state
        : {
            user: {
              ...state.user,
              notifications: state.user.notifications.map((notification) =>
                notification.id === id && !notification.read
                  ? { ...notification, read: true }
                  : notification
              ),
            },
          }
    ),
}));
