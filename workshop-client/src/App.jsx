import { Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Header from './shared/Header';
import About from './Components/About';
import Forum from './Components/Forum';
import Home from './Components/Home';
import ProjectHome from './Components/ProjectHome';
import Projects from './Components/Projects';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Thread from './Components/Thread';
import Workshop from './Components/Workshop';
import Footer from './shared/Footer';


function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    navigate('/dashboard');
  };
  // add/remove favorites
  const toggleFavorite = (project) => {
    const isFavorited = favorites.find((fav) => fav.id === project.id);


      if (isFavorited) {
      fetch(`http://localhost:3001/favorites/${project.id}`, { method: 'DELETE' })
      .then(() => setFavorites(prev => prev.filter(f => f.id !== project.id)));
  } else {
    // CREATE (Post)
    fetch('http://localhost:3001/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    })
    .then(res => res.json())
    .then(data => setFavorites(prev => [...prev, data]));
  }
};

  const handleLogout = () => {
    setUser(null);
    navigate('/signin');
  };



  return (
    <>
    <Header user={user} onLogout={handleLogout} />
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onLogin={handleLogin} />} />


      <Route path="/projectHome" element={<ProjectHome />} />
      <Route path="/projects"
          element={<Projects favorites={favorites} onToggleFavorite={toggleFavorite} />} />
              {/* The "Logged In" Component / Route */}
              {/* Pass the list of favorites to the Dashboard */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} favorites={favorites} /> : <Signin onLogin={handleLogin} />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/forum" element= {<Forum />} />
      <Route path="/thread" element={<Thread />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
 </Routes>
    <Footer />
    </>
  )
}

export default App
