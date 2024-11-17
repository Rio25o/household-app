/* eslint-disable @typescript-eslint/no-unused-vars */
import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../calender.css";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import { Balance, CalendarContent, Transaction } from "../types";
import { calculateDailyBalances } from "../utils/financeCalculations";
import { formatCurrency } from "../utils/formatting";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

interface CalendarProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
}

const Calender = ({
  monthlyTransactions,
  setCurrentMonth,
  setCurrentDay,
}: CalendarProps) => {
  const events = [
    {
      title: "Meeting",
      start: "2024-11-09",
      income: 500,
      expense: 200,
      balance: 300,
    },
    {
      title: "Meeting",
      start: "2024-11-11",
      income: 300,
      expense: 200,
      balance: 100,
    },
  ];

  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  console.log(dailyBalances);

  const createCalendarEvents = (
    dailyBalances: Record<string, Balance>
  ): CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const { income, expense, balance } = dailyBalances[date];
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      };
    });
  };

  const calendarEvents = createCalendarEvents(dailyBalances);
  console.log(calendarEvents);

  const renderEventContent = (eventInfo: EventContentArg) => {
    console.log(eventInfo);
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    );
  };

  const handleDateSet = (datesetInfo: DatesSetArg) => {
    console.log(datesetInfo);
    setCurrentMonth(datesetInfo.view.currentStart);
  };

  const handleDateClick = (dateInfo: DateClickArg) => {
    console.log(dateInfo);
    setCurrentDay(dateInfo.dateStr);
  };

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={calendarEvents}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
      dateClick={handleDateClick}
    />
  );
};

export default Calender;
