import React from 'react';
import Typical from 'react-typical';


function Cover() {
  const firstLine = "If you're currently reading this...";
  const secondLine = 'then you might be considering my application.';
  const thirdLine = "Hi!";
  const fourthLine = "I'm Adrian.";
  const fifthLine = "I'm a programmer.";

  return (
    <div className='h5 ba bw2 br3 flex align-center ph3 ph4-m ph5-l ma3 mh6-l mh4-m mv4-l f2 fw8'>
      <Typical
        steps={[firstLine, 1000, secondLine, 1000, thirdLine, 1000, fourthLine, 1000, fifthLine, 1000]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  )
}

  
export default Cover;
