import React from 'react';

const CalendarSummary: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Calendar summary</h2>
      <SummaryTable />
    </div>
  );
};

const SummaryTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Number of Events</th>
          <th>Total duration [min]</th>
          <th>Longest event</th>
        </tr>
      </thead>
    </table>
  );
};

export default CalendarSummary;
