//importing inherited files first
import Person from './Person.js';
 
 //variable declaration 
const _profession = Symbol('profession');
const _income = Symbol('income');

//creating classes
class Guardian extends Person{
  constructor(id,name,profession,income){
    super(id,name);
    this[_profession] = profession;
    this[_income] = income;
  }
//creating getter setter
  get profession(){
    return this[_profession];
  }
  set profession(value){
    this[_profession] = value;
  }
  get income(){
    return this[_income];
  }
  set income(value){
    this[_income] = value;
  }
//creating toString to show output as String
  toString(){
    return `
    ${super.toString()},
    Profession : ${this[_profession]},
    Income : ${this[_income]}`
  }
}


console.log("Guardian Loaded Successfully......")
//exporting file
export default Guardian;