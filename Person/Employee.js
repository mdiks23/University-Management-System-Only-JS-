//importing inherited files first
import Uniperson from './Uniperson.js';

//variable declaration 
const _employeeId = Symbol('employeeId');
const _salary = Symbol('salary');

//creating classes
class Employee extends Uniperson{
  constructor(id,name,employeeId){
    super(id,name);
    this[_employeeId] = employeeId;
    this[_salary] = null;
  }
  //creating getter setter
  get employeeId(){
    return this[_employeeId];
  }
  set employeeId(value){
    this[_employeeId] = value;
  }
  get salary(){
    return this[_salary];
  }
  set salary(value){
    this[_salary] = value;
  }
  
  //creating toString to show output as String
  toString(){

    return `
    ${super.toString()},
    Employee Id : ${this[_employeeId]},
    Salary : ${this[_salary]}`;
  }
  
}



console.log("Employee Loaded Successfully......");
//exporting file
export default Employee;