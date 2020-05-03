import store from './redux';
import { changeCount } from './redux/count';
import { addFavoriteThing, removeFavoriteThing } from './redux/favoriteThings';
import {
  addYouTubeTitle,
  upVoteVideo,
  downVoteVideo,
  incrementVideoViewCount,
} from './redux/youTubeVideo';
import { addUserDetails } from './redux/users'

// store.dispatch(changeCount(11));
// store.dispatch(addFavoriteThing('cats'))
// store.dispatch(addYouTubeTitle('cats'))
// store.dispatch(upVoteVideo())
// store.dispatch(downVoteVideo())
// store.dispatch(incrementVideoViewCount())
// store.dispatch(removeFavoriteThing('cats'))

store.dispatch(addUserDetails('John', 'Doe', 22, 'john.doe@gmail.com'))