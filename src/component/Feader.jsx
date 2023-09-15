import React from 'react';
import './component_css/Feader_style.css';
const Feader = () => {
  return (
    <div>
        <header>
            <div className='header_list'>
                <h2 className='header_title'>plantrecorde</h2>
                <ul className='text'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">サインイン</a></li>
                    <li><a href="#">サインアウト</a></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Feader