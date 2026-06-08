import { useState } from "react";


const Message = ({text}) => {
    return <>
    <p>
        {text}
    </p>
    </>;

}

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
                (text) => <Message text={text}/>
            )
        }

        <input/>

        <button>
            send
        </button>
    </>;
}

export default App;
