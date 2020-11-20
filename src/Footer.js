import React from 'react';
import { contactLogos } from './toInsert';


function Footer() {
    const whiteBackground = { background: "white" };
    const aTagStyle = 'link dim near-white'
    const contacts = contactLogos.map((contact, i) => {
        return (
            <a href={contact.link} className={`db flex align-item ba bw1 br-100 pa0 ma3 w-20 w-10-ns ${aTagStyle}`} style={whiteBackground} key={`contact${i}`}>
                <img src={contact.logo} alt={contact.medium} className='w-100 br-100' />
            </a>
        );
    });

    return (
        <div className='ba bw2 br3 ph4 ma3 mh6-l mh4-m mv4-l' id='footer'>
            <div className='flex flex justify-center'>
                {contacts}
            </div>
            <div className='tc f6'>
                <p>This site side is made by myself using React JS.<br />
                I will link the repo on Github soon so you can have it as a template.
                </p>
            </div>

            <div className='tc f6'>
                <p>
                    Icons made by <a className='link dim near-white' href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className='link dim near-white' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </p>
            </div>
        </div>
    );
}


export default Footer;