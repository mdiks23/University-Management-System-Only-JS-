//importing inherited files first
import Uniperson from './Uniperson.js';
//variable declaration
const _studentId = Symbol('studentId');
const _exams = Symbol('exams');
const _fee = Symbol('fee');
const _guardian = Symbol('guardian');
//creating classes
class Student extends Uniperson {
constructor(id,name,studentId,guardian){
    super(id,name);
    this[_studentId] = studentId;
    this[_guardian] = guardian;
    this[_exams] = [];
    this[_fee] = null;
  }
  //creating getter setter
  get studentId(){
    return this[_studentId];
  }
  get guardian(){
    return this[_guardian];
  }
  get exams(){
    return this[_exams];
  }
  set exams(value){
    this[_exams] = value;
  }
  addExam(exam){
    this[_exams].push(exam);
  }
  get fee(){
    return this[_fee];
  }
  set fee(value){
    this[_fee] = value;
  }
//creating toString to show output as String
  toString(){
    
    return `${super.toString()},
    Student Id : ${this[_studentId]},
    Attempted Exams : ${this[_exams]},
    Paid Fees : ${this[_fee]},
    Guardian : ${this[_guardian]}
    `;
  }
  
}


console.log("Student Loaded Successfully......");
//exporting file
export default Student;