import React from 'react';
import "@dellstorage/dell-design-react-common/main.css";
import './App.css';
import Dashboard from './pages/dashboard';
import InfrastructureCluster from './pages/infrastructureCluster';

function App() {
  return (
    <div>
      <h1>Hello Atlantic!</h1>
      {/* <Dashboard/> */}
      <InfrastructureCluster/>
    </div>
  );
}

export default App;
