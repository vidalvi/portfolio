import React from 'react';
import './NavBar.css'


function NavBar() {
    const aTagStyle = 'link dim near-white'
    return (
        <div className='stickyNav center'>
            <ul className='pa0 ma0 flex justify-center tc f5 f3-l fw3 fw5-ns'>
                <li className='grow dib pa1 ma1 mb0 ba bw2 br3'><a href="#about-me" className={aTagStyle}>ABOUT ME</a></li>
                <li className='grow dib pa1 ma1 mb0 ba bw2 br3'><a href="#projects" className={aTagStyle}>MY PROJECTS</a></li>
                <li className='grow dib pa1 ma1 mb0 ba bw2 br3'><a href="#footer" className={aTagStyle}>CONTACTS</a></li>
            </ul >
        </div >
    );
}


export default NavBar;