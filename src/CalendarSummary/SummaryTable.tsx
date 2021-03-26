import React from 'react';
import getCalendarEvents from '../api-client';
import usePromises from '../hooks/usePromises';
import { getDatesArray } from '../utility/date';
import SummaryTableBody from './SummaryTableBody';
import SummaryTableFoot from './SummaryTableFooter';
import SummaryTableHead from './SummaryTableHead';

const SummaryTable: React.FC = () => {
  const dates = getDatesArray();
  const eventsPromises = dates.map((date) => getCalendarEvents(date));

  const { data: calendarEvents, isLoading, error } = usePromises(
    eventsPromises
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Oops! Something went wrong while fetching data.</h3>;

  return (
    <table>
      <SummaryTableHead />
      <SummaryTableBody calendarEvents={calendarEvents} dates={dates} />
      <SummaryTableFoot calendarEvents={calendarEvents} />
    </table>
  );
};

export default SummaryTable;
