import { data as expData , title as expTitle} from '../contents/experience'
import { data as proData , title as proTitle} from '../contents/project'
import ContentContainer from "../components/ContentContainer"
import About from "./About"
import Footer from "./Footer"
import Certificate from './Certificate'
import Skill from './Skill'

const RightSection = (props) => {
  return (
    <div className="pt-14 md:bg-black/50">
      <div className='flex flex-col gap-y-20 md:gap-y-50 px-7'>
        <About/>
        <Skill/>
        <ContentContainer title={expTitle} data={expData}/>
        <ContentContainer title={proTitle} data={proData}/>
        <Certificate/>
        <Footer/>
      </div>
    </div>
  )
}

export default RightSection
