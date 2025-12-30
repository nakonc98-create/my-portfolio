
const Picture = (props) => {
    return (
        !props.value ? null : <div><img src={props.value} alt={props.value} className="w-5/6 rounded-md border-3 border-blue-900"/></div>
    )
}

export default Picture
