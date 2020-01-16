import { FaInbox, FaRegCalendar, FaRegCalendarAlt } from "react-icons/fa";
import React from "react";

export const taskSeparators = [
  { icon: <FaInbox />, key: "INBOX", name: "Inbox" },
  { icon: <FaRegCalendar />, key: "TODAY", name: "Today" },
  { icon: <FaRegCalendarAlt />, key: "NEXT7", name: "Next 7 Days" }
];
