import { useState } from "react";

export function ToogleButton()
{
    const [checked,toogle]= useState(false);

    const updateStatus=(event:any)=>toogle(event.target.checked)

    return <div><input type="checkbox" checked={checked} onClick={updateStatus} ></input></div>
}