import { data as expData , title as expTitle} from '../contents/experience'
import { data as proData , title as proTitle} from '../contents/project'
import Content from "../components/Content"
import About from "./About"
import Footer from "./Footer"

const RightSection = () => {
  return (
    <div className="pt-14 bg-zinc-950">
      <div className='flex flex-col gap-y-80 px-7'>
        <About/>
        <Content title={expTitle} data={expData}/>
        <Content title={proTitle} data={proData}/>
        <Footer/>
      </div>
    </div>
  )
}

export default RightSection
