import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../contents/header'
import { useState } from 'react';

const Header = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className='flex flex-col gap-2 mt-10 md:mt-0' id="header">
            <div className='text-3xl text-blue-700 font-semibold'>{data.name}</div>
            <div className='font-semibold text-xl text-blue-500'>{data.title}</div>
            <div className="flex justify-center">
                <img src={data.picture} alt={data.name} className="w-50 md:w-40 h-50 md:h-40 rounded-full object-cover object-top my-10 shadow-md"/>
            </div>
            <div className='flex justify-center mt-4 font-semibold'>
                <a href={data.resume} target="_blank" rel="noreferrer">
                    <span className='bg-blue-900 hover:ring-3 ring-blue-900 py-2 px-2 rounded-md hover:bg-white hover:text-blue-900 duration-300' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        {data.btnName}
                        <span className='inline-block text-xs ml-1'>
                            <FontAwesomeIcon className={`size-6 ${isHover ? "animate-bounce" : ""}`} icon={faArrowDown}/>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header
