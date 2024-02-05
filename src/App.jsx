import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route exact path="/dashboard" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
