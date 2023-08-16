"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// to make a ts file as module we need to import or export - if u have nothing to export, then export the empty object
var message = 'Hello World';
console.log(message);
// **********--********  Variable Declaration  *********--********
var x = 10;
var y = 20;
// let title; // allowed
// const title; // const declarations must be initialized
var title = 'codevolution';
// **********--********  Variable Types  *********--*********
// Types help in static typing and intelisense
// 1. static type - returns type error while writing the code
// 2. intellisene - suggests methods related to the data type
var isBeginner = true;
var total = 0;
var name = 'Wasim';
// let's u write multiple line with string literal
var sentence = "My name is ".concat(name, "\nI am a biginner in Typescript");
console.log(sentence);
// ***** Null & Undefined **** 
// - not so much of use - also called as subtypes of all other types *****
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
// *** Array ******
var list1 = [1, 2, 3];
var list2 = [3, 4, 5];
// **** tuple *****
// -> fixed no.of values with different type
var person1 = ['Wasim', 12];
// ****** Type - enum ********
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
; // By Default indexing starts with 0
var g = Color.Green;
console.log(g); // o/p - 4
// ******** Type -  any ******* 
// -> works like var in js - no static typing
// encompasses values of every possible type
var randomVariable = 10;
randomVariable = true;
randomVariable = 'Wasim';
// drawback of type any -> it doesn't check whether randomVariable is string or object or anything
// doesnt't provide intellisense
// -> it will throw error at runftimer
console.log(randomVariable.name); // o/p - undefined
// randomVariable(); // while running - TypeError: randomVariable is not a function
randomVariable.toUpperCase();
// ******** Type  - unknown  ************
// -> to fix the drawback of type any
var randomVariable2 = 11;
randomVariable2 = true;
randomVariable2 = 'Wasim2';
// console.log(randomVariable2.name); // throws error
// randomVariable2(); // throws error
// randomVariable2.toUpperCase(); // throws error
// we can assert type to convince the compiler that we know better
// check if randomVariable2 is of type object and has name as one of its property
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(randomVariable2)) {
    console.log(randomVariable2.name);
}
randomVariable2.toUpperCase(); // type assert that randomVariable2 is of type string
// **** Type Inference *****
var a; // doesn't provide intellisense
a = 10;
a = true; // doesn't throw error as a is not initialised
var b = 20; // provides intellisense
// b = true; // throws error as b is initialised - tsc inferences as its type as number
// ***** Type Union *****
var multiType; // provides intellisense -> that is why better tha type any
multiType = 10;
multiType = true;
// ************ Functions in Typescript ************** //
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 6)); // o/p = 11
// optional parameter -> ( syntax paramater? )
function add1(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add1(5, 6)); //  o/p = 11
console.log(add1(5)); // o/p = 5
// default parameter
// default parameter is optional parameter with a set value
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add2(5, 6)); // o/p = 11
console.log(add2(5)); // o/p  = 15
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// ************ Classes In Typescript ************
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Wasim');
console.log(emp1.employeeName);
emp1.greet();
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var mng1 = new Manager('Bruce');
mng1.greet();
mng1.delegateWork();
console.log(mng1.employeeName);
// Access Modifiers in Typescript
// -> keywords which set the accessiblity of property and methods in the code
// *** public - free accesible anywhere in the file
// *** Private - Only Accesible within the class where the variable is defined
// *** Protected - Accessible only within the class and the classes derived from it
var Student = /** @class */ (function () {
    function Student(name, age, isPass) {
        this.studentName = name;
        this.age = age;
        this.isPass = isPass;
    }
    Student.prototype.greet = function () {
        console.log("Good Morning ".concat(this.studentName, " of age ").concat(this.age, ", Pass Status: ").concat(this.isPass));
    };
    return Student;
}());
var stdnt1 = new Student('Wasim', 24, true);
console.log(stdnt1.studentName);
// console.log(stdnt1.age); // Property 'age' is protected and only accessible within class 'Student' and its subclasses
// console.log(stdnt1.isPass); // Property 'isPass' is private and only accessible within class 'Student'
stdnt1.greet();
// Inheritance
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(teacherName, age, isPass) {
        return _super.call(this, teacherName, age, isPass) || this;
    }
    Teacher.prototype.teachStudents = function () {
        // // Property 'isPass' is private and only accessible within class 'Student'.
        // console.log(`Teacher teaching students ${this.studentName} ${this.age} ${this.isPass} `)
        console.log("Teacher teaching students ".concat(this.studentName, " ").concat(this.age, " "));
    };
    return Teacher;
}(Student));
var tch1 = new Teacher('Bruce', 37, true);
console.log(tch1.studentName);
// console.log(tch1.age); // Property 'age' is protected and only accessible within class 'Student' and its subclasses
// console.log(tch1.isPass); // Property 'isPass' is private and only accessible within class 'Student'
tch1.greet();
tch1.teachStudents();
