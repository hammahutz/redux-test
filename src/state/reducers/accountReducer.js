// const initalState = 0
// const accountReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case "deposit":
//       return state + action.payload;
//     case "withdraw":
//       return state - action.payload;
//     default:
//       return state;
//   }
// };

// export default accountReducer;

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
