import React, { useState, useCallback, useMemo } from "react";
import DayPicker, { DayModifiers } from "react-day-picker";
import "react-day-picker/lib/style.css";

import { CalendarContainer } from "../../styles/components/Calendar";

interface Iprops {
  selectedDate: any, 
  setSelectedDate: Function
}

const Calendar = ({selectedDate, setSelectedDate}: Iprops) => {
  
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }

    console.log(day);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
    console.log(month);
  }, []);

  return (
    <CalendarContainer>
      <DayPicker
        weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
        fromMonth={new Date()}
        modifiers={{
          available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
        }}
        onMonthChange={handleMonthChange}
        selectedDays={selectedDate}
        onDayClick={handleDateChange}
        months={[
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ]}
      />
    </CalendarContainer>
  );
};

export default Calendar;
