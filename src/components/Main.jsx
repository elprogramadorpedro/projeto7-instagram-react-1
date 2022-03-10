import Stories from './stories/Stories.jsx';
import Posts from './posts/Posts.jsx';

import axios from 'axios';
import { useState, useEffect } from 'react';

const CONTENT_URL = 'https://6229dbd9be12fc4538aa1be7.mockapi.io/api/v1/posts';

const filterRepeatedResults = (array) => {
	const imgMap = new Map();

	array.forEach((element) => {
		if (!imgMap.has(element.img)) {
			imgMap.set(element.img, element);
		}
	});
	return [...imgMap].map((pair) => pair[1]);
};

const fetchData = async (setData) => {
	try {
		const promise = await axios.get(CONTENT_URL);
		const filteredData = filterRepeatedResults(promise.data);
		setData(filteredData);
	} catch {}
};

const herokuAuthURL = `https://api.instagram.com/oauth/authorize
  ?client_id=3210481652610879
  &redirect_uri=https://projeto7-driven.herokuapp.com/
  &scope=user_profile,user_media
  &response_type=code`;

export default function Main() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData(setData);
	}, []);

	return (
		<main>
			<Stories content={data} />
			<Posts content={data} />
		</main>
	);
}
