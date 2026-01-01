import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-50 md:hidden'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none'
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon className="text-lg" icon={faAnglesUp} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop