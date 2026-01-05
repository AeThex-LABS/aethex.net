import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Ecosystem from './pages/Ecosystem';
import Passport from './pages/Passport';
import Foundation from './pages/Foundation';
import Creators from './pages/Creators';
import Status from './pages/Status';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/passport" element={<Passport />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
