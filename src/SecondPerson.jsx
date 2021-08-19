import ChatBox from "react-custom-chat";
import { useState } from "@hookstate/core";
import store from "./store";

const SecondPerson = () => {
  // (4) copy the firstPerson's import, messageList, and messageList. 
  // and then paste to the secondPerson.
  // you can see 'hey' in both of chatbox. 
  const messageList = useState(store);
  return (
    <ChatBox 
      settings={{
        navColor: 'blue',
        navText: 'Cortana',
        isOpen: true
      }}
      messageList={messageList.get()}
    />
  )
}

export default SecondPerson;