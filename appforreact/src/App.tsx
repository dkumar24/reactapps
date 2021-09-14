import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome';
import { ToogleButton } from './components/togglebutton';
import { ToogleButtonTwo } from './components/tooglebuttontwo';
import { EmployeeForm } from './components/employeeform';
import { LifeCycleDemo } from './components/class_compontent_life_cycle/lifecycleusingclass_compontent';
import { LifeCycleUisngFunction } from './components/functioncompontent_lifecycle/lifecycle_using_function';
import { ConditionalRending } from './components/conditionalrendering';
import { ListofItems } from './components/listdemo/listwithkeysdemo';




function sum(a:number,b:number)
{
  return a+b;
}

interface Props
{
  a:number,
  b:number
}

function SumComponent(props:Props)
{
  return <>{props.a+props.b}</>

}



function App() {
  const value = sum(10,50);
  return (
    
    
    <div className="App">
      <ListofItems items={[{id:1,title:"Deepak"},{id:2,title:"Sandeep"},{id:3,title:
      "Chanpreet"},{id:4,title:"Navdeep"},{id:5,title:"Pardeep"},{id:6,title:"Kuldeep"},{id:7,title:"Sharma"}]}/>
      <div><LifeCycleDemo initialValue={0}/>
    
      <LifeCycleUisngFunction/>
      </div>
      <header className="App-header">
      <ConditionalRending/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>Sum of Two Numbers={value}</h1>
         
      <div>Sum of A+b=<SumComponent a={10} b={78}></SumComponent></div>
      <Welcome name={"Deepak"}/>
      <Welcome name={"Navdeep"}/>
      <ToogleButtonTwo/>
      <EmployeeForm/>
      <ToogleButton/>
    
        </a>
        
      </header>
    </div>
  );
}

export default App;
