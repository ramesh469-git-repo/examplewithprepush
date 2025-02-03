import { useEffect, useState } from "react"

const useCounter = (initialiser,component)=>{
    const [counter,setCounter] = useState(initialiser);
    function resetCounter(){
        setCounter(counter+1);
        
    } 
    useEffect(()=>{
        console.log(component+ "-"+ counter);
    },[counter,component])

    return resetCounter;

}

export default useCounter;