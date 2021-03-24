import React from 'react';

const SummaryTableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Number of Events</th>
        <th>Total duration [min]</th>
        <th>Longest event</th>
      </tr>
    </thead>
  );
};

export default SummaryTableHead;
