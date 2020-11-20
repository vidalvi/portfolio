import React from 'react';
import Button from './Button';
import { projects } from './toInsert';


function ProjectCards() {
    const projectCards = projects.map((project, idx) => {
        return (
            <div className='ba bw1 br3 mv4 center w-75-ns' key={`project${idx}`}>
                <div className='w-100'>
                    <img src={project.photo} alt={project.projName} className='br3 w-100-ns ' />
                </div>
                <div className='ma0 ph3'>
                    <h3 className='f3 fw8'>{project.projName}</h3>
                    <p className='mb2 f5 f4-l fw6 tj'>
                        {project.description}
                    </p>
                    <Button githubRepo={project.repo} />
                </div>
            </div>
        )
    })

    return (
        <div>
            {projectCards}
        </div>
    );
}


export default ProjectCards;