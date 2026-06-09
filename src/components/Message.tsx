import { faker } from "@faker-js/faker";


const Message = ({text}) => {
    //BUG: the name regenerates on every new message. old message should retain their name 
    const name = faker.person.fullName();

    return <>
    <p className='message'>
        {text} - {name}
    </p>
    </>;

}

export default Message