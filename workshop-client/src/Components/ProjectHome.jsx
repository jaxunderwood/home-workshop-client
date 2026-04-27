import React from 'react';
import styles from '../styles/App.module.css';
import { Link } from 'react-router-dom';

export default function ProjectHome() {
    return (
        <div>
  <section className={styles.content}>
            <h1>Projects</h1>
            <div className={styles.bigMenu}>
                <div className={styles.menu}>
                    <h2 className={styles.menuh2}>Browse By Category</h2>

                    <h3 className={styles.menuh3}><Link to="/projects"> Entryway</Link></h3>
                    <h3 className={styles.menuh3}><Link to="/projects">Closet</Link></h3>
                    <h3 className={styles.menuh3}><Link to="/projects">Bedroom</Link></h3>
                    <h3 className={styles.menuh3}><Link to="/projects">Bathroom</Link></h3>
                    <h3 className={styles.menuh3}><Link to="/projects">Garage</Link></h3>
                    <h3 className={styles.menuh3}><Link to="/projects">Laundry</Link></h3>
                <search>
                    <form>
                <input className={styles.search} type="search" name="search" id="search"
                            placeholder="Search. . ." />
                    </form>
                </search>
            </div>

            <div className={styles.photo}>
                <img className={styles.imagefw} src="images/bedroom.jpg"
                    alt="Boho-modern bedroom with a black accent wall, wooden ceiling fan, and woven wall decor. White bed linens sit atop a vibrant red Persian rug, flanked by textured nightstands and mid-century lamps." />
            </div>
        </div>
    </section>
        </div>
    );
}
