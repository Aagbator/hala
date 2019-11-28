import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component';
import Business from './pages/business/business.component';
import Footer from './components/footer/footer.component';


function App(props) {
  return (
      <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/business" component={Business} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
