import React from "react";
import {
  LuCalendarPlus,
  LuCalendarSearch,
  LuChartColumn,
  LuUserCog,
} from "react-icons/lu";
const links = [
  {
    text: "Add Campaign",
    path: "add-campaign",
    icon: <LuCalendarPlus />,
  },
  {
    text: "All Campaigns",
    path: "all-campaigns",
    icon: <LuCalendarSearch />,
  },
  {
    text: "Stats",
    path: "stats",
    icon: <LuChartColumn />,
  },
  {
    text: "Profile",
    path: "profile",
    icon: <LuUserCog />,
  },
];

export default links;
