import './App.css'
import ScrollToTop from './components/ScrollToTop'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'



function App() {

  return (
      <div className='bg-black md:bg-blue-950/30'>
          <div className='mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[30%_70%]'>
            <LeftSection/>
            <RightSection/>
          </div>
          <ScrollToTop/>
      </div>
  )
}

export default App
