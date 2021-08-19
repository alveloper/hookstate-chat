import { createState, useState } from "@hookstate/core";

// this createState method expects an argument as its initial state.
// for our initial state, we want an array.

// (1) create a global state and initialize it.
const store = createState([{ text: "hey" }]);

export default store;
