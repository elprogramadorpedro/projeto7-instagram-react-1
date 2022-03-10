import NavBar from './navbar/NavBar';
import Main from './Main.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

import { useState, useEffect } from 'react';

const testURL = `https://api.instagram.com/oauth/authorize
?client_id=3210481652610879
&redirect_uri=https://localhost:3000/
&scope=user_profile,user_media
&response_type=code`;

const instagramAuthentication = (setCode) => {
	if (window.location.href.includes('code')) {
		const authCode = window.location.href.substring(
			window.location.href.indexOf('=') + 1,
			window.location.href.indexOf('#')
		);
		setCode(authCode);
	} else {
		window.location.href = testURL;
	}
};

function exchangeAuthToken(code, setToken) {
	const url = 'https://api.instagram.com/oauth/access_token';
	const xhr = new XMLHttpRequest();
	xhr.open('POST', url);

	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			// console.log(xhr.status);
			// console.log(xhr.responseText);
			setToken(xhr.responseText);
		}
	};

	const data = `client_id=3210481652610879&client_secret=9e16fd6309812a737d24c66386bead85&grant_type=authorization_code&redirect_uri=https://localhost:3000/&code=${code}`;

	xhr.send(data);
}

function getUserData(token) {
	const url =
		'https://graph.instagram.com/me/media?fields=username,caption,media_url,media_type&access_token=IGQVJYN0VmOE5veTd5LWhhbWR1b2txMEM3YTFVeTJVT3MxYkxheE5HTWtTb0FvdWxGVDV1OTlIcTg4NjUySkVaYWlpVXN4YnA5OHlWMG85a3JoUVN2bTlKY3ZApTTJZAbWMzS1FPWFRBaFdXVFE1Q0RXY2V4Y040YXhBbnhZA';

	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log('user data');
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	};

	xhr.send();
}

export default function App() {
	const [code, setCode] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		instagramAuthentication(setCode);
	}, []);

	if (code && !token) {
		exchangeAuthToken(code, setToken);
	}

	if (token) {
		// console.log(token);
		getUserData(token);
	}

	return (
		<>
			<NavBar />
			<div className="page_body">
				<Main />
				<Sidebar />
			</div>
		</>
	);
}
