import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  * {
    outline: none;
  }

  .DayPicker {
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.0986943);
    border-radius: 16px;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  /*  */
  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--selected {
    background: #7643ff !important;
    border-radius: 10px;
    color: #ffffff !important;
  }
`;
