import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAppBar from './components/MyAppBar';
import MainPage from './components/MainPage';
import PostDetails from './components/PostDetails';
import About from './components/About';
//import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <MyAppBar />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/articles/:id' element={<PostDetails />} />
          <Route path='/about' element={<About />} />
          {/*<Route path='/projects' element={<Projects />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
