import styles from '../styles/App.module.css';




export default function About() {
    return (
        <div>
<section className={styles.heroAbout}>
    {/*  hero  */}
    <div>
        <h1 className={styles.head1}>About The Home Workshop</h1>
    </div>
</section>
<section className={styles.content}>
     {/* Content  */}
    <div className={styles.menu}>
        <p className={styles.description}>Jacqui Hudson-Underwood created <em>Home</em> Work to support anyone passionate about home improvement—from homeowners and renters to house flippers. It is a space designed to foster a community of people who are ready to tackle their own projects but are looking for a little extra help and encouragement along the way.</p>


    </div>
    <div className={styles.contact}>
        <div className={styles.contactGreeting}>
<h1 className={styles.contactH1}>Hello!</h1>
<p className={styles.moreInfo}>Do you have a question? Are you interested in partnering with us? Let a message and we'll get back to you!</p>
        </div>


    <form className={styles.contactForm}>
        <div className={styles.formFields}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required placeholder="Your Name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  placeholder="Your email address" />

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>

            <div>
                <label htmlFor="message"></label>
                <textarea name="message" placeholder="Enter your message here."></textarea>
                <input className={styles.submitButton} type="submit" value="Submit" />
            </div>
        </div>
    </form>
    </div>
</section>
        </div>
    );
}
