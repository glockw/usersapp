const { createStore } = require("redux");

const initialState = { page: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { page: state.page + 1 };
    case "PREV_PAGE":
      return (state = state - 1);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
