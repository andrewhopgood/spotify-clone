export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

//reducer is an object with values to be tracked

const reducer = (state, action) => {
  //state is the current state, action is how we update
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keep items in previous state
        user: action.user, //update the user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
