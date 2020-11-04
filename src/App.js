import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi(); //creating instance inside of app

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl(); // get token from url
    //console.log("I have a hash", hash);
    window.location.hash = ""; //stripped it from url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token); //stored token inside state
      spotify.setAccessToken(_token); //giving access token to spotify api
      spotify.getMe().then((user) => {
        console.log("person", user);
      }); //function part of spotify api, gets user account
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
