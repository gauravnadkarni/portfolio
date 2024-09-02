import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import { useRef } from 'react';
import { ScrollProvider } from './components/ScrollContext';

const App: React.FC = ()=> {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider aboutRef={aboutRef} blogRef={blogRef} contactRef={contactRef} homeRef={homeRef} projectsRef={projectsRef} resumeRef={resumeRef} skillsRef={skillsRef} workHistoryRef={workHistoryRef}>
    <Router>
      <Routes>
          <Route path="/" Component={()=><Landing/>} />
      </Routes>
    </Router>
    </ScrollProvider>
  );
}

export default App;
