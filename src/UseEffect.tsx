import { useEffect, useState } from "react"

export const UseEffect = () => {
    const [b, setB] = useState('')

    useEffect(() => {
        let a = new Date()
        setInterval(() => {
            setB(`${a.getHours()}: ${a.getMinutes()}: ${a.getSeconds()}`)
        }, 1000)
    }, [b])

    return (
        <>
            Timer: {b}
        </>
    )
}