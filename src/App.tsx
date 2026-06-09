import { useState } from "react";
import Message from "./components/Message";
import "./App.css"


// const Message = ({text}) => {
//     return <>
//     <p>
//         {text}
//     </p>
//     </>;

// }

const App = () => {
    //business logic

    /*
   const messages = [
        "cat",
        "dog",
        "snake",
   ];
   */

   const [messages, setMessages] = useState([]);
   
   return <>
        <h1>
            Chat Room
        </h1>
        {
            messages.map(
                (text, index) => <Message key={index} text={text}/>
            )
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            
            const new_message = event.target.incoming_text.value;

            
            setMessages([...messages, new_message]);

            
            document.getElementById('incoming_text').value = '';
        }}>
        <input name='incoming_text' id='incoming_text' />
        <button type='submit'>
            send
        </button>
        </form>
    </>;
}

export default App;
