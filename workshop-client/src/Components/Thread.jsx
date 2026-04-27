export default function Thread() {
    return (
        <div>
    <div className="top-bar">
        <h1 id="forum-topic">Forum Topic</h1>
    </div>
<section className="forum">
<section className="forum-discussion">
<nav className="forum-nav">
    <div className="f-topbar">
        <button className="forum-btn">Start New Discussion</button>
    </div>
    <div className="f-bottombar">
        <ul>
            <li>General</li>
            <li>Getting Started</li>
            <li>Tools</li>
            <li>Electrical</li>
            <li>Plumbing</li>
        </ul>
    </div>
</nav>

<div className="header">
    <h4 className="post-title"> Post Title 1</h4>
        <p className="post-question">the post question would go here</p>
    <div className="bottom">
        <p className="comment-ts">March 13, 2026</p>
        <p className="comment-count">4 comments</p>
    </div>
</div>
</section>


<textarea className="forum-comment"></textarea>
<button className="forum-btn">add comment</button>
<div className="comments">
    <div className="comment">
        <div className="top-comment"></div>
        <p className="user">Jacqui</p>
        <p className="comment-ts">March 13, 2026</p>
    </div>
    <div className="comment-content">
        comment content
    </div>
</div>

</section>

        </div>
    );
}
