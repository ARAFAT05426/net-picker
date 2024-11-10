import { RiRobot2Line } from "react-icons/ri";
const ChatBox = () => {
    return (
        <div className="group z-50">
            <button
                title="Chat with our AI assistant"
                className="flex items-center p-2.5 bg-primary text-white rounded-sm transition-all"
            >
                <RiRobot2Line className="text-2xl" />
            </button>
        </div>
    );
};

export default ChatBox;
