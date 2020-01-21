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

  .picker {
    font-size: 13px;
    background-color: red;
  }
`;

const DatePick = ({ date = new Date(), handleDatePick }) => {
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  return (
    <StyledDatePicker>
      <p>
        {day} {month}
      </p>
      <OptionButton icon={<MdToday />} name="Today" />
      <OptionButton icon={<GiCutDiamond />} name="Tomorrow" />
      <OptionButton icon={<MdNextWeek />} name="Nex week" />
      <OptionButton icon={<MdDoNotDisturbAlt />} name="No date" />
      <Calendar onChange={date => handleDatePick(date)} />
    </StyledDatePicker>
  );
};

export default DatePick;
