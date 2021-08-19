import { useState } from "@hookstate/core";
import ChatBox from "react-custom-chat";
import store from "./store";

const FirstPerson = () => {
  // (2) use useState from "@hookstate/core".
  // inside of useState hook, we are going to pass in an arguments
  // which is the state we want to access,
  // and we want the "store" we just created.
  const messageList = useState(store);
  return (
    <ChatBox
      settings={{
        position: "left",
        navColor: "green",
        navText: "Mycroft",
        isOpen: true,
      }}
      // (3) now that we have a messageList, we can pass it as a prop to the chatbox component
      // the messageList contains the list of messages when we send a new message
      // we're going to add it to the message list state and that's going to display inside the chat box
      messageList={messageList.get()} // to access the data from our state, we have to use the get method.
      // => now the browser shows the initial state 'hey' as a message in chatbox of first person.
    />
  );
};

export default FirstPerson;
