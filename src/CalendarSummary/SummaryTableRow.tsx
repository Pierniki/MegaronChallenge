import { CalendarEvent } from '../api-client';
import { getFormatedDateString } from '../utility/date';
import { getEventsDurationSum, getLongestEvent } from '../utility/event';

interface SummaryTableRowProps {
  events: CalendarEvent[];
  date: Date;
}

const SummaryTableRow: React.FC<SummaryTableRowProps> = ({ events, date }) => {
  return (
    <tr>
      <td>{getFormatedDateString(date)}</td>
      <td>{events.length}</td>
      <td>{getEventsDurationSum(events)}</td>
      <td>{getLongestEvent(events).title}</td>
    </tr>
  );
};

export default SummaryTableRow;
