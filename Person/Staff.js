//importing inherited files first
import Employee from './Employee.js';
//variable declaration
const _tittle = Symbol('tittle');
//creating classes
class Staff extends Employee{
  constructor(id,name,tittle){
   super(id,name);
   this[_tittle] = tittle;
  }
  //creating getter setter
  get tittle(){
    return this[_tittle];
  }
  set tittle(value){
    this[_tittle] = value;
  }
  //creating toString to show output as String
  toString(){
    return `
    ${super.toString()}, 
    Job Tittle : ${this[_tittle]}`;
  }
  
}



console.log("Staff Loaded Successfully......");
//exporting file
export default Staff;