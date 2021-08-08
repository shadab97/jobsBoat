import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css"
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="Header">
      <Navbar isLogin={true} />
      <Routes />
    </div>
  );
}

export default App;
