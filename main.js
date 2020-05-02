const redux = require('redux');

const initialState = {
  count: 0,
  favoriteThings: [],
};

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    // case "DECREMENT":
    //   return {
    //     count: state.count - 1
    //   }
    // case "DOUBLE":
    //   return {
    //     count: state.count * 2
    //   }
    // case "HALVE":
    //   return {
    //     count: Math.round(state.count / 2)
    //   }
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
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeCount(5));
store.dispatch(changeCount(-1));

store.dispatch(addFavoriteThing('beer'))
store.dispatch(addFavoriteThing('ice-cream'))

store.dispatch(removeFavoriteThing('beer'))
