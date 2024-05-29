import { useEffect, useState } from 'react';

import { Loader, Item } from '../../components';

import { getTimeDifference } from '../../modules/players/domain';

export const Timer = ({ lastOnline }: { lastOnline?: number }) => {
	const [timeDifference, setTimeDifference] = useState<string | undefined>();

	useEffect(() => {
		if (!lastOnline) return;

		const interval = setInterval(() => {
			setTimeDifference(getTimeDifference(Date.now(), lastOnline));
		}, 1000);

		return () => clearInterval(interval);
	}, [lastOnline]);

	if (!timeDifference) return <Loader />;

	return <Item label="Last Online" value={timeDifference} />;
};
