
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="App">

      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/riot.txt' />
        </Routes>
      </Router>
    </>

  );

}




export default App;
