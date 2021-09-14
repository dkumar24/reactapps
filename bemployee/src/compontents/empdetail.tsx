import { Employee } from "./emplist";

export function EmployeeDetail(emp:Employee)
{
    return (<li key={emp.bunId}>
            <div>{emp.bunId}</div>
            <div>{emp.fName}</div>
            <div>{emp.lName}</div>
            <div>{emp.age}</div>
            <div>{emp.profile}</div></li>);
}