import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from "./AuthContext";
import Layout from './components/Layout';
import Departments from './pages/Department/Departments';
import Department from './pages/Program/Programs';
import AddDepartment from './pages/Department/AddDepartment';
import AddProgram from './pages/Program/AddProgram';
import AddProject from './pages/progProjects/AddProject';
import Header from './components/Header';
import Auth from './pages/Auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import Programs from './pages/Program/Programs';

library.add(fas, faTwitter, faFontAwesome);

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
