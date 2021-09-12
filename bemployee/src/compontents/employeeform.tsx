import { useState } from "react"

interface IState{
    fName:string,
    lName:string,
    age:number,
    bunId:number,
    profile:string
}

export function EmployeForm(){
    const defaultState:IState={
        fName:"",
        lName:"",
        age:0,
        bunId:0,
        profile:""
    }

   
    const[emp,setEmployee]= useState(defaultState)
  
    const changeFirstName=(event:any)=>
    {
        setEmployee({...emp,fName:event.target.value})
    }
    const changeLastName=(event:any)=>
    {
        setEmployee({...emp,lName:event.target.value})
    }
    const changeAge=(event:any)=>
    {
        setEmployee({...emp,age:event.target.value})
    }
    const changeBunId=(event:any)=>
    {
        setEmployee({...emp,bunId:event.target.value})
    }
    const changeProfile=(event:any)=>
    {
        setEmployee({...emp,profile:event.target.value})
    }
    const reset=()=>
    {
        setEmployee(defaultState)
    }

    return <div>
        <input className="inputField" type="text" onChange={changeFirstName} value={emp.fName} name="fName" placeholder="Enter First Name"></input>
        <input className="inputField" type="text" onChange={changeLastName} value={emp.lName} name="lName" placeholder="Enter Last Name"></input>
        <input className="inputField" type="text" onChange={changeAge} value={emp.age} name="age" placeholder="Enter Age"></input>
        <input className="inputField" type="text" onChange={changeBunId} value={emp.bunId} name="bundld" placeholder="Enter BunId"></input>
        <input className="inputField" type="text" onChange={changeProfile}value={emp.profile} name="profile" placeholder="Enter Profile"></input>
        <button className="btn" onClick={reset}>Reset</button><button className="btn" onClick={()=> console.log(emp)}> Add Employee</button>

    </div>
}