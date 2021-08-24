import EmployeeCard from "./employee";


const EmployeeList =(props)=> (<div>
    {props.employeelist.map(employee => <EmployeeCard{...employee}/>)}
</div>)
export default EmployeeList;