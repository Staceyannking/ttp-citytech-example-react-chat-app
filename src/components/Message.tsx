const Message = ({text, name, timestamp}) => {

    return <>
    <div className="textContainer">
    <p className='message'>
        {text} 
        <br/>
        {name} - {timestamp.toString()}
    </p>
    </div>
    </>;

}



export default Message