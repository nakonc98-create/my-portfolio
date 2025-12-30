import { data } from '../contents/about'

const SECTION_ID = "about-section"

const About = () => {
  return (
    <div id={SECTION_ID}>
        <div className='font-semibold mb-4'>{data.title}</div>
        <div>{data.description}</div>
    </div>
  )
}

export default About
