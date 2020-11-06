//https://developer.spotity.com/documentation/web-playback-sdk/quick-start

export const authEndPoint = "https://accounts.spotify.com/authorize"; //using spotify api for authentication

const redirectUri = "https://andrews-spotify-clone.netlify.app/";

const clientId = "65afcbe6608f4da58797c42b2e51d0a0"; //from spotify for developers settings

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  //find the hash in the URL, and split at the & , then split at the =
  return window.location.hash //pulls the access token out
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//scopes lets users do what is specified. as seen, cant delete, just read and modify play state

//1. click login button
//2. redirect to spotify login page
//3. redirect to homepage once logged in
