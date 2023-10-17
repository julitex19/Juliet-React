// import React from 'react'

// function About() {
//   return (
//     <div className='mt-16 h-[900px]'>
//       <h1 className='bg-indigo-600 pt-10'>this is about</h1>
//     </div>
    
//   )
// }

// export default About

import React from 'react';

const About = () => {
    return (
        <div className='flex items-center mt-16'>
            {/* <div className="flex-1 flex items-center justify-center relative h-full">
                <div className="w-60% h-70vh bg-gray-900 rounded-lg relative overflow-hidden">
                    <div className="absolute top-50px left-50px bg-gray-900 w-100px h-100px"></div>
                    
                </div>
            </div> */}
        <div className=" p-5">
          
                <h1 className="font-semibold text-3xl">About Me</h1>
                <p className="my-5">
                    I’m a Front-End Web Developer based in Lagos, Nigeria. I am passionate about coding, solving problems through code, and creating intuitive, and dynamic user experiences.
                </p>
                <p>
                    I'm a well-organized person, a problem solver with high attention to detail. I'm Interested in the entire frontend spectrum. The main area of my expertise is HTML, CSS, JavaScript, building small and medium web apps, and coding interactive layouts.
                </p>
            </div>
        </div>
    );
}

export default About;

