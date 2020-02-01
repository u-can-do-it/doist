import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

import OptionButton from "../option-button.js/OptionButton";

import { MdToday, MdNextWeek, MdDoNotDisturbAlt } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";

const StyledDatePicker = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;

  svg {
    width: 24px;
    height: 24px;
  }

  .picker {
    font-size: 13px;
    background-color: red;
  }

  .header {
    text-align: center;
    margin-bottom: 5px;
  }
`;

const DatePick = ({ currentDate, onDatePick }) => {
  const date = currentDate instanceof Date ? currentDate : new Date();
  const monthName = date.toLocaleString("en-us", { month: "long" });
  const dayName = date.toLocaleString("en-us", { weekday: "long" });
  const dayNumber = date.getDate();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7));
  const nextWeekDay = nextWeek.toLocaleString("en-us", { weekday: "long" });
  const tomorrowDayName = tomorrow.toLocaleString("en-us", { weekday: "long" });

  return (
    <StyledDatePicker>
      <h4 className="header">
        {dayNumber} {monthName}
      </h4>
      <OptionButton
        icon={<MdToday />}
        name="Today"
        details={dayName}
        onClick={() => onDatePick(today)}
        type="button"
      />
      <OptionButton
        icon={<GiCutDiamond />}
        name="Tomorrow"
        details={tomorrowDayName}
        onClick={() => onDatePick(tomorrow)}
        type="button"
      />
      <OptionButton
        icon={<MdNextWeek />}
        name="Nex week"
        details={nextWeekDay}
        onClick={() => onDatePick(nextWeek)}
        type="button"
      />
      <OptionButton
        icon={<MdDoNotDisturbAlt />}
        name="No date"
        type="button"
        onClick={() => onDatePick("")}
      />
      <Calendar
        activeStartDate={date}
        defaultActiveStartDate={today}
        minDate={today}
        value={date}
        onChange={date => onDatePick(date)}
        locale={"en"}
      />
    </StyledDatePicker>
  );
};

export default DatePick;
