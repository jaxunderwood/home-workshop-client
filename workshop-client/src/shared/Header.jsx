import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/App.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';




export default function Header({ user, onLogout }) {
    return (
        <div>
            <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.nav1}>
                <Link className={styles.logo} to="/">Home Work</Link>
                <div>
                    {user ? (
                    <>
                        <Link to="/dashboard">My Dashboard</Link>
                        <button onClick={onLogout}>Logout</button>
                    </>
                    ) : (
                    <>
                    <Link className={styles.link} to={"/signin"}>
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link className={`${styles.link} ${styles.cap}`} to="/signup">sign up</Link>
                    </>
                    )}
                </div>
            </div>
            <div className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li><Link to="/projectHome">Projects</Link></li>
                    <li><Link to="/workshop">Workshop</Link></li>
                    <li><Link to="/forum">User Forum</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                <search>
                    <form>
                        <input className={styles.search1} type="search" name="site-search" id="site-search" placeholder="Search. . ." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </form>
                </search>
            </div>
            <a href="javascript:void(0);" className={styles.menuIcon}>
                <i className="fa-solid fa-bars-staggered"></i></a>
        </nav>
    </header>
        </div>
    );
}
