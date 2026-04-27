import styles from '../styles/App.module.css';

export default function Dashboard({ user, favorites, setUser, setFavorites }) {

  // DELETE: Remove a favorite from the "database"
  const removeFavorite = (id) => {
    fetch(`http://localhost:3001/favorites/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      // After successful delete, update the UI state locally
      setFavorites(favorites.filter(fav => fav.id !== id));
    });
  };

  // UPDATE: Change the user's role (e.g., upgrading to "Expert")
  const upgradeToExpert = () => {
    const updatedData = { roles: [...user.roles, 'Expert'] };

    fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PATCH', // PATCH updates only the specific fields you send
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
    .then(res => res.json())
    .then(updatedUser => {
      setUser(updatedUser); // Update the global user state
    });
  };

  return (
    <div className={styles.container}>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={upgradeToExpert} className={styles.signButton}>
        Become an Expert
      </button>

      <section>
        <h3>Your Favorites</h3>
        <ul>
          {favorites.map(fav => (
            <li key={fav.id}>
              {fav.title}
              <button onClick={() => removeFavorite(fav.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
