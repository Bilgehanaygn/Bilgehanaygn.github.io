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
          <Route path='/website' element={<MainPage/>}/>
          <Route path='/website/articles' element={<MainPage/>}/>
          <Route path='/website/articles/:id' element={<PostDetails />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
