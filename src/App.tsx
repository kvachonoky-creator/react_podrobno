import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ControlledOnOff } from './ControlledOnOff';

function App() {

const [onOff, setOnOff] = useState<boolean>(false)

  return (
    <div className={"App"}>
      <ControlledOnOff
       on={onOff}
       changeOnOFf={(value) => setOnOff(value)}
        />
    </div>
  );
}

export default App;
