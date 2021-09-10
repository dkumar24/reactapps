import { useState } from "react"

export function LifeCycleUisngFunction() {
    const[count,setCount]=useState(0);
    const updateCounter=()=>setCount(count+1);
    return <div>
       <button onClick={updateCounter}>{count}</button>
   </div>

}