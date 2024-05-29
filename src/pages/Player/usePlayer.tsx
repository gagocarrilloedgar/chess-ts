import { useEffect, useState } from 'react';
import { get } from '../../modules/players/application/get';
import { PalyersRepository, Player } from '../../modules/players/domain';

export const usePlayer = (repository: PalyersRepository, username: string | undefined) => {
	const getPlayer = get(repository);

	const [loading, setLoading] = useState(false);
	const [player, setPlayer] = useState<Player | undefined>(undefined);

	useEffect(() => {
		if (!username) return;

		const fetchPlayer = async () => {
			setLoading(true);
			const response = await getPlayer(username);
			if (!response) return;
			setPlayer(response);
		};

		fetchPlayer().finally(() => setLoading(false));
	}, [username]);

	return { loading, player };
};
