import EmployeeList from "./employeelist";



function App() {
  let employees = [{fName:"Deepak",lName:"Kumar",company:"Bechtel",profile_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"},
  {fName:"Deepak2",lName:"Kumar",company:"Bechtel",profile_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"},
  {fName:"Deepak3",lName:"Kumar",company:"Bechtel",profile_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"},
  {fName:"Deepak4",lName:"Kumar",company:"Bechtel",profile_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}]
  return (
    <div className="App">
      <EmployeeList employeelist={employees}/>
    </div>
  );
}

export default App;
