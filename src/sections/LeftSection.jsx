import Header from './header'
import Navbar from './Navbar'
import Contact from './contact'

const LeftSection = () => {
  return (
    <div className='px-7 bg-black'>
        <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[35%_40%_20%] lg:h-[90vh]'>
            <Header/>
            <Navbar/>
            <Contact/>
        </div>
    </div>
  )
}

export default LeftSection
