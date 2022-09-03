const Contact = () => {
    return (
        <>
            <section id="contact">
                <h2 class="section-title">You Talkin' To Me?!</h2>
                <h4 class="contact-blurb">Leave a message for Nathan using the space below.</h4>
                <form action="submit">
                    <label for="email-text">Message:</label><br/>
                    <textarea name="email-text" id="email-textbox" cols="50" rows="15" placeholder="Hello Nathan,
                    My name is also Nathan, and I think your site is pretty neat. I like the colors. I am 10 years old. Who is your favorite web designer? I want to be an actor/singer turned web designer when I grow up, just like you. Do you like chocolate chips. I do. 
                    
                    Your friend, 
                    Also Nathan"></textarea>
                    <br/>
                    <br/>
                    <label for="user-name">Your name:</label>
                    <br/>
                    <input type="text" placeholder="Kwahi T'Fannonate" />
                    <br/><br/>
                    <label for="email">Your email address:</label><br/>
                    <input type="email" name="user-email" id="email-entry-box" placeholder="username@example.com" />
                </form>
                <br/>
                <button class="submit-btn">Submit</button>
                <br/><br/>
            </section>
        </>
    )
}

export default Contact