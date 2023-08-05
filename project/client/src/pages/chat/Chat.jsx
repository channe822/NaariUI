import React, { useState } from 'react';
import './chat.css';
function Chat() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    // Function to handle user input
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    // Adding voice functionality
    const startRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();

        recognition.lang = 'en-US';

        recognition.addEventListener('result', (event) => {
            const transcript = event.results[0][0].transcript;
            setUserInput(transcript);

        });

        recognition.addEventListener('error', (event) => {
            console.error('Speech recognition error', event.error);
        });

        recognition.start();
    };

    // Function to process user input and generate chat response
    const processUserInput = () => {
        const userMessage = userInput.trim().toLowerCase();

        // Define chat responses
        const chatResponses = {
            hello: "Hello! How can I assist you today?",
            default: "I'm sorry, but I'm not programmed to respond to that. Type help to know more",
            help:"To use -:\none to raise complain\ntwo to track application\nthree to know about laws\nfour to contact",
            two:"To track your application, please visit [tracking link](http://localhost:3000/track)",
            one:"To raise your application, please visit [Complain link](http://localhost:3000/complain)",
            three:"To know about laws, please visit [Laws link](http://localhost:3000/laws)",
            four:"To contact us, please visit [Contact link](http://localhost:3000/contact)",
        };

        const chatHistoryItem = {
            type: 'user',
            message: userMessage
        };

        // Check user input and provide chat response
        if (userMessage === 'hello') {
            chatHistoryItem.response = chatResponses.hello;
        }
        else if(userMessage === 'help'){
            chatHistoryItem.response = chatResponses.help;
        } 
        else if(userMessage === 'one'){
            chatHistoryItem.response = chatResponses.one;
        } 
        else if(userMessage === 'two'){
            chatHistoryItem.response = chatResponses.two;
        } 
        else if(userMessage === 'three'){
            chatHistoryItem.response = chatResponses.three;
        } 
        else if(userMessage === 'four'){
            chatHistoryItem.response = chatResponses.four;
        } 
        else {
            chatHistoryItem.response = chatResponses.default;
        }

        // Update chat history
        setChatHistory([...chatHistory, chatHistoryItem]);
        if(chatHistory.length>7) setChatHistory([]);
        // Clear user input
        setUserInput('');
    };

    return (
        <div>
            <nav className="navbar">
            <div className='back-arrow' > <a href="/landingPage" ><i class="fa fa-arrow-left" aria-hidden="true"></i></a></div>
            <div className="center-items">
                <div className="navbar-brand"><div className='nav-heading' >Naari</div><img className="navbar-img" src='https://i.postimg.cc/Zn191Z3G/hair-customer-service-technical-support-customer-support-call-centre-help-desk-helpline-face-png-cli.png'></img> </div>
                </div>
            </nav>
            <div className="chat-container">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat-item ${chat.type}`}>
                        <strong>{chat.type === 'user' ? 'User' : 'Chat'}:</strong> {chat.message}
                    </div>
                ))}
            </div>

            {chatHistory.length > 0 && (
                <div className="chatbot-reply">
                    <div className="chat-item chatbot">
                        <strong>Chatbot:</strong> {chatHistory[chatHistory.length - 1].response}
                    </div>
                </div>
            )}
            <div className='input-text'>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            processUserInput();
                        }
                    }}
                    placeholder="Type your message..."
                    autoFocus

                />
                <div className="text-btn">
                    <button className='btn-button' onClick={startRecognition}><i class="fa fa-microphone" aria-hidden="true"></i></button>
                    <button className='btn-button' onClick={processUserInput} ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
