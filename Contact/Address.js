//variable declaration
const _id = Symbol('id');
const _road = Symbol('road') ;
const _city = Symbol('city') ;
const _country = Symbol('country');
const _region = Symbol('region');
const _postCode = Symbol('postCode');
//creating classes
class Address {
  constructor(id,road,city,country,region,postCode){
    this[_id] = id;
    this[_road] = road || '';
    this[_city] = city || '';
    this[_country] = country || '';
    this[_region] = region || '';
    this[_postCode] = postCode || '';
    
  }
  //creating getter setter
  get id(){
    return this[_id];
  }
  get road(){
    return this[_road];
  }
  set road(value){
    this[_road] = value;
  }
  get city(){
    return this[_city];
  }
  set city(value){
    this[_city] = value;
  }
  get country(){
    return this[_country];
  }
  set country(value){
    this[_country] = value;
  }
  get region(){
    return this[_region];
  }
  set region(value){
    this[_region] = value;
  }
  get postCode(){
    return this[_postCode];
  }
  set postCode(value){
    this[_postCode] = value;
  }
  
  
  //creating toString to show output as String
  toString(){
   return `
       Id : ${this[_id]},
       Road : ${this[_road]}, 
       City : ${this[_city]}, 
       Country : ${this[_country]},
       Region : ${this[_region]},
       Postal Code : ${this[_postCode]}`;
  }
  
}


console.log("Address Loaded Successfully......");
//exporting file
export default Address;