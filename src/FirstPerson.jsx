import ChatBox from "react-custom-chat";

const FirstPerson = () => {
  return (
    <ChatBox 
      settings={{
        position: 'left',
        navColor: 'green',
        navText: 'Mycroft',
        isOpen: true
      }}
    />
  )
}

export default FirstPerson;