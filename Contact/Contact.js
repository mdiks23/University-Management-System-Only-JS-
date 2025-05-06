//variable declaration
const _id = Symbol('id');
const _email = Symbol('email');
const _phone = Symbol('phone');
const _altPhone = Symbol('altPhone');
const _address = Symbol('address');

//creating classes
class  Contact{
  constructor(id,email,phone,altPhone,address){
    
   this[_id] = id;
   this[_email] = email || '';
   this[_phone] = phone || '';
   this[_altPhone] = altPhone || '';
   this[_address] = address || '';
   
  }
  //creating getter setter
  get id(){
    return this[_id];
  }
  get email(){
    return this[_email];
  }
  set email(value){
    this[_email] = value;
  }
  get phone(){
    return this[_phone];
  }
  set phone(value){
    this[_phone] = value;
  }
  get altPhone(){
    return this[_altPhone];
  }
  set altPhone(value){
    this[_altPhone] = value;
  }
  get address(){
    return this[_address];
  }
  set address(value){
    this[_address] = value;
  }
  //creating toString to show output as String
  toString(){
   return `
    Id = ${this[_id]},
    Email = ${this[_email]},
    Phone = ${this[_phone]},
    Alternative Phone = ${this[_altPhone]},
    Address is below - ${this[_address]}
    `
  }
  
}

console.log("Contact Loaded Successfully......");
//exporting file
export default Contact;