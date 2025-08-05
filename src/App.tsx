import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/mark-cv" />} />
          <Route path="/mark-cv" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
