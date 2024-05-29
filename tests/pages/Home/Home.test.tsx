import { render, waitFor } from '@testing-library/react';

import { Home } from '../../../src/pages';
import { mockedRepository } from '../fixtures/playersRepository';

describe('Home', () => {
	it('renders the Home component', async () => {
		const { getByText } = render(<Home repository={mockedRepository} />);

		await waitFor(() => {
			expect(getByText('Players')).toBeInTheDocument();
			expect(getByText('player1')).toBeInTheDocument();
		});
	});
});
