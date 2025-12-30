import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'



function App() {

  return (
    <div className='bg-blue-950/30'>
      <div className='mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[30%_70%]'>
      <LeftSection/>
      <RightSection/>
      </div>
    </div>
  )
}

export default App
