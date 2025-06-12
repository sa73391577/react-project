const initState = {
  data: [
    { id: 1, name: "Mr.A", score: 99 },
    { id: 2, name: "Mr.B", score: 84 },
  ],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DEL_DATA":
      //delete some data
      const deletedState = state;
      return deletedState;
    case "ADD_DATA":
      //add new data
      const addedState = state;
      return addedState;
  }

  return state;
};
export default reducer;
