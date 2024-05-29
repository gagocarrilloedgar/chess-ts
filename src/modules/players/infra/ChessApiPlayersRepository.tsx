import { PLAYER_URL, TITLED_GM_URL } from '../../../constants';
import { PalyersRepository } from '../domain';
import { HttpPlayer, mapHttpPlayer } from './HttPlayer';

export const createChessApiPlayersRepository = (): PalyersRepository => {
	return { get, getPlayersUsernames };
};

const get = async (username: string) => {
	const response = await fetch(`${PLAYER_URL}${username}`);
	const data: HttpPlayer = await response.json();
	return mapHttpPlayer(data);
};

const getPlayersUsernames = async () => {
	const response = await fetch(TITLED_GM_URL);
	const data = await response.json();
	return data.players
};
