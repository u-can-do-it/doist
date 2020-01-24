import { FaInbox, FaRegCalendar, FaRegCalendarAlt } from "react-icons/fa";
import React from "react";

export const TASK_SEPARATORS = [
  { icon: <FaInbox />, key: "inbox", name: "Inbox" },
  { icon: <FaRegCalendar />, key: "today", name: "Today" },
  { icon: <FaRegCalendarAlt />, key: "next_7", name: "Next 7 Days" }
];
