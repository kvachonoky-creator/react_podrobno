import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digitsString = (number: number) => number < 10 ? `0${number}` : number

export const Clock: React.FC<PropsType> = (props) => {
    const [data, setDate] = useState(new Date())

    useEffect(() => {
       const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return <div>
        <span>{get2digitsString(data.getHours())}</span>
        :
        <span>{get2digitsString(data.getMinutes())}</span>
        :
        <span>{get2digitsString(data.getSeconds())}</span>
    </div>
}