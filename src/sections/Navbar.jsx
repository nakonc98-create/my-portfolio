import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-3 font-semibold'>
        <a  href="#"><FontAwesomeIcon className='mr-2 text-sm text-blue-700' icon={faArrowRight}/>About</a>
        <a  href="#"><FontAwesomeIcon className='mr-2 text-sm text-blue-700' icon={faArrowRight}/>Experience</a>
        <a  href="#"><FontAwesomeIcon className='mr-2 text-sm text-blue-700' icon={faArrowRight}/>Project</a>
        <a  href="#"><FontAwesomeIcon className='mr-2 text-sm text-blue-700' icon={faArrowRight}/>Article</a>
    </div>
  )
}

export default Navbar
