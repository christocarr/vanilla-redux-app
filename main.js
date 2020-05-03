import store from './redux'

console.log(store)
// const redux = require('redux');

// const initialState = {
//   count: 0,
//   favoriteThings: [],
//   youTubeVideo: {
//     title: "",
//     viewCount: 0,
//     votes: {
//       up: 0,
//       down: 0
//     }
//   }
// };

// console.log(initialState)

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_FAVORITE_THING': 
//       return {
//         ...state,
//         favoriteThings: [...state.favoriteThings, action.payload]
//       }
//     case 'REMOVE_FAVORITE_THING':
//       const newFavoriteThings = state.favoriteThings.filter(thing => thing !== action.payload)
//       return {
//         ...state,
//         favoriteThings: newFavoriteThings
//       }
//     case 'ADD_YOUTUBE_TITLE': 
//       return {
//         ...state,
//         youTubeVideo: {
//           ...state.youTubeVideo,
//           title: action.payload
//         }
//       }
//     case 'UP_VOTE_VIDEO':
//       return {
//         ...state,
//         youTubeVideo: {
//           ...state.youTubeVideo,
//           votes: {
//             ...state.youTubeVideo.votes,
//             up: state.youTubeVideo.votes.up + 1
//           }
//         }
//       }
//     case 'DOWN_VOTE_VIDEO': 
//       return {
//         ...state,
//         youTubeVideo: {
//           ...state.youTubeVideo,
//           viewCount: state.youTubeVideo.viewCount + 1,
//           votes: {
//             ...state.youTubeVideo.votes,
//             down: state.youTubeVideo.votes.down + 1
//           }
//         }
//       }
//     case 'INCREMENT_VIDEO_VIEW_COUNT':
//       return {
//         ...state,
//         youTubeVideo: {
//           ...state.youTubeVideo,

//           votes: {
//             ...state.youTubeVideo.votes,
//           }
//         }
//       }
//     default:
//       return state;
//   }
// }

// const store = redux.createStore(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(upVoteVideo());
// store.dispatch(downVoteVideo());

// store.dispatch(incrementVideoViewCount())

