import { render, screen } from '@testing-library/react';
import { CalendarEvent } from '../../api-client';
import SummaryTableBody from '../SummaryTableBody';

describe('SummaryTableBody', () => {
  const events: CalendarEvent[][] = [
    [{ uuid: '1', durationInMinutes: 10, title: 'foo' }],
    [{ uuid: '2', durationInMinutes: 15, title: 'bar' }],
  ];
  const dates = [new Date(), new Date()];

  it('displays all the rows', () => {
    render(
      <table>
        <SummaryTableBody calendarEvents={events} dates={dates} />
      </table>
    );

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(events.length);
  });
});
