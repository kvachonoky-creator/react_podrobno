import React, { useState } from 'react';
import './App.css';
import { ControlledOnOff } from './ControlledOnOff';
import { ItemType, Select } from './Select';
import { HookUseMemo } from './HookUseMemo';
import { Example1 } from './UseState';

function App() {

  const [onOff, setOnOff] = useState<boolean>(false)

  const initialState = [
    { title: "Minsk", value: 1 },
    { title: "Praga", value: 2 },
    { title: "Vena", value: 3 },
  ]

  const [items, setItems] = useState<ItemType[]>([])

  const onChangeSelect = (value: any) => {
    const newValue = initialState.find(v => v.value === value)
    setItems(newValue ? [newValue] : [])
  }

  return (
    <div className={"App"}>
      <Example1 />
    </div>
  );
}

export default App;
