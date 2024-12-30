import React, { useState } from 'react';
import './chat.scss';

function Chat() {
    const [chat, setchat] = useState(true)
    return (
        <div className='chat'>
            <div className="messages">
                <h1>messages</h1>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src='/noavatar.jpg' alt='' />
                    <span>Aryan Dadheech</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src='/noavatar.jpg' alt='' />
                        Aryan Dadheech
                    </div>
                    <span className="close" onClick={() => setchat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsun tu hai ki nai</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Chat
