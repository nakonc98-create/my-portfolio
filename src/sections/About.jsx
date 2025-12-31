import { useEffect } from 'react';
import { data } from '../contents/about'

const SECTION_ID = `${data.title}-section`

const About = (props) => {

  return (
    <div id={SECTION_ID} className='scroll-m-14'>
        <div className='font-semibold text-xl text-blue-500 mb-4'>{data.title}</div>
        <div>{data.description}</div>
    </div>
  )
}

export default About
