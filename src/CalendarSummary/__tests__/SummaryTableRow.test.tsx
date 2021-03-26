import { render, screen } from '@testing-library/react';
import { CalendarEvent } from '../../api-client';
import { getFormatedDateString } from '../../utility/date';
import { getEventsDurationSum, getLongestEvent } from '../../utility/event';
import SummaryTableRow from '../SummaryTableRow';

describe('SummaryTableRow', () => {
  const events: CalendarEvent[] = [
    { uuid: '1', durationInMinutes: 10, title: 'foo' },
    { uuid: '2', durationInMinutes: 15, title: 'bar' },
  ];
  const date = new Date();
  it('displays data correctly', () => {
    render(
      <table>
        <tbody>
          <SummaryTableRow events={events} date={date} />
        </tbody>
      </table>
    );

    const tds = screen.getAllByRole('cell');
    const dateCell = tds[0];
    const eventsAmountCell = tds[1];
    const durationSumCell = tds[2];
    const longestEventTitleCell = tds[3];

    expect(dateCell).toHaveTextContent(getFormatedDateString(date));
    expect(eventsAmountCell).toHaveTextContent(events.length.toString());
    expect(durationSumCell).toHaveTextContent(
      getEventsDurationSum(events).toString()
    );
    expect(longestEventTitleCell).toHaveTextContent(
      getLongestEvent(events).title
    );
  });
});
