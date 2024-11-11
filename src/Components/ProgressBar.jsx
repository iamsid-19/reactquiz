import { useEffect, useState } from "react"

export default function ProgressBar({ timeOut, onTimeOut }) {
    const [remainingTime ,setRemainingTime]=useState(timeOut);
    useEffect(()=>{
       const timmer =  console.log("settimeout running" )
        setTimeout(() => {
            onTimeOut();
        }, timeOut)
        return () => {clearTimeout(timmer)};
    },[timeOut,onTimeOut])
   

    useEffect(()=>
    {
        console.log("setInterval running" )
       const interval = setInterval(()=>{
            setRemainingTime((prevTime) =>(prevTime-100));
           },100)
           return () =>{
            clearInterval(interval)
           };
    },[])
    

    return <progress id="question-time" max={timeOut} value={remainingTime} />
}