import { useState } from 'react';
import './App.css';
import { ItemType } from './Select';
import { UseEffect } from './UseEffect';

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
      <UseEffect/>
    </div>
  );
}

export default App;
