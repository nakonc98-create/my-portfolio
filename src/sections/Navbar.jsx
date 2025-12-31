import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const navs = [
  { title: "About", sectionId: "About-section"},
  { title: "Experience", sectionId: "Experience-section"},
  { title: "Project", sectionId: "Project-section"},
  { title: "Certificate", sectionId: "Certificate-section"},
]

const Navbar = () => {
  const [isHover, setIsHover] = useState(null);
  const [activeNav, setActiveNav] = useState(null);

  const handleClick = (sectionId, title) => {
    setActiveNav(title);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <div className='flex flex-col font-semibold'>
      {
        navs.map((e, i) => {
          const isShowArrow = isHover === e.title || activeNav === e.title;

          return (
            <div 
              key={i} 
              onClick={() => handleClick(e.sectionId, e.title)} 
              onMouseEnter={() => setIsHover(e.title)} 
              onMouseLeave={() => setIsHover(null)}
              className={`flex cursor-pointer py-3 px-4 rounded-md transition-all
                ${activeNav === e.title ? "bg-blue-300/15 text-blue-500" : "hover:bg-blue-300/30 hover:text-blue-500"}`}
            >
              <div className='w-6'>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className={`text-sm text-blue-700 transition-all duration-500 ease-in-out 
                    ${isShowArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                />
              </div>
              <div className={`transition-all duration-300 ${isShowArrow ? "translate-x-2" : "" }`}>
                {e.title}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navbar

