import Suggestion from './Suggestion.jsx';
import User from './User.jsx';

import '../../css/sidebar.css';

const suggestions = [
	{
		img: 'img/smallcutecats.svg',
		username: 'bad.vibe.memes',
		reason: 'Segue Você',
	},

	{
		img: 'img/smallcutecats.svg',
		username: 'bad.vibe.memes',
		reason: 'Segue Você',
	},
	{
		img: 'img/smallcutecats.svg',
		username: 'bad.vibe.memes',
		reason: 'Segue Você',
	},
	{
		img: 'img/smallcutecats.svg',
		username: 'bad.vibe.memes',
		reason: 'Segue Você',
	},
	{
		img: 'img/smallcutecats.svg',
		username: 'bad.vibe.memes',
		reason: 'Segue Você',
	},
];

export default function Sidebar(props) {
	return (
		<aside>
			<User user="Catana" username="catanacomics" img="img/catanacomics.svg" />
			<div className="suggestions">
				<div className="title">
					Sugestões para você
					<div>Ver tudo</div>
				</div>
				{suggestions.map((suggestion, index) => {
					return (
						<Suggestion
							username={suggestion.username}
							img={suggestion.img}
							reason={suggestion.reason}
							key={index}
						/>
					);
				})}
			</div>
			<div className="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações •
				Contas mais relevantes • Hashtags • Idioma
			</div>

			<div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</aside>
	);
}
