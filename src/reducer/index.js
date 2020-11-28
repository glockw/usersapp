const initialState = {
  users: [],
  page: 1,
};

export default function Users(state = initialState, action) {
  if (action.type === "FETCH_USERS_SUCCEEDED") {
    const { users } = action.payload.users;
    return {
      ...state,
      page: state.page + 1,
      users: state.users.concat(...users),
    };
  }

  return state;
}
