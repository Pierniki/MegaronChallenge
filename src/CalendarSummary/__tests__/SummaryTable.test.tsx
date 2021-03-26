import { render, screen, waitFor } from '@testing-library/react';
import SummaryTable from '../SummaryTable';

describe('SummaryTableBody', () => {
  it('displays loading message while loading', async () => {
    render(<SummaryTable />);
    expect(screen.getByRole('heading')).toHaveTextContent('Loading...');
    await waitFor(() => screen.getByRole('table'));
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  it('displays table after loading completes', async () => {
    render(<SummaryTable />);
    await waitFor(() => screen.getByRole('table'));
    expect(screen.getByRole('table')).toBeDefined();
  });
});
