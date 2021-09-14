import React, { useState } from "react"
import { EmployeeDetail } from "./empdetail"
import { EmployeForm } from "./employeeform"

export interface IProps{
    persons:Employee[]
};

export interface Employee{
  fName:string,
  lName:string,
  age:number,
  bunId:number,
  profile:string
};




export function EmployeeList(iprops:IProps)
{

   const[employess,setEmployee]=useState(iprops.persons)

   let selectedEmployee:Employee={"bunId":0,age:0,profile:"",fName:"",lName:""}
   const[employeeselected,updateForm]=useState(selectedEmployee)
   const updateEmployee=(emp:Employee)=>
   {
       const laatestList = employess;
       laatestList.push(emp);
       setEmployee(laatestList)
       
   }

   const removeEmployee=(employee:Employee)=>
   {
       setEmployee(employess.filter((i)=>i!==employee));
   }
   const updateEmployeeDetail=(employee:Employee)=>
   {
       const selectedIndex=employess.indexOf(employee);
       const selectedItem = employess[selectedIndex];
       console.log(selectedItem)
       updateForm(selectedItem)
   }


   
   const formData= {dataState:setEmployee,data:iprops.persons};
    employess.map((item)=> console.log(item.bunId))
    return<div>
          <EmployeForm setPeople={setEmployee} people={employess} employee={employeeselected}/>
          {console.log("Render",employeeselected)}
          <ul className="order_list">{
    
    employess.map((item)=> <li key={item.bunId}>
        <button onClick={()=>removeEmployee(item)}>Remove Employee</button>
        <button onClick={()=>updateEmployeeDetail(item)}>Update Employee</button>
    <div>{item.bunId}</div>
    <div>{item.fName}</div>
    <div>{item.lName}</div>
    <div>{item.age}</div>
    
    <div>{item.profile}</div></li>)
}
 
</ul>
    </div> 


}