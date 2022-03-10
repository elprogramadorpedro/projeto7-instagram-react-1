import NavBar from "./navbar/NavBar";
import Main from "./Main.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const testURL = `https://api.instagram.com/oauth/authorize
?client_id=3210481652610879
&redirect_uri=https://localhost:3000/
&scope=user_profile,user_media
&response_type=code`;

const instagramAuthentication = (setCode) => {
  if (window.location.href.includes("code")) {
    const authCode = window.location.href.substring(
      window.location.href.indexOf("=") + 1,
      window.location.href.indexOf("#")
    );
    setCode(authCode);
  } else {
    window.location.href = testURL;
  }
};

const getAccessToken = (code) => {
  const tokenURL = `https://api.instagram.com/oauth/access_token`;

  const promise = axios.post(tokenURL, {
    client_id: "3210481652610879",
    client_secret: "9e16fd6309812a737d24c66386bead85",
    grant_type: "authorization_code",
    redirect_uri: "https://localhost:3000/",
    code: code,
  });
  promise.then(() => {
    console.log(promise.response);
    console.log("aqui");
  });
  promise.catch((err) => console.log(err));
};

export default function App() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    instagramAuthentication(setCode);
  }, []);

  if (code) {
    getAccessToken(code);
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
