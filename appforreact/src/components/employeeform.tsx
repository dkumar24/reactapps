import { useState } from "react"

interface UserForm{
    name:string,
    age:number,
    bunId:number,
    profile:string,


}


export  function EmployeeForm() 
{
    const defaultValue:UserForm={
        name:"",
        age:0,
        bunId:0,
        profile:""
    }
    
   const [emp,setEmpData]=useState(defaultValue)
   
    
   const onNameChange=(event:any)=> 
   {
       setEmpData({...emp,name:event.target.value})
   }

   const onAgeChange=(event:any)=> 
   {
       setEmpData({...emp,age:event.target.value})
   }
   const onBunIdChange=(event:any)=> 
   {
       setEmpData({...emp,bunId:event.target.value})
   }
   const onProfileChange=(event:any)=> 
   {
       setEmpData({...emp,profile:event.target.value})
   }
    console.log('form',emp);
 return (<div>
     <input type="text"
     placeholder="Enter Name"
     onChange={onNameChange}
     name="ename"></input>
      <input type="text"
     placeholder="Enter Age"
    onChange={onAgeChange}
     name="eage"></input>
      <input type="text"
     placeholder="Enter BundId"
    onChange={onBunIdChange}
     name="ebunId"></input>
      <input type="text"
     placeholder="Enter Name"
    onChange ={onProfileChange}
     name="eprofil"></input>
     
     <button type="button" name="btnsubmit" onClick={(event:any)=>console.log("form Data",emp)}>Submit</button>

   

 </div>)   
}