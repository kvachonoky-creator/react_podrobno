import React from "react"
import { useMemo, useState } from "react"

export const UseCallBack = () => {
const [counter, setCounter] = useState(0)
const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

const newArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf("a") > -1)
}, [users])


const addUser = () => {
    const newUsers = [...users, "Sveta "+ new Date().getTime()]
}

return <>
<button onClick={() => setCounter(counter + 1)}>+</button>
<button onClick={() => addUser()}>addUser</button>
{counter}

</>
}
