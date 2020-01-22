import React, { useState } from "react";
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

const DatePick = ({ date = new Date(), handleDatePick = () => {} }) => {
  const monthName = date.toLocaleString("en-us", { month: "long" });
  const dayName = date.toLocaleString("en-us", { weekday: "long" });
  const tomorrow = new Date(date.getDate() + 1);
  const tomorrowDayName = tomorrow.toLocaleString("en-us", { weekday: "long" });
  const dayNumber = date.getDate();
  const today = new Date();

  return (
    <StyledDatePicker onBlur={() => console.log("blur")}>
      <h4 className="header">
        {dayNumber} {monthName}
      </h4>
      <OptionButton icon={<MdToday />} name="Today" details={dayName} />
      <OptionButton
        icon={<GiCutDiamond />}
        name="Tomorrow"
        details={tomorrowDayName}
      />
      <OptionButton icon={<MdNextWeek />} name="Nex week" details={dayName} />
      <OptionButton icon={<MdDoNotDisturbAlt />} name="No date" />
      <Calendar
        activeStartDate={today}
        defaultActiveStartDate={today}
        minDate={today}
        value={date}
        onChange={date => handleDatePick(date)}
        locale={"en"}
      />
    </StyledDatePicker>
  );
};

export default DatePick;
