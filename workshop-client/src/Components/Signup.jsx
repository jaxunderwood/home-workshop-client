// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';



export default function Signup({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();

    const formData = new FormData(e.target);
    const newUser = {
        username: formData.get('user-name'),
        email: formData.get('email'),
        // Use .getAll to capture multiple checkbox selections as an array
        roles: formData.getAll('roles')
        };

        onLogin(newUser);
    };



    return (
        <div>
   <div className={styles.signUp}>
<form onSubmit={handleSubmit} className={styles.signBox}>
    <legend>Sign Up</legend>
    <label htmlFor="user-name">User name</label>
    <input type="text" name="user-name" id="user-name" required placeholder="User Name" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder="email.address@email.com" />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />

    <div className={styles.formExperience}>
        <div>
            <label htmlFor="renter"><input name="roles" type="checkbox" id="renter" value="renter" />Renter</label>
        </div>
        <div>
            <label htmlFor="homeowner"><input name="roles" type="checkbox" id="homeowner" value="homeowner" />
Homeowner</label>
        </div>
        <div>
            <label htmlFor="flipper"><input name="roles" type="checkbox" id="flipper" value="flipper" />
House Flipper</label>
        </div>
        <div>
            <label htmlFor="expert"><input name="roles" type="checkbox" id="expert" value="expert" />
Contractor</label>
        </div>
</div>
    <input className={styles.signButton} type="submit" value="Submit" />
    <div>
        <p className={styles.center}>Already have an account? <strong><Link className={styles.link} to="/signin">Sign In</Link></strong></p>
    </div>
</form>

<img className={`${styles.imagefw} ${styles.fade}`} src="images/plant-room.jpg" alt="A cozy, sunlit living room with an 'urban jungle' aesthetic. A deep teal velvet sofa sits against a navy blue accent wall lined with wooden shelves holding various houseplants. Dozens of potted plants, including cacti and trailing vines, fill the space. A black cat napped on a yellow rug near a large mustard-yellow knitted pouf." />

</div>
        </div>
    );
}
