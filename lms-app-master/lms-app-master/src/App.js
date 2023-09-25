import logo from './logo.svg';
import RoutPage from './Route/Routes'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

import './App.css';

function App() {
  return (
    
      <RoutPage />
    
  );
}

export default App;
