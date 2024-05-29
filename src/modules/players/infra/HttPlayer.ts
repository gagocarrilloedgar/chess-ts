import { COUNTRY_URL } from '../../../constants';
import { Player } from '../domain';

export interface HttpPlayer {
	'@id': string;
	avatar: string;
	country: string;
	followers: number;
	is_streamer: boolean;
	joined: number;
	last_online: number;
	league: string;
	location: string;
	name: string;
	player_id: number;
	status: string;
	streaming_platforms: string[];
	title: string;
	url: string;
	username: string;
	verified: boolean;
}

export const mapHttpPlayer = (player: HttpPlayer): Player => ({
	avatar: player.avatar,
	country: player.country.replace(COUNTRY_URL, ''),
	followers: player.followers,
	isStreamer: player.is_streamer,
	lastOnline: player.last_online * 1000,
	league: player.league,
	location: player.location,
	name: player.name,
	status: player.status,
	title: player.title,
	url: player.url,
	username: player.username,
	verified: player.verified,
});
