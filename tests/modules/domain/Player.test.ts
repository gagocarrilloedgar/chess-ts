import { getTimeDifference } from '../../../src/modules/players/domain';

describe('Player domain', () => {
	it('Correctly returns the time difference', () => {
		const lastOnline = new Date('2024-03-29T12:00:00').getTime();
		const currentTime = new Date('2024-03-30T12:00:00').getTime();
		const expectedTimeDifference = "24h 0m 0s ago";

		const timeDifference = getTimeDifference(currentTime, lastOnline);


		expect(timeDifference).toEqual(expectedTimeDifference);
	});
});
