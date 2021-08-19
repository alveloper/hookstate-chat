import { useState } from "@hookstate/core";
import ChatBox from "react-custom-chat";
import store from "./store";

const FirstPerson = () => {
  // (2) use useState from "@hookstate/core".
  // inside of useState hook, we are going to pass in an arguments
  // which is the state we want to access,
  // and we want the "store" we just created.
  const messageList = useState(store);

  // (5) handleSendMessage function: update the state
  const handleSendMessage = newMessage => {
    // inside this .merge method we want to pass on the new value of our states as its argument.
    // so it's going to take the value and append it to what there was before.
    // you don't need to use spread operator or something.
    messageList.merge([{
      text: newMessage,
      person: 'secondary' // this is going to be show the message like on the opposite.
    }])
    // if you want to replace the old state, then use .set method.
  }

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

      // (5) make handleSendMessage method and bind to onSendMessage.
      // this onSendMessage prop expects a function that is going to tell the chatbox component
      // what to do whenever a message is sent.
      // so whenever the user clicks the send button, 
      // the chatbox component is going to run the onSendMessage function.
      onSendMessage={handleSendMessage}
    />
  );
};

export default FirstPerson;
