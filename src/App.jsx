import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './assets/style.css'
import Footer from './components/Footer';
import Loader from "./components/Loader";
import Navbar from './components/Navbar';
import About from './page/About';
import Courses from './page/Courses';
import PrivacyPolicy from './page/PrivacyPolicy';
import Tools from './page/Tools';

const Home = lazy(() => import('./page/Home'));
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/industries' element={<Courses />} />
          <Route path='/privacy/policy' element={<PrivacyPolicy />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='*' element={<h1>No Match</h1>} />
        </Routes>
      </Suspense>
    <Footer />
    </>
  )
}

export default App
