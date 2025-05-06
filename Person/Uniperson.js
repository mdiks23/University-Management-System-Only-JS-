//importing inherited files first
import Person from './Person.js';
//variable declaration
const _department = Symbol('department');
const _account = Symbol('account');
//creating classes
class Uniperson extends Person{
  constructor(id,name){
    super(id,name);
  this[_department] = null;
  this[_account] = null;
  }
  //creating getter setter
  get department(){
    return this[_department];
  }
  set department(value){
    this[_department] = value;
  }
  get account(){
    return this[_account];
  }
  set account(value){
    this[_account] = value;
  }
  //creating toString to show output as String
  toString(){
    return `${super.toString()},
    Account : ${this[_account]},
    Department : ${this[_department]} `;
  }
}



console.log("UniPerson Loaded Successfully......");
//exporting file
export default Uniperson;

