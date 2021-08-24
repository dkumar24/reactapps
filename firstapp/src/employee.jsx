function EmployeeCard(props) {
let employee = props;
    return (<div>
            <img src={employee.profile_image} width={50} height={50} />
        <div>
            {employee.fName}
    </div>
    <div>
            {employee.lName}
    </div>
    <div>
            {employee.company}
    </div>
    
    </div>);
            
    
}

export default EmployeeCard;
