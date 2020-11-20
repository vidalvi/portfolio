import React from 'react';
import ProjectCard from './ProjectCards';


function ProjectAlbum() {
    return (
        <div className='ba bw2 br3 ph4 ma3 mh6-l mh4-m mv4-l' id='projects'>
            <h2 className='mt3 pa0 f2 fw8 tc' >projects</h2>
            <ProjectCard />
        </div>
    );
}


export default ProjectAlbum;