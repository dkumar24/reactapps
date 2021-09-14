import React, { useEffect, useState } from "react"
import { Employee,IProps } from "./emplist"


export interface IADDProps {
    setPeople: React.Dispatch<React.SetStateAction<IProps["persons"]>>,
    people: IProps["persons"],
    employee:Employee|null
}


export const  EmployeForm:React.FC<IADDProps>=({setPeople,people,employee})=>
{
    let defaultState= (employee?.age!)? employee:{
        fName:"",
        lName:"",
        age:0,
        bunId:0,
        profile:""
    }
   
 
   
    
    const[emp,getEmployee]= useState<Employee>(employee!)
    useEffect(()=>{
       
        employee!==null &&
        getEmployee(employee)
    },[employee])
   
    const updateList=(event:any)=>
    {
           
                setPeople([...people,emp]);
    }

   
  
    const changeFirstName=(event:any)=>
    {
        getEmployee({...emp,fName:event.target.value})
    }
    const changeLastName=(event:any)=>
    {
        getEmployee({...emp,lName:event.target.value})
    }
    const changeAge=(event:any)=>
    {
        getEmployee({...emp,age:event.target.value})
    }
    const changeBunId=(event:any)=>
    {
        getEmployee({...emp,bunId:event.target.value})
    }
    const changeProfile=(event:any)=>
    {
        getEmployee({...emp,profile:event.target.value})
    }
    const reset=()=>
    {
        getEmployee(defaultState)
    }

  

    return <div>
        {console.log("Render Form",emp)}
        <input className="inputField" type="text" onChange={changeFirstName} value={emp.fName} name="fName" placeholder="Enter First Name"></input>
        <input className="inputField" type="text" onChange={changeLastName} value={emp.lName} name="lName" placeholder="Enter Last Name"></input>
        <input className="inputField" type="text" onChange={changeAge} value={emp.age} name="age" placeholder="Enter Age"></input>
        <input className="inputField" type="text" onChange={changeBunId} value={emp.bunId} name="bundld" placeholder="Enter BunId"></input>
        <input className="inputField" type="text" onChange={changeProfile}value={emp.profile} name="profile" placeholder="Enter Profile"></input>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={(event:any)=>updateList(event)}>{(defaultState.age!=0)?"Update":"Add"}</button>

    </div>
    
}
/*
export function EmployeForm(IAddProps:IADDProps){
    const defaultState:Employee={
        fName:"",
        lName:"",
        age:0,
        bunId:0,
        profile:""
    }

    const updateList=()=>
    {
            IAddProps.setPeople([...IAddProps.people,emp]);
    }

   

   
    const[emp,getEmployee]= useState(defaultState)
  
    const changeFirstName=(event:any)=>
    {
        getEmployee({...emp,fName:event.target.value})
    }
    const changeLastName=(event:any)=>
    {
        getEmployee({...emp,lName:event.target.value})
    }
    const changeAge=(event:any)=>
    {
        getEmployee({...emp,age:event.target.value})
    }
    const changeBunId=(event:any)=>
    {
        getEmployee({...emp,bunId:event.target.value})
    }
    const changeProfile=(event:any)=>
    {
        getEmployee({...emp,profile:event.target.value})
    }
    const reset=()=>
    {
        getEmployee(defaultState)
    }

  

    return <div>
        <input className="inputField" type="text" onChange={changeFirstName} value={emp.fName} name="fName" placeholder="Enter First Name"></input>
        <input className="inputField" type="text" onChange={changeLastName} value={emp.lName} name="lName" placeholder="Enter Last Name"></input>
        <input className="inputField" type="text" onChange={changeAge} value={emp.age} name="age" placeholder="Enter Age"></input>
        <input className="inputField" type="text" onChange={changeBunId} value={emp.bunId} name="bundld" placeholder="Enter BunId"></input>
        <input className="inputField" type="text" onChange={changeProfile}value={emp.profile} name="profile" placeholder="Enter Profile"></input>
        <button className="btn" onClick={reset}>Reset</button><button className="btn" onClick={updateList}> Add Employee</button>

    </div>
}*/