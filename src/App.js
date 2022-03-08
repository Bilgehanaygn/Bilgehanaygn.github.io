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
      <Router basename='https://bilgehanaygn.github.io/website/'>
        <Routes>
          <Route path='https://bilgehanaygn.github.io/website/' element={<MainPage/>}/>
          <Route path='https://bilgehanaygn.github.io/website/articles/:id' element={<PostDetails />} />
          <Route path='https://bilgehanaygn.github.io/website/about' element={<About />} />
          <Route path='https://bilgehanaygn.github.io/website/' element={<Navigate to="/articles" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
