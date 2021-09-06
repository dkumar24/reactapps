/// <reference path="empolyee.ts" />



let employee1= new Employee("Deepak","Kumar",37,"Good Morning");
let employee2= new Employee("Deepak1","Kumar1",37,"Good Morning");
let employee3= new Employee("Deepak2","Kumar2",37,"Good Morning");
let employee4= new Employee("Deepak3","Kumar3",37,"Good Morning");
let employee5= new Employee("Deepak4","Kumar4",37,"Good Morning");
let employee6= new Employee("Deepak5","Kumar5",37,"Good Morning");
let employee7= new Employee("Deepak7","Kumar7",37,"Good Morning");



let testingList  = [employee1,employee2,employee3,employee4,employee5,employee6];
let selectIndex = testingList.indexOf(employee1)

function RemoveElementFromStringArray(element: Employee) {
    testingList.forEach((value,index)=>{
        if(value==element) testingList.splice(index,1);
    });
}

RemoveElementFromStringArray(employee1);
RemoveElementFromStringArray(employee2);
RemoveElementFromStringArray(employee3);
RemoveElementFromStringArray(employee4);
RemoveElementFromStringArray(employee5);
RemoveElementFromStringArray(employee6);


console.log(testingList)