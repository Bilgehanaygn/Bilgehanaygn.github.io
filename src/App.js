import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyAppBar from './components/MyAppBar';
import MainPage from './components/MainPage';
import PostDetails from './components/PostDetails';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/Bilgehanaygn.github.io/website/articles" element={<MainPage/>}/>
          <Route path="/Bilgehanaygn.github.io/website/articles/:id" element={<PostDetails />} />
          <Route path="/Bilgehanaygn.github.io/website/about" element={<About />} />
          <Route path="/Bilgehanaygn.github.io/website/" element={<Navigate to="/Bilgehanaygn.github.io/website/articles" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
