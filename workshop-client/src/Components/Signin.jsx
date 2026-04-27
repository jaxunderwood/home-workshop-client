import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';



export default function Signin({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally validate with a database/API
        const mockUser = { email: e.target.email.value };
        onLogin(mockUser);
    };




    return (
        <div>
    <div className={styles.signUp}>
    <img className={`${styles.imagefw} ${styles.fade}`} src="images/plant-room.jpg" alt="A cozy, sunlit living room with an 'urban jungle' aesthetic. A deep teal velvet sofa sits against a navy blue accent wall lined with wooden shelves holding various houseplants. Dozens of potted plants, including cacti and trailing vines, fill the space. A black cat napped on a yellow rug near a large mustard-yellow knitted pouf." />

<form onSubmit={handleSubmit} className={styles.signBox}>
    <legend>Login</legend>


    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder="email.address@email.com" />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />

    <input className={styles.signButton} type="submit" value="Submit" />
    <div className={styles.formAdditional}>
            <p><strong><Link className={styles.link1} to={"/signup"}>Create an account</Link></strong></p>
            {/* <p><strong><Link className={styles.link1} to=""></Link>Forgot Password?</strong></p> */}
    </div>
</form>


</div>
        </div>
    );
}
