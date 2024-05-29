export interface Player {
	avatar: string;
	country: string;
	followers: number;
	isStreamer: boolean;
	lastOnline: number;
	league: string;
	location: string;
	name: string;
	status: string;
	title: string;
	url: string;
	username: string;
	verified: boolean;
}

export const getTimeDifference = (currentTime: number, lastOnlineTime?: number) => {
	if (!lastOnlineTime) return;

	const currentTimeStampSeconds = Math.floor(currentTime / 1000);
	const lastOnlineTimeStampSeconds = Math.floor(lastOnlineTime / 1000);
	const timeDifference = currentTimeStampSeconds - lastOnlineTimeStampSeconds;
	const hours = Math.floor(timeDifference / 60 / 60);
	const minutes = Math.floor(timeDifference / 60) % 60;
	const seconds = Math.floor(timeDifference) % 60;
	return `${hours}h ${minutes}m ${seconds}s ago`;
};
