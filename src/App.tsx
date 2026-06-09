import { useState } from "react";
import { faker } from "@faker-js/faker";
import Message from "./components/Message";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <h1>Chat Room</h1>

      {messages.map(({ text, name, timestamp, sender }, index) => (
        <Message
          key={index}
          text={text}
          name={name}
          sender={sender}
          timestamp={timestamp}
        />
      ))}

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const new_message = event.target.incoming_text.value;
          const name = faker.person.fullName();
          const receiver = faker.person.fullName();

          setMessages((prev) => [
            ...prev,
            {
              text: new_message,
              name: name,
              timestamp: new Date(),
              sender: "me",
            },
          ]);

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                text: "hello",
                name: receiver,
                timestamp: new Date(),
                sender: "other",
              },
            ]);
          }, 1000);

          event.target.incoming_text.value = "";
        }}
      >
        <input name="incoming_text" id="incoming_text" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default App;