import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

const ChatBox = () => {
    // State to toggle the visibility of the chatbox
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle the opening and closing of the chatbox
    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative group z-50">
            <button
                title="Chat with our AI assistant"
                className="flex items-center p-2.5 bg-primary text-white rounded-sm transition-all"
                onClick={toggleChatBox}
            >
                <RiRobot2Line className="text-2xl" />
            </button>

            {/* Conditionally render the chatbox */}
            {isOpen && (
                <div className="chatbox absolute right-12 bottom-0 w-72 h-96 bg-white shadow-md rounded-sm p-4 transition-all">
                    <h2 className="text-lg font-bold mb-4">AI Assistant</h2>
                    <div className="messages overflow-y-auto">
                        {/* Add messages here */}
                    </div>
                    <div className="flex items-center">
                    <input
                        type="text"
                        className="h-11 w-full text-sm p-2 border rounded-l-sm outline-none"
                        placeholder="Type your message..."
                    />
                    <button className="h-11 px-3.5 py-3 rounded-r-sm bg-primary text-white">
                        <FaRegPaperPlane />
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
