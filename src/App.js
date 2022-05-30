import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
// import ScrollToTop from './components/ScrollToTop';
// import { FooterContainer } from './components/FooterSection';
// import SignIn from './pages/login/SignIn';
import ProvideAuth from './security/ProvideAuth';
import  AuthRoute from './security/AuthRoute';
import './interceptors/interceptors'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>  {
      setIsOpen(!isOpen);
  }

  return (
    <ProvideAuth>
    <Router>
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        {/* <AuthRoute path='/riders' component={Riders} />
        <Route path='/register' component={SignUp} />
        <Route path='/login' component={SignIn} /> */}
      </Switch>
    </Router>
    </ProvideAuth>
  );
}

export default App;
