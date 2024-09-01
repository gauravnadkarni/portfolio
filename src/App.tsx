import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

const App: React.FC = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={()=><Landing/>} />
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/projects" element={<Projects />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
