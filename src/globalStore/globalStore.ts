import { create } from "zustand";

export interface IUser {
  id: string;
  name: string;
  lastName: string;
  tag: string;
  email: string;
  avatar: string;
  role: "Household" | "Tradie" | "Admin";
  notifications: {
    id: number;
    title: string;
    description: string;
    date: string;
    read: boolean;
  }[];
  categoriesHired: {
    title: string;
  }[];
  location: string;
  reviews: {
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
    hiredTradie: {
      name: string;
      avatar: string;
      tag: string;
    };
    location: string;
    completed: boolean;
    nextTask: {
      title: string;
      description: string;
      status: string;
      date: string;
      category: string;
      color: string;
    };
  }[];
  tasks: {
    title: string;
    description: string;
    status: string;
    date: string;
    category: string;
    color: string;
  }[];
  messages: {
    title: string;
    date: string;
  }[];
}

const MOCK_TASKS = ["#FFFFFF", "#FF7125", "#DC3545"].map((color, index) => ({
  title: `Task ${index + 1}`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem leo, suscipit eget elit porttitor, volutpat consequat turpis. In interdum mauris et urna maximus, sed tincidunt nulla porta. Maecenas congue risus enim. Quisque egestas augue sem, nec egestas leo mattis ut. Phasellus non sem eu massa finibus volutpat. Vestibulum condimentum augue odio, in dapibus erat vehicula ut. Praesent ac massa at urna dignissim iaculis egestas ut felis. Nullam pharetra, lorem non congue fringilla, nisl ex ullamcorper nibh, nec vehicula nulla libero id dui. Pellentesque bibendum pulvinar tempor. Fusce sodales tincidunt ex, non aliquet arcu consectetur posuere. Mauris suscipit auctor tempor. Phasellus a finibus felis, vel porta nibh. Ut laoreet purus sed enim feugiat, non bibendum nunc semper. Cras aliquam velit in tincidunt pulvinar. Morbi vitae dictum nibh. Sed viverra nunc sit amet libero tincidunt euismod.`,
  status: "open",
  date: new Date(Date.now() + index * 2 * 24 * 60 * 60 * 1000).toISOString(),
  category: "Accounting",
  color,
}));

const MOCK_LISTINGS: IUser["listings"] = Array.from(
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
    nextTask: MOCK_TASKS[0],
  })
);

const MOCK_REVIEWS: IUser["reviews"] = Array.from({ length: 10 }, (_) => ({
  rating: 5,
}));

const MOCK_MESSAGES: IUser["messages"] = Array.from({ length: 10 }, (_) => ({
  title: "New Message",
  date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
}));

const MOCK_CATEGORIES: IUser["categoriesHired"] = [
  "Accounting",
  "Architect",
  "Bricklayer",
].map((title) => ({ title }));

const MOCK_NOTIFICATIONS: IUser["notifications"] = Array.from({
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
  id: "1",
  name: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  avatar:
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  tag: "johndoe",
  role: "Household",
  notifications: MOCK_NOTIFICATIONS,
  categoriesHired: MOCK_CATEGORIES,
  location: "Sydney",
  reviews: MOCK_REVIEWS,
  type: "Apartment",
  owned: true,
  listings: MOCK_LISTINGS,
  tasks: MOCK_TASKS,
  messages: MOCK_MESSAGES,
};

export const useGlobalStore = create<{
  user: IUser | null;
  setUser: (user: IUser) => void;
  readNotification: (id: number) => void;
}>((set) => ({
  user: MOCK_USER,
  setUser: (user: IUser) => set({ user }),
  readNotification: (id: number) =>
    set((state) => {
      if (!state.user) return state;
      return {
        user: {
          ...state.user,
          notifications: state.user.notifications.map((notification) =>
            notification.id === id && !notification.read
              ? { ...notification, read: true }
              : notification
          ),
        },
      };
    }),
}));
