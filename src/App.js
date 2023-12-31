import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Details from './routes/Details';
import NotMatchpage from './routes/NotMatchpage';
import Homeroute from './routes/Homeroute';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homeroute />} />
        <Route path="Details" element={<Details />} />
        <Route path="*" element={<NotMatchpage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
