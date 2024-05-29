import { Player } from './Player';

export interface PalyersRepository {
	get: (username: string) => Promise<Player | null>;
	getPlayersUsernames: () => Promise<string[]>;
}
