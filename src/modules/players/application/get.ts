import { PalyersRepository, Player } from '../domain';

export function get(plauersRepository: PalyersRepository) {
	return async function (username?: string): Promise<Player | null> {
		if (!username) return null;

		return plauersRepository.get(username);
	};
}
