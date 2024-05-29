import { useEffect, useState } from 'react';

import { getPlayersUsernames } from '../../modules/players/application/getPlayersUsernames';
import { PalyersRepository } from '../../modules/players/domain';

export const usePlayers = (repository: PalyersRepository) => {
	const [loading, setLoading] = useState(false);
	const [players, setPlayers] = useState<string[]>([]);

	const getAll = getPlayersUsernames(repository);

	useEffect(() => {
		const fetchPlayer = async () => {
			setLoading(true);
			const data = await getAll();
			setPlayers(data);
		};

		fetchPlayer().finally(() => setLoading(false));
	}, []);

	return { loading, players };
};
