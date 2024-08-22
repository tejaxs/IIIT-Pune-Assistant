import React, { useEffect, useState } from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import axios from 'axios';

const Popup = ({ onClose }) => {
  const [messages, setMessages] = useState([{ text: "Welcome to IIIT Pune's website. How can I help you?", isUser: false }]);
  const [messageInput, setMessageInput] = useState("");
  const [threadId, setThreadId] = useState('');

  useEffect(() => {
    const genThread = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/api/new/`);
        const data = response.data;
        setThreadId(data.thread_id);
        console.log(data);
      } catch (error) {
        console.error('Error generating thread:', error);
      }
    };
    genThread();
  }, []);

  const sendMessage = async () => {
    if (messageInput.trim() === "") return;

    // Add user message to state
    setMessages([...messages, { text: messageInput, isUser: true }]);
    setMessageInput(""); // Clear input field

    const message = { content: messageInput };

    try {
      // Send the user message to the backend
      await axios.post(`http://localhost:8000/api/threads/${threadId}`, message);

      // Update messages immediately after sending the message
      const response = await fetchMessages();
      const assistantMessages = response.data.messages.filter(msg => msg.role === 'assistant');
      assistantMessages.forEach(msg => {
        setMessages(prevMessages => [...prevMessages, { text: msg.content, isUser: false }]);
      });

    } catch (error) {
      console.error('Error sending or fetching messages:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/threads/${threadId}`);
      return response;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Assistant</h2>
          <button className="popup-close" onClick={onClose}>X</button>
        </div>
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user-message' : 'assistant-message'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            className="message-input"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="send-button" onClick={sendMessage}><BsFillChatDotsFill /></button>
        </div>
      </div>
    </div>
  );
};

export default Popup;