import ChatBox from "react-custom-chat";

const SecondPerson = () => {
  return (
    <ChatBox 
      settings={{
        navColor: 'blue',
        navText: 'Cortana',
        isOpen: true
      }}
    />
  )
}

export default SecondPerson;