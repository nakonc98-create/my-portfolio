import Header from './Header'
import Navbar from './Navbar'
import Contact from './contact'

const LeftSection = () => {
  return (
    <div className='px-7 bg-black'>
        <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[2fr_2fr_1fr] lg:h-[90vh]'>
            <Header/>
            <Navbar/>
            <Contact/>
        </div>
    </div>
  )
}

export default LeftSection
