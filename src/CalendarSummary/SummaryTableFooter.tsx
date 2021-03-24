import React from 'react';
import { CalendarEvent } from '../api-client';
import {
  getTotalEventsDuration,
  getTotalEventsNumber,
  getTotalLongestEvent,
} from '../utility/event';

interface SummaryTableFooterProps {
  calendarEvents: CalendarEvent[][];
}

const SummaryTableFoot: React.FC<SummaryTableFooterProps> = ({
  calendarEvents,
}) => {
  return (
    <tfoot>
      <tr>
        <td>Total</td>
        <td>{getTotalEventsNumber(calendarEvents)}</td>
        <td>{getTotalEventsDuration(calendarEvents)}</td>
        <td>{getTotalLongestEvent(calendarEvents).title}</td>
      </tr>
    </tfoot>
  );
};

export default SummaryTableFoot;
