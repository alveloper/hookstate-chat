import ChatBox from "react-custom-chat";
import { useState } from "@hookstate/core";
import store from "./store";

const SecondPerson = () => {
  // (4) copy the firstPerson's import, messageList, and messageList. 
  // and then paste to the secondPerson.
  // you can see 'hey' in both of chatbox. 
  // const messageList = useState(store);

  // (7) do the same thing in secondPerson component
  const { firstPersonMessageList, secondPersonMessageList } = useState(store);

  const handleSendMessage = newMessage => {
    firstPersonMessageList.merge([{
      text: newMessage,
      person: 'secondary'
    }])
    secondPersonMessageList.merge([{
      text: newMessage,
      person: 'primary'
    }])
  }

  return (
    <ChatBox 
      settings={{
        navColor: 'blue',
        navText: 'Cortana',
        isOpen: true
      }}
      messageList={secondPersonMessageList.get()}
      onSendMessage={handleSendMessage}
    />
  )
}

export default SecondPerson;