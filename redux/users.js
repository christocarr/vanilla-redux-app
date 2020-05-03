export function addUserDetails(firstName, lastName, id, email) {
  return {
    type: 'ADD_USER_DETAILS',
    payload: {firstName, lastName, id, email}
  }
}

export default function setUserDetailsReducer(userDetails = {}, action) {
  switch (action.type) {
    case 'ADD_USER_DETAILS':
      return {
        ...userDetails,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        id: action.payload.id,
        email: action.payload.email
      }
    default:
      return userDetails
  }
  
}