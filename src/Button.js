import React from 'react';


function Button(props) {
    const repoLink = props.githubRepo;
    return(
        <div className='pa2 mv4 tc grow'>
            <a href={repoLink} className='pa2 ba bw2 br-pill grow link dim near-white'>see code on Github</a>
        </div>
    );
}


export default Button;
