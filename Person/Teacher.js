//importing inherited files first
import Employee from './Employee.js';
//variable declaration
const _subject = Symbol('subject');
//creating classes
class Teacher extends Employee{
  constructor(id,name,subject){
   super(id,name);
   this[_subject] = subject;
  }
  //creating getter setter
  get subject(){
    return this[_subject];
  }
  set subject(value){
    this[_subject] = value;
  }
  //creating toString to show output as String
  toString(){
    return `${super.toString()}, 
    Subject : ${this[_subject]}`;
  }
  
}



console.log("Teacher Loaded Successfully......");
//exporting file
export default Teacher;