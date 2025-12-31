import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='flex justify-end mb-12 hover:text-blue-500'>
      <span>
        <a href='https://github.com/nakonc98-create/my-portfolio.git' target="_blank">Powered by React.js and TailwindCS<FontAwesomeIcon className='ml-1' icon={faGithub}/></a>
      </span>
    </div>
  )
}

export default Footer
