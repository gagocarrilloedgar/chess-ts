import { render } from '@testing-library/react';
import { PlayerProfile } from '../../../src/pages';
import { mockedRepository } from '../fixtures/playersRepository';
import { vi } from 'vitest';
import { useParams } from 'react-router-dom';

vi.mock('react-router-dom');

describe('Players profile', () => {
	it('renders the Players component', async () => {
		vi.mocked(useParams).mockReturnValue({ username: 'player1' });

		const { getByText } = render(<PlayerProfile repository={mockedRepository} />);

		await vi.waitFor(() => expect(getByText('Player 1')).toBeInTheDocument());
	});

	it('renders "No player found" when there is no player', async () => {
		vi.mocked(useParams).mockReturnValue({ username: undefined });

		const { getByText } = render(<PlayerProfile repository={mockedRepository} />);

		await vi.waitFor(() => expect(getByText('No player found')).toBeInTheDocument());
	});
});
