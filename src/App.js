import React from 'react';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
