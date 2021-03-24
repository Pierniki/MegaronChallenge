import React from 'react';
import SummaryTable from './SummaryTable';

const CalendarSummary: React.FunctionComponent = () => {
  return (
    <div className="calendar-summary">
      <h2>Calendar summary</h2>
      <SummaryTable />
    </div>
  );
};

export default CalendarSummary;
