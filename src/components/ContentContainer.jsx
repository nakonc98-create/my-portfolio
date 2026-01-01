import Date from "./Date"
import Description from "./Description"
import Material from "./Material"
import Picture from "./Picture"
import Tech from "./Tech"
import Title from "./Title"

const ContentContainer = (props) => {

    const SECTION_ID = `${props.title}-section`

    return (
        <div id={SECTION_ID} className='scroll-m-14'>
            <div className='font-semibold text-xl text-blue-500 mb-3'>{props.title}</div>
            {props.data.map((e,i) => (
                <div className='grid grid-cols-1 md:grid-cols-[30%_70%] hover:bg-blue-900/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 px-3 py-6 rounded-md' key={i}>
                    <div className="flex flex-col gap-y-4">
                        <Date value={e.duration}/>
                        <Picture value={e.picture} title={e.title}/>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Title value={e.title}/>
                        <Material value={e.material}/>
                        <Description value={e.description}/>
                        <Tech value={e.skill}/>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default ContentContainer
