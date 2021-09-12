import { useState } from "react";

export function ConditionalRending() {
    const[checked,setCheckedValue]=useState(false);
    
   const updateCheckedValue=(event:any)=>{
     
       setCheckedValue(event.target.checked)

   }

   return <div><input type="checkbox" checked={checked} onClick={updateCheckedValue}>
    
   </input>
   {checked? <div>Hello World</div> : <div>Good Morning</div>}
        </div>;
   

}