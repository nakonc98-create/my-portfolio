import { data as expData , title as expTitle} from '../contents/experience'
import { data as proData , title as proTitle} from '../contents/project'
import { data as certData , title as certTitle} from '../contents/certificate'
import Content from "../components/Content"
import About from "./About"
import Footer from "./Footer"

const RightSection = (props) => {
  return (
    <div className="pt-14 bg-black/50">
      <div className='flex flex-col gap-y-80 px-7'>
        <About onInitial={props.onInitial}/>
        <Content title={expTitle} data={expData}/>
        <Content title={proTitle} data={proData}/>
        <Content title={certTitle} data={certData}/>
        <Footer/>
      </div>
    </div>
  )
}

export default RightSection
