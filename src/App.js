import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage.component';
import Footer from './components/footer/footer.component';

function App(props) {
  return (
      <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
