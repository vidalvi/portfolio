import React from 'react';
import {skills} from './toInsert';

function SkillsArea() {
    const whiteBackground = { background: "white" }
    const skillset = skills.map((skill, i) => {
        return (
            <div className='flex align-center ba bw1 br4 grow pa0 mh1 mv2 w-20 w-10-ns' style={whiteBackground} key={`skill${i}`}>
                <img src={skill.logo} alt={skill.techName} title={skill.techName} className='w-100 br4'/>
            </div>
        )   
    });

    return (
        <div className='mt5'>
            <h3 className='f3 fw8 tc'>skills:</h3>
            <div className='flex flex-wrap items-center justify-center p0'>
                {skillset}
            </div>
        </div>
    );
}

export default SkillsArea;