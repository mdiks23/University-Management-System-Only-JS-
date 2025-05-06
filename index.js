/*
In every object I add an console to see the full structure and at last I showed a demo string output of an object.
*/
//importing Modules files

import personModule from './Person/index.js';  
import contactModule from './Contact/index.js'; 
import uniModule from './University/index.js';



//Initial test console
console.log("Main Index Loaded Successfully......")



//guardian

const guardian1 = new personModule.Guardian(2301, "Mr. Wasim Billah ","Engineer ",750000);
guardian1.blood ="B(+)ve";
guardian1.contact = new contactModule.Contact(2306,"wbillah13@gmail.com","016**-****76","019**-****87","Tejgao,Dhaka");
guardian1.contact.address = new contactModule.Address(2301,"26/A Panthapath","Dhaka","Bangladesh","Dhaka Division ",1204 );

console.log(guardian1);



//Subjects

const subject1 = new uniModule.Subject("S01","Calculus",6);
const subject2 = new uniModule.Subject("S02","Linear Algebra ",5);
const subject3 = new uniModule.Subject("S03","Data Structure & Algorithm",15);
const subject4 = new uniModule.Subject("S04","NLP",12);
console.log(subject1);
console.log(subject2);
console.log(subject3);
console.log(subject4);

//Exams  
const exam1 = new uniModule.Exam(1101,"Mid-term","Calculus",33);
console.log(exam1);

//Teachers 

const teacher1 = new personModule.Teacher("T01","Dr Wahed Mia",subject1.name);
teacher1.employeeId = "E0301";
teacher1.salary = 100000;
teacher1.blood = "B(+)ve";
teacher1.account = "Sonali Bank PLC - 383******38998";

const teacher2 = new personModule.Teacher("T02","Dr Tarannum Jahan",subject2.name);
teacher2.employeeId = "E0302";
teacher2.salary = 80000;
teacher2.blood = "B(+)ve";
teacher2.account = "Sonali Bank PLC - 936******38930";

const teacher3 = new personModule.Teacher("T03","Prof. Tanjuma Shila",subject3.name);
teacher3.employeeId = "E0303";
teacher3.salary = 65000;
teacher3.blood = "AB(+)ve";
teacher3.account = "Sonali Bank PLC - 383******84648";

const teacher4 = new personModule.Teacher("T04","Prof. Abdullah Al Momin",subject4.name);
teacher4.employeeId = "E0304";
teacher4.salary = 65000;
teacher4.blood = "O(+)ve";
teacher4.account = "Sonali Bank PLC - 203******39490";



// Department

const department101 = new uniModule.Department("Uni10024","Computer Science and Engineering (CSE)",[subject1.name,subject2.name,subject3.name,subject4.name], teacher1.name, [teacher1.name,teacher2.name,teacher3.name,teacher4.name]);

console.log(department101);

//teachers department allocation
teacher1.department = department101.name;
teacher2.department = department101.name;
teacher3.department = department101.name;
teacher4.department = department101.name;



//teacher console 

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);

//staffs 
//we can also assign here more infos like account,Department,salary,employeeId and so on......
const staff1 = new personModule.Staff(401,"Ashik Mehtab","Accountant");
const staff2 = new personModule.Staff(402,"Shafiqul Haider","Computer Operator");
console.log(staff1);
console.log(staff2);

//Student

const student3001 = new personModule.Student(3001,"Farhan Sadik","ST001",guardian1);
student3001.blood = "AB(+)ve";
student3001.contact = new contactModule.Contact(3001,"sadik2576@gmail.com","019**-****86","013**-****55","Tejgao,Dhaka");
student3001.contact.address = guardian1.contact.address;
student3001.department = department101
student3001.exams = ["Level 1 - Semester 1","Level 1 - Semester 2"];
student3001.fee = 180000;
student3001.account = "Sonali Bank PLC = 304*****44633";

 console.log(student3001);
 
 
 
 //String Outputs
//Student 
console.log("Here will show the student informations : \n")
 console.log(student3001.toString());
 console.log(student3001.contact.toString());

//teacher 
console.log("\n \n Here will show the teachers informations : \n")
console.log(teacher1.toString());
console.log(teacher2.toString());
console.log(teacher3.toString());
console.log(teacher4.toString());

//Subjects
console.log("\n \n Here will show the subjects informations : \n")
console.log(subject1.toString());
console.log(subject2.toString());
console.log(subject3.toString());
console.log(subject4.toString());

//Exams 
console.log("\n \n Here will show the Exams informations : \n")
console.log(exam1.toString());

//Department 
console.log("\n \n Here will show the Departments informations : \n")
 console.log(department101.toString());
 
 //staffs
 console.log("\n \n Here will show the student informations : \n");
console.log(staff1.toString());
console.log(staff2.toString());
 
 //Guardian  
 console.log("\n \nHere will show the guardian informations : \n")
 console.log(guardian1.toString())
 
 
 
 
 
 //Thanks❤...