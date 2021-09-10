import { useState } from "react";

export function ToogleButtonTwo(){

    const [checked,toogle]=useState(false);
    return <div><input type="checkbox" checked={checked} onClick={(event:any)=>toogle(event.target.checked)}></input> </div>

}