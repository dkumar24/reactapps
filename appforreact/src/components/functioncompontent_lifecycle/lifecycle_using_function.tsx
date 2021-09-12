import { useEffect, useState } from "react"

export function LifeCycleUisngFunction() {
    const[count,setCount]=useState(0);
    const updateCounter=()=>setCount(count+1);
    //Called One Time
    useEffect(()=>{
        console.log("Called One Time");
        setCount(count+1);
        //eslint-disable-next-line react-hooks/exhaustive-deps

    },[]);
    //Called when the value of count is changed
    useEffect(()=>{

        console.log("Called Everytime when Counter value Updated");
    },[count]);
    //Called Every time
    useEffect(()=>{console.log("Called Everytime")})

    //Called for Clean before rending component again
    useEffect(()=>{console.log("Called for clean up")
    return ()=>{
        console.log("Called for clean up before re redending")
    }
},[count]
    
    )

    return <div>
       <button onClick={updateCounter}>{count}</button>
   </div>

}