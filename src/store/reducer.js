const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "CLR_DATA":
      return {
        ...state,
        data: [],
      };
    case "DEL_DATA":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
