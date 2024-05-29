import { MdOutlineVerified, MdOutlineVideocam } from 'react-icons/md';

import { Player } from '../../modules/players/domain';

interface ProfileBadge {
	player: Player;
}

export const ProfileBadge = ({ player }: ProfileBadge) => {
	return (
		<>
			<img
				src={player.avatar ?? 'https://placehold.co/400'}
				alt={player.username}
				style={{ width: 200, borderRadius: '50%' }}
			/>
			<section
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					paddingTop: 10,
					gap: 5,
				}}>
				<a href={player.url} target="_blank" rel="noopener noreferrer">
					{player.username}
				</a>
				{!player.verified && <MdOutlineVerified color="white" size="1.2em" />}
				{!player.isStreamer && <MdOutlineVideocam color="white" size="1.2em" />}
			</section>
		</>
	);
};
