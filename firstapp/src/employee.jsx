function EmployeeCard(props) {
let employee = props;
    return (<div>
        <div>
            {employee.fName}
    </div>
    <div>
            {employee.lName}
    </div>
    <div>
            {employee.company}
    </div>
    <img src={employee.profile_image}/>
    </div>);
            
    
}

export default EmployeeCard;
