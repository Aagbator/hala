import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component';
import Business from './pages/business/business.component';
import Drive from './pages/drive/drive.component';
import Freight from './pages/freight/freight.component';
import Fleet from './pages/fleet/fleet.component';
import Footer from './components/footer/footer.component';

function App(props) {
  return (
      <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/freight" component={Freight} />
        <Route exact path="/fleet" component={Fleet} />
        <Route exact path="/drive" component={Drive} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
