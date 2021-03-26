import { render, screen } from '@testing-library/react';
import { CalendarEvent } from '../../api-client';
import {
  getTotalEventsDuration,
  getTotalEventsNumber,
  getTotalLongestEvent,
} from '../../utility/event';
import SummaryTableFooter from '../SummaryTableFooter';

describe('SummaryTableFooter', () => {
  const events: CalendarEvent[][] = [
    [{ uuid: '1', durationInMinutes: 10, title: 'foo' }],
    [{ uuid: '2', durationInMinutes: 15, title: 'bar' }],
  ];
  it('displays data correctly', () => {
    render(
      <table>
        <SummaryTableFooter calendarEvents={events} />
      </table>
    );

    const tds = screen.getAllByRole('cell');
    const helperCell = tds[0];
    const eventsAmountCell = tds[1];
    const durationSumCell = tds[2];
    const longestEventTitleCell = tds[3];

    expect(helperCell).toHaveTextContent('Total');
    expect(eventsAmountCell).toHaveTextContent(
      getTotalEventsNumber(events).toString()
    );
    expect(durationSumCell).toHaveTextContent(
      getTotalEventsDuration(events).toString()
    );
    expect(longestEventTitleCell).toHaveTextContent(
      getTotalLongestEvent(events).title
    );
  });
});
