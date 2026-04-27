import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/App.module.css';


export default function Footer() {
    return (
        <div>
         <footer className={styles.footer}>
    <a className={styles.link} href="https://www.linkedin.com/in/jacquelynnehudson/" aria-label="LinkedIn Profile for Jacquelynne Hudson-Underwood">
    <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a className={styles.link} href="https://github.com/jaxunderwood" aria-label="Github Profile for Jacquelynne Hudson-Underwood">
        <FontAwesomeIcon icon={faSquareGithub} />
    </a>
    <p>Website design by Jacqui Hudson-Underwood</p>
    <p>Copyright © {new Date().getFullYear()}</p>
</footer>
        </div>
    );
}
