const initialState = {
  users: { page: 0, users: [] },
};

export default function Users(state = initialState, action) {
  if (action.type === "FETCH_USER_SUCCEEDED") {
    return {
      users: {
        page: state.users.page + 1,
        users: state.users.users.concat(action.payload.users.users),
      },
    };
  }

  return state;
}
