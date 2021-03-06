export function addYouTubeTitle(title) {
  return {
    type: 'ADD_YOUTUBE_TITLE',
    payload: title
  }
}

export function upVoteVideo() {
  return {
    type: 'UP_VOTE_VIDEO'
  }
}

export function downVoteVideo() {
  return {
    type: 'DOWN_VOTE_VIDEO'
  }
}

export function incrementVideoViewCount() {
  return {
    type: 'INCREMENT_VIDEO_VIEW_COUNT'
  }
}

const initialState = {  
  title: "",
  viewCount: 0,
  votes: {
    up: 0,
    down: 0
  }
}

export default function youTubeVideoReducer(youTubeVideo = initialState, action) {
  switch (action.type) {
    case 'ADD_YOUTUBE_TITLE':
      return {
        ...youTubeVideo,
        title: action.payload
      }
    case 'UP_VOTE_VIDEO':
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          up: youTubeVideo.votes.up + 1
        }
      }
    case 'DOWN_VOTE_VIDEO':
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          down: youTubeVideo.votes.down + 1
        }
      }
    case 'INCREMENT_VIDEO_VIEW_COUNT':
      return {
        ...youTubeVideo,
        ...youTubeVideo.votes,
        viewCount: youTubeVideo.viewCount + 1
      }
      default:
        return youTubeVideo
  }
}