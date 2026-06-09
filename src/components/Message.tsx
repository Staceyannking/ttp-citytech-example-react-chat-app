import { faker } from "@faker-js/faker";


const Message = ({text}) => {
    //BUG: the name regenerates on every new message. old message should retain their name 
    const name = faker.person.fullName();
    const time = faker.person.time()

    return <>
    <p className='message'>
        {text} - {name}- [time]
    </p>
    </>;

}



export default Message