import { useParams } from 'react-router-dom';

import { Timer } from './Timer';
import { usePlayer } from './usePlayer';
import { ProfileBadge } from './ProfileBadge';

import { Loader, Item } from '../../components';

import { PalyersRepository } from '../../modules/players/domain';

interface PlayerProfileProps {
	repository: PalyersRepository;
}

export const PlayerProfile = ({ repository }: PlayerProfileProps) => {
	const { username } = useParams();
	const { player, loading } = usePlayer(repository, username);

	if (loading) return <Loader />;

	if (!player) return <div>No player found</div>;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
			}}>
			<ProfileBadge player={player} />
			<Item label="Name" value={player.name} />
			<Item label="Location" value={player.location} />
			<Item label="Country" value={player.country} />
			<Item label="Followers" value={player.followers} />
			<Item label="League" value={player.league} />
			<Item label="Title" value={player.title} />
			<Item label="Status" value={player.status} />
			<Timer lastOnline={player.lastOnline} />
		</div>
	);
};
