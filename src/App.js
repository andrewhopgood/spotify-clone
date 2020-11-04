import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //creating instance inside of app

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); //items in {} are values we pull from data layer

  useEffect(() => {
    const hash = getTokenFromUrl(); // get token from url
    //console.log("I have a hash", hash);
    window.location.hash = ""; //stripped it from url
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token); //giving access token to spotify api
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }); //function part of spotify api, gets user account
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
