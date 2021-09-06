"use strict";
var Employee = /** @class */ (function () {
    function Employee(fName, lName, age, bundId) {
        this.age = age;
        this.bundId = bundId;
        this.fName = fName;
        this.lName = lName;
    }
    Employee.prototype.getEmpFirstName = function () {
        return this.fName;
    };
    Employee.prototype.getEmpLastName = function () {
        return this.lName;
    };
    Employee.prototype.getEmpBunId = function () {
        return this.bundId;
    };
    Employee.prototype.getEmpAge = function () {
        return this.age;
    };
    return Employee;
}());
/// <reference path="empolyee.ts" />
var employee1 = new Employee("Deepak", "Kumar", 37, "Good Morning");
var employee2 = new Employee("Deepak1", "Kumar1", 37, "Good Morning");
var employee3 = new Employee("Deepak2", "Kumar2", 37, "Good Morning");
var employee4 = new Employee("Deepak3", "Kumar3", 37, "Good Morning");
var employee5 = new Employee("Deepak4", "Kumar4", 37, "Good Morning");
var employee6 = new Employee("Deepak5", "Kumar5", 37, "Good Morning");
var employee7 = new Employee("Deepak7", "Kumar7", 37, "Good Morning");
var testingList = [employee1, employee2, employee3, employee4, employee5, employee6];
var selectIndex = testingList.indexOf(employee1);
function RemoveElementFromStringArray(element) {
    testingList.forEach(function (value, index) {
        if (value == element)
            testingList.splice(index, 1);
    });
}
RemoveElementFromStringArray(employee1);
RemoveElementFromStringArray(employee2);
RemoveElementFromStringArray(employee3);
RemoveElementFromStringArray(employee4);
RemoveElementFromStringArray(employee5);
RemoveElementFromStringArray(employee6);
console.log(testingList);
//# sourceMappingURL=app.js.map