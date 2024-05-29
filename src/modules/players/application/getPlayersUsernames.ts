import { PalyersRepository } from '../domain';

export function getPlayersUsernames(plauersRepository: PalyersRepository) {
	return async function (): Promise<string[]> {
		return plauersRepository.getPlayersUsernames();
	};
}
