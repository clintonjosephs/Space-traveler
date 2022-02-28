import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import Navbar from './components/Pages/Navbar';
import Profile from './components/Profile/Profile';
import Rockets from './components/Rockets/Rockets';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
