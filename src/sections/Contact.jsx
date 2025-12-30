import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div className='flex items-end text-2xl gap-4'>
        <a href="#" target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-blue-500 duration-300' icon={faGithub}/></a>
        <a href="#" target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-blue-500 duration-300' icon={faInstagram}/></a>
        <a href="#" target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-blue-500 duration-300' icon={faFacebook}/></a>
    </div>
  )
}

export default Contact
