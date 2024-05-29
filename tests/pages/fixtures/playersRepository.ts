import { vi } from 'vitest';
import { PalyersRepository } from '../../../src/modules/players/domain';

export const mockedRepository: PalyersRepository = {
	get: vi.fn().mockResolvedValue({
		avatar: 'https://player1.com/avatar',
		username: 'player1',
		country: 'es',
		followers: 100,
		isStreamer: true,
		lastOnline: new Date('2024-05-29T12:00:00').getTime(),
		league: 'diamond',
		location: 'Madrid',
		name: 'Player 1',
		status: 'active',
		title: 'champion',
		url: 'https://player1.com',
		verified: true,
	}),
	getPlayersUsernames: vi.fn().mockResolvedValue(['player1', 'player2']),
};
