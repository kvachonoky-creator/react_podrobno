import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OnOff } from './onOff';

function App() {
  return (
    <div>
      <OnOff selected={false} />
      <OnOff selected={true} />
    </div>
  );
}

export default App;
