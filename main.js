const redux = require('redux');

const initialState = {
  count: 0,
  favoriteThings: [],
  youTubeVideo: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
};

console.log(initialState)

function changeCount(amount) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount,
  };
}

function addFavoriteThing(thing) {
  return {
    type: 'ADD_FAVORITE_THING',
    payload: thing
  }
}

function removeFavoriteThing(thing) {
  return {
    type: 'REMOVE_FAVORITE_THING',
    payload: thing
  }
}

function addYouTubeTitle(title) {
  return {
    type: 'ADD_YOUTUBE_TITLE',
    payload: title
  }
}

function upVote() {
  return {
    type: 'UP_VOTE',
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'ADD_FAVORITE_THING': 
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload]
      }
    case 'REMOVE_FAVORITE_THING':
      const newFavoriteThings = state.favoriteThings.filter(thing => thing !== action.payload)
      return {
        ...state,
        favoriteThings: newFavoriteThings
      }
    case 'ADD_YOUTUBE_TITLE': 
      return {
        ...state,
        youTubeVideo: {
          ...state.youTubeVideo,
          title: action.payload
        }
      }
    case 'UP_VOTE':
      return {
        ...state,
        youTubeVideo: {
          ...state.youTubeVideo,
          votes: {
            ...state.youTubeVideo.votes,
            up: state.youTubeVideo.votes.up + 1
          }
        }
      }
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(upVote());

