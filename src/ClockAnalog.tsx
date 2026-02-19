import s from './ClockAnalog.module.css'
import {useEffect, useState} from "react";

export const ClockAnalog = () => {


    const [secondDeg, setSecondDeg] = useState(new Date().getSeconds() * 6);
    const [minutesDeg, setMinutesDeg] = useState(new Date().getMinutes() * 6);
    const [hoursDeg, setHoursDeg] = useState(new Date().getHours() * 15);

    useEffect(() => {

        setInterval(() => {
            setSecondDeg(new Date().getSeconds() * 6)
        }, 1000)
        setInterval(() => {
            setMinutesDeg(new Date().getMinutes() * 6)
        }, 1250)
        setInterval(() => {
            setHoursDeg(new Date().getHours() * 15)
        }, 1500)
    }, []);


    return (
        <div className={s.container}>
            <div className={s.containerHours}>
                <div style={{transform: `rotate(${secondDeg}deg)`}} className={s.second}></div>
                <div style={{transform: `rotate(${minutesDeg}deg)`}} className={s.minutes}></div>
                <div style={{transform: `rotate(${hoursDeg}deg)`}} className={s.hours}></div>
            </div>
        </div>
    )
}