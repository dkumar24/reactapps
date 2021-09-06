class Employee
{
      private lName:String;
      private fName:String;
      private age:number;
      private bundId:String;

      constructor(fName:String,lName:String,age:number,bundId:String)
      {
          this.age = age;
          this.bundId=bundId;
          this.fName=fName;
          this.lName=lName;
      }

      getEmpFirstName():String
      {
          return this.fName;
      }
       getEmpLastName():String
      {
          return this.lName;
      }
       getEmpBunId():String
      {
          return this.bundId;
      }
     
       getEmpAge():number
      {
          return this.age;
      }

}