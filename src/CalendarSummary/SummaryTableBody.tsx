import { CalendarEvent } from '../api-client';
import SummaryTableRow from './SummaryTableRow';

interface SummaryTableBodyProps {
  calendarEvents: CalendarEvent[][];
  dates: Date[];
}

const SummaryTableBody: React.FC<SummaryTableBodyProps> = ({
  calendarEvents,
  dates,
}) => {
  return (
    <tbody>
      {calendarEvents.map((events, idx) => {
        return (
          <SummaryTableRow
            key={`event_summary_${idx}`}
            events={events}
            date={dates[idx]}
          />
        );
      })}
    </tbody>
  );
};

export default SummaryTableBody;
