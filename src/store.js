import { createState, useState } from "@hookstate/core";

// this createState method expects an argument as its initial state.
// for our initial state, we want an array.

// (1) create a global state and initialize it.
// const store = createState([{ text: "hey" }]);

// (6) instead of just one message object, we have two message objects.
const store = createState({
  firstPersonMessageList: [],
  secondPersonMessageList: []
});

export default store;
