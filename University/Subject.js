//variable declaration
const _id = Symbol('id');
const _name = Symbol('name');
const _credit = Symbol('credit');


//creating classes
class Subject{
  constructor(id,name,credit){
    this[_id] = id;
    this[_name] = name;
    this[_credit] = credit || 0;
  }
  //creating getter setter
  get id(){
    return this[_id];
  }
  get name(){
    return this[_name];
  }
  set name(value){
    this[_name] = value;
  }
  get credit(){
    return this[_credit];
  }
  set credit(value){
    this[_credit] = value;
  }
  //creating toString to show output as String
  toString(){
    return `
    Id = ${this[_id]},
    Name = ${this[_name]},
    Credit = ${this[_credit]}.
    `
  }
}


console.log("Subject Loaded Successfully......");
//exporting file
export default Subject;