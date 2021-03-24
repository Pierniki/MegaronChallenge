import React, { useEffect, useMemo, useState } from 'react';
import getCalendarEvents, { CalendarEvent } from '../api-client';
import { getDatesArray } from '../utility/date';
import SummaryTableBody from './SummaryTableBody';
import SummaryTableFoot from './SummaryTableFooter';
import SummaryTableHead from './SummaryTableHead';

const SummaryTable: React.FC = () => {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[][]>([]);
  const dates = useMemo(() => getDatesArray(7), []);

  const getCallendarEventsByDates = async (dates: Date[]) => {
    const promisesArray = dates.map((date) => getCalendarEvents(date));
    const allCalendarEvents = await Promise.all(promisesArray);
    setCalendarEvents(allCalendarEvents);
  };

  useEffect(() => {
    getCallendarEventsByDates(dates);
  }, [dates]);

  return (
    <table>
      <SummaryTableHead />
      <SummaryTableBody calendarEvents={calendarEvents} dates={dates} />
      <SummaryTableFoot calendarEvents={calendarEvents} />
    </table>
  );
};

export default SummaryTable;
