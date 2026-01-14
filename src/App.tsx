import React, { useState } from 'react';
import './App.css';
import { ControlledOnOff } from './ControlledOnOff';
import { ItemType, Select } from './Select';

function App() {

  const [onOff, setOnOff] = useState<boolean>(false)

  const initialState = [
    { title: "Minsk", value: 1 },
    { title: "Praga", value: 2 },
    { title: "Vena", value: 3 },
  ]

  const [items, setItems] = useState < ItemType[]> ([])

  const onChangeSelect = (value: any) => {
    const newValue = initialState.find(v => v.value === value)
    setItems(newValue? [newValue] : [])
  }

  return (
    <div className={"App"}>
      {/* <ControlledOnOff
        on={onOff}
        changeOnOFf={(value) => setOnOff(value)}
      /> */}
      <Select items={initialState} onChange={onChangeSelect} value={items} />
    </div>
  );
}

export default App;
