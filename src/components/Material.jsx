import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Material = (props) => {
  return (
    props.value.length > 0 ?
      <div className='flex gap-x-4 text-xl items-center'>
        {props.value.map((s,i) => (
          <a key={i} href={s.link} target="_blank"><FontAwesomeIcon className='hover:scale-125 duration-300' icon={s.icon}/></a>
        ))}
      </div>
    : null
  )
}

export default Material
