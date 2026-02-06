import React, { useState } from "react";

export default {
    title: "useState demo"
}

function generationData() {
    console.log("generationData");
    return 32131421412
}

export const Example1 = () => {
    console.log("Example1");

    const initState = generationData

    const [counter, setCounter] = useState(generationData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}