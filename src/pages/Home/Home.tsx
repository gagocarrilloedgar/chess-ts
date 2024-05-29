import './Home.css';

import { usePlayers } from './usePlayers';

import { Loader } from '../../components';
import { PalyersRepository } from '../../modules/players/domain';

interface HomeProps {
	repository: PalyersRepository;
}
export const Home = ({ repository }: HomeProps) => {
	const { players, loading } = usePlayers(repository);

	if (loading) return <Loader />;

	if (!players.length) return <div>No players found</div>;

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Players</h1>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						overflow: 'auto',
						maxHeight: '50vh',
					}}>
					{players.map((player) => (
						<a key={player} href={`/${player}`} rel="noopener noreferrer">
							<p>{player}</p>
						</a>
					))}
				</div>
			</header>
		</div>
	);
};
