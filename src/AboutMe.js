import React from 'react';
import SkillsArea from './SkillsArea';
import { aboutMePic } from './toInsert';


function AboutMe() {
    return (
        <div className='ba bw2 br3 ph4 ma3 mh6-l mh4-m mv4-l'>
            <h2 className='mt4 pa0 f2 fw8 tc'>about me</h2>
            <div className='flex align-center ba bw2 br-100 pa0 mv3 w-70 w-40-m w-30-l center'>
                <img src={aboutMePic} alt="Adrian Vidal" className='mw-100 br-100' id='about-me' />
            </div>
            <div className='mt4 f5 f4-l fw6 tj'>
                <p>
                    I, Mark Adrian Vidal, am a programmer from Taguig City.
                    I have a degree in BS in Electronics Engineering from
                    Pamantasan ng Lungsod ng Pasig (PLP).
                </p>
                <p>
                    I was first introduced to programming back when I was in high school where
                    we were taught about HTML. When I was in the university, I had subjects
                    which involves programming such as C++, Visual Basic and Arduino. I really
                    enjoyed programming and completely fell inlove with it. I have decided that
                    I want to have a career on programming but I never really had time to study
                    deeper about it, not until I graduated. Now, I am focusing on studying and honing
                    my skills to become a professional developer.
                </p>
                <p>
                    I am most proficient in the language Python - making scripts for automation and web scraping.
                    I am currently studying Python's application to web development and data visualization.
                </p>
                <SkillsArea />
            </div>
        </div>
    );
};


export default AboutMe;
