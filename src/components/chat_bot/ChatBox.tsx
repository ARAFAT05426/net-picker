import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import axios from "axios";

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "system", content: "Welcome guest how can i help you" }
    ]);
    const [userMessage, setUserMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string| null>(null);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        setError(null);
        setLoading(true);
        const newMessages = [...messages, { role: "user", content: userMessage }];
        setMessages(newMessages);

        try {
            const response = await axios.post(
                "https://api.x.ai/v1/chat/completions",
                {
                    model: "grok-beta",
                    messages: newMessages,
                    temperature: 0,
                    stream: false
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer xai-umJBiPv2CVGwTidLbZWF6Bgx9BtOmXEaiBJqXC3qNiKHFHlpgNn9SxEFeDyin2ipxz9sZTcYVJSN3OiY"
                    }
                }
            );

            const assistantMessage = response.data.choices[0].message.content;
            setMessages([...newMessages, { role: "assistant", content: assistantMessage }]);
        } catch (error) {
            console.error("Error sending message to AI:", error);
            setError("Failed to get a response. Please try again.");
        } finally {
            setLoading(false);
            setUserMessage("");
        }
    };

    return (
        <div className="relative group z-50">
            <button
                title="Chat with our AI assistant"
                className="flex items-center p-2.5 bg-primary text-white rounded-sm transition-all shadow-lg hover:shadow-xl"
                onClick={toggleChatBox}
            >
                <RiRobot2Line className="text-2xl" />
            </button>

            {isOpen && (
                <div className="chatbox absolute right-12 bottom-0 w-96 h-[27.5rem] bg-white border rounded p-5 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b">AI Assistant</h2>
                    <div className="messages flex-grow overflow-y-auto mb-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                                <div className={`inline-block text-xs px-3.5 py-2.5 mx-1 rounded ${msg.role === "user" ? "bg-primary text-white ml-3.5" : "bg-gray-200 text-gray-800 mr-3.5"}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="text-gray-500 text-sm">AI is typing...</div>
                        )}
                        {error && (
                            <div className="text-red-500 text-sm text-center">{error}</div>
                        )}
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="h-11 w-full text-sm p-2 border border-gray-300 rounded-l outline-none"
                            placeholder="Type your message..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            disabled={loading}
                        />
                        <button
                            className={`h-11 px-4 rounded-r ${loading ? "bg-gray-400" : "bg-primary"} text-white transition-all`}
                            onClick={handleSendMessage}
                            disabled={loading}
                        >
                            <FaRegPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
