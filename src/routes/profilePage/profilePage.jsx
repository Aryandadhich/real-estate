import React from 'react';
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from '../../components/chat/Chat';


function ProfilePage() {
    return (
        <div className='profilePage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="/noavatar.jpg" alt="" />
                        </span>
                        <span>username: <b>Aryan Dadeech</b></span>
                        <span>Email: <b>AryanDadeech@gmail.com</b></span>

                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Ceate new post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1> Save list</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
