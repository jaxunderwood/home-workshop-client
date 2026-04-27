import styles from '../styles/App.module.css';




export default function Forum() {
    return (
        <div>
<div className={styles.forum}>
<section className={styles.forumDiscussion}>
<nav className={styles.forumNav}>
 <div className={styles.fTopbar}>
<button className={styles.forumBtn}>Start New Discussion</button>
<ul>
    <li>All Discussions</li>
    <li>Following</li>
</ul>
 </div>
<div className={styles.fBottombar}>
    <ul>
        <li>General</li>
        <li>Getting Started</li>
        <li>Tools</li>
        <li>Electrical</li>
        <li>Plumbing</li>
    </ul>
</div>
</nav>


</section>
<section className={styles.forumMain}>
<ol>
    <li className={styles.row}>
        <a href="/item">
        <h4 className={styles.postTitle}> Post Title 1</h4>
        <div className={styles.bottom}>
            <p className={styles.timestamp}>March 13, 2026</p>
            <p className={styles.commentCount}>4 comments</p>
        </div>
        </a>
    </li>
    <li className={styles.row}>
        <a href="/item">
            <h4 className={styles.postTitle}> Post Title 2</h4>
            <div className={styles.bottom}>
                <p className={styles.timestamp}>March 13, 2026</p>
                <p className={styles.commentCount}>4 comments</p>
            </div>
        </a>
    </li>
    <li className={styles.row}>
        <a href="/item">
            <h4 className={styles.postTitle}> Post Title 3</h4>
            <div className={styles.bottom}>
                <p className={styles.timestamp}>March 13, 2026</p>
                <p className={styles.commentCount}>4 comments</p>
            </div>
        </a>
    </li>
</ol>

</section>
    </div>
        </div>
    );
}
