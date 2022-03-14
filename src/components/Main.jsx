import Stories from "./stories/Stories.jsx";
import Posts from "./posts/Posts.jsx";

import axios from "axios";
import { useState, useEffect } from "react";

const MOCK_URL = "https://6229dbd9be12fc4538aa1be7.mockapi.io/api/v1/posts";

const fetchMockData = async (setData) => {
  try {
    const promise = await axios.get(MOCK_URL);
    const filteredData = filterRepeatedResults(promise.data);
    setData(filteredData);
  } catch {}
};

const filterRepeatedResults = (array) => {
  const imgMap = new Map();

  array.forEach((element) => {
    if (!imgMap.has(element.media_url)) {
      imgMap.set(element.media_url, element);
    }
  });
  return [...imgMap].map((pair) => pair[1]);
};

export default function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMockData(setData);
  }, []);

  return (
    <main>
      <Stories content={data} />
      <Posts content={data} />
    </main>
  );
}
