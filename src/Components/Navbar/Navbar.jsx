import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import youtubeIcon1 from '../../assets/youtubeIcon1.png';
import play1 from '../../assets/play1.png';
import profile_image from '../../assets/profile_image.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import videocamera from '../../assets/videocamera.png'
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ setSidebar }) => {
    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            navigate(`/search/${input}`);
        }
    };

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="menu" />
                <Link to='/'><img className='youtubeIcon1' src={play1} alt="logo" /></Link>
            </div>

            <div className="nav-middle flex-div">
                <form className="search-box flex-div" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Search'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" className="search-icon-btn">
                        <img src={search_icon} alt="search" />
                    </button>
                </form>
            </div>
            <div className="nav-right flex-div">
                <img src={videocamera} alt="upload" />
                <img src={more_icon} alt="more" />
                <img src={notification_icon} alt="notification" />
                <img src={profile_image} className='user-icon' alt="profile" />
            </div>
        </nav>
    );
};
