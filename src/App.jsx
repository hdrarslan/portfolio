import { useState, useCallback } from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import Work from './sections/Work';
import Contact from './sections/Contact';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [modalProject, setModalProject] = useState(null);
  const openProject = useCallback((project) => setModalProject(project), []);
  const closeProject = useCallback(() => setModalProject(null), []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <Work onProjectClick={openProject} />
        <Contact />
      </main>
      {modalProject && (
        <ProjectModal project={modalProject} onClose={closeProject} />
      )}
    </>
  );
}
