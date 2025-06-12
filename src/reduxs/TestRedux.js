import React, { Component } from "react";
class TestRedux extends Component {
  render() {
    const redux = require("redux");
    const createStore = redux.createStore;
    const initState = { counter: 1 };

    const reducer = (state = initState, action) => {
      switch (action.type) {
        case "INC_COUNTER":
          return { ...initState, counter: initState.counter + 1 };
        case "DEC_COUNTER":
          return { ...initState, counter: initState.counter - 1 };
        default:
          break;
      }

      const store = createStore(reducer);
    };

    return;
  }
}
