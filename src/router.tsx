import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, Home, PlayerProfile } from './pages';
import { createChessApiPlayersRepository } from './modules/players/infra/ChessApiPlayersRepository';

const repository = createChessApiPlayersRepository();

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home repository={repository} />,
			},
			{
				path: '/:username',
				element: <PlayerProfile repository={repository} />,
			},
		],
	},
]);
