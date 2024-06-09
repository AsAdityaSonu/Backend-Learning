import { useState } from "react";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
    const [username, setUsername] = useState("");
    const [chatActive, setChatActive] = useState(false);

    return (
        <>
            <div className="w-screen h-screen bg-gray-200 ">
                {chatActive ? (
                    <div>chat is here</div>
                ) : (
                    <div>
                      <input input="text" name="" id="" className="text-center px-3 py-2 outline-none border-2 rounded-md"></input>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
