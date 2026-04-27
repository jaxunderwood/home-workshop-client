import styles from '../styles/App.module.css';



export default function Home() {
    return (
        <div>
 <section className={styles.hero}>
    {/* hero  */}
            <div>
                <h1 className={styles.head1}>Hands-on learning for real homes</h1>
            </div>
        </section>
        <section className={styles.content}>
    {/* Content  */}
            <h1>Featured Project</h1>


            <div className={styles.projectCard}>

                <div className={styles.card}>
                    <figure className={styles.imagec}><img className={styles.imagefw} src="images/cabinet_painting.jpg"
                            alt="hand painting cabinet front" /></figure>

                    <div className={styles.details}>
                        <h2 className={styles.project}>How to Paint Cabinets</h2>
                        <h3>Project level: <span className={styles.level}>intermediate</span></h3>
                        <h3>Time: <span className={styles.level}>Weekend project</span></h3>
                    </div>
                </div>



                <div className={styles.card}>
                    <figure className={styles.imagec}><img className={styles.imagefw} src="images/drywall_mudding.jpg" alt="hand spreading drywall mud" /></figure>

                        <div className={styles.details}>
                            <h2 className={styles.project}>How to Put up Drywall</h2>
                            <h3>Project level: <span className={styles.level}>intermediate</span></h3>
                            <h3>Time: <span className={styles.level}> 2 hours</span></h3>
                        </div>
                </div>


            </div>
        </section>
        <aside className={styles.aside}>
            <img className={styles.imagefw} src="images/ceiling-fan.jpg"
                alt="still ceiling fan in living room with window in the background" />
            <div className={styles.tipBox}>
                <h1>Tip of the week</h1>
                <p>Ceiling fans should run <strong>counterclockwise</strong> in the summer at higher speeds to create a
                    cool, downdraft breeze. In the winter, set them to run <strong>clockwise</strong> at a low speed to
                    create an updraft that pulls cool air up and pushes warm air down from the ceiling</p>
            </div>
        </aside>
        </div>
    );
}
