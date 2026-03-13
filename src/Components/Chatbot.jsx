import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsChatDotsFill, BsX, BsSendFill } from 'react-icons/bs';
import './chatbot.css';

const INITIAL_MESSAGE = {
    id: 1,
    text: "Hi! I'm Makesh's portfolio assistant. Ask me about skills, projects, or contact info.",
    sender: 'bot'
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    const handleOpen = () => {
        if (isClosing) return;
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('who are you') || lowerInput.includes('about')) {
            return "I am Makeshkumar, a Frontend / Full Stack Developer specializing in React, Node.js, and MySQL.";
        } else if (lowerInput.includes('skill') || lowerInput.includes('technolog')) {
            return "My skills include React, JavaScript, Node.js, Express, and MySQL.";
        } else if (lowerInput.includes('project')) {
            return "You can check my projects in the Projects section of this portfolio.";
        } else if (lowerInput.includes('contact')) {
            return "You can contact me through the Contact form below, or reach out via email.";
        } else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
            return "You can download my resume by clicking the 'Download CV' button on the page.";
        } else if (lowerInput.includes('experience')) {
            return "I have experience working on scalable frontend components and efficient backend APIs.";
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello there! Ask me about my skills, projects, or experience.";
        } else {
            return "I'm not sure about that. Try asking about my skills, projects, experience, or for my resume!";
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue.trim(),
            sender: 'user'
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponseText = getBotResponse(userMessage.text);
            const botMessage = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot'
            };

            setIsTyping(false);
            setMessages((prev) => [...prev, botMessage]);
        }, 1500); // 1.5 seconds typing
    };

    const handleReaction = (msgId, emoji) => {
        setMessages(prev => prev.map(msg => {
            if (msg.id === msgId) {
                return { ...msg, reaction: emoji };
            }
            return msg;
        }));
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className={`chat-window ${isClosing ? 'closing' : ''}`}>
                    <div className="chat-header">
                        <span>Portfolio Assistant</span>
                        <button className="chat-close-btn" onClick={handleClose}>
                            <BsX />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`chat-message message-${msg.sender}`}>
                                {msg.text}
                                {msg.sender === 'bot' && (
                                    <div className="message-reactions">
                                        <button className="emoji-btn" onClick={() => handleReaction(msg.id, '👍')} title="Like">👍</button>
                                        <button className="emoji-btn" onClick={() => handleReaction(msg.id, '❤️')} title="Love">❤️</button>
                                        {msg.reaction && <span style={{ fontSize: '14px', marginLeft: '5px' }}>{msg.reaction}</span>}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="chat-typing">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <Form onSubmit={handleSendMessage} className="chat-form">
                            <Form.Control
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="chat-input shadow-none"
                                autoComplete="off"
                            />
                            <Button type="submit" variant="primary" className="chat-send-btn shadow-none" disabled={!inputValue.trim()}>
                                <BsSendFill />
                            </Button>
                        </Form>
                    </div>
                </div>
            )}

            {!isOpen && !isClosing && (
                <button className="chatbot-button" onClick={handleOpen} title="Open Chat">
                    <BsChatDotsFill />
                </button>
            )}
        </div>
    );
};

export default Chatbot;
