import React from 'react';
import './App.css';
import { EmployeForm } from './compontents/employeeform';
import { Employee, EmployeeList } from './compontents/emplist';

const persons:Employee[]=[{
  fName:"Deepak",
  lName:"Kumar",
  age:37,
  bunId:10,
  profile:"Profile"
},{
  fName:"Deepak1",
  lName:"Kumar",
  age:37,
  bunId:11,
  profile:"Profile"
},
{
  fName:"Deepak2",
  lName:"Kumar",
  age:37,
  bunId:12,
  profile:"Profile"
},
{
  fName:"Deepak3",
  lName:"Kumar",
  age:37,
  bunId:13,
  profile:"Profile"
}];
function App() {
  return (
    <div>
 
   <EmployeeList persons={persons}/></div>
  );
}

export default App;
