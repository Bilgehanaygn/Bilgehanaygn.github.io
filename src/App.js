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
      <Router basename="/Bilgehanaygn.github.io">
        <Routes>
          <Route path="/articles" element={<MainPage/>}/>
          <Route path="/articles/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/articles" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
