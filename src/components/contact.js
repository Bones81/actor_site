import { useState } from "react"
import { send } from "emailjs-com"

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Nathan L. Freeman',
        message: '',
        reply_to: '',
        source: 'actor_site'
    })

    const USER_ID = process.env.REACT_APP_KEY

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(toSend);
        send(
            'service_fnaxhaa',
            'template_blteyif',
            toSend,
            USER_ID
        )
        .then((response) => {
            console.log('SUCCESS', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value });
    }

    return (
        <>
            <section id="contact">
                <h2 className="section-title">You Talkin' To Me?!</h2>
                <h4 className="contact-blurb">Leave a message for Nathan!</h4>
                <form onSubmit={onSubmit}>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" id="email-textbox" cols="50" rows="15" placeholder="Hello Nathan,
                    My name is also Nathan, and I think your site is pretty neat. I like the colors. I am 10 years old. Who is your favorite web designer? I want to be an actor/singer turned web designer when I grow up, just like you. Do you like chocolate chips? Because I do. 
                    
                    Your friend, 
                    Also Nathan" value={toSend.message} onChange={handleChange} ></textarea>
                    <br/>
                    <br/>
                    <label htmlFor="from_name">Your name:</label>
                    <br/>
                    <input type="text" name='from_name' placeholder="Kwahi T'Fannonate" defaultValue={toSend.from_name} onChange={handleChange} />
                    <br/><br/>
                    <label htmlFor="reply_to">Your email address:</label><br/>
                    <input type="email" name="reply_to" id="email-entry-box" placeholder="username@example.com" defaultValue={toSend.reply_to} onChange={handleChange}/>
                <br/>
                <button className="submit-btn" type="submit">Submit</button>
                </form>
                <br/><br/>
            </section>
        </>
    )
}

export default Contact