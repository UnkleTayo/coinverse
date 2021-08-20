import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';
import Login from './pages/SignIn/Signin';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={Login} exact />
    </div>
  );
}

export default App;
