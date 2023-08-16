export { } // Typescript considers a file as script only when there is no import and export
// to make a ts file as module we need to import or export - if u have nothing to export, then export the empty object
let message = 'Hello World';
console.log(message);


// **********--********  Variable Declaration  *********--********

let x = 10;
const y = 20;

// let title; // allowed
// const title; // const declarations must be initialized
const title = 'codevolution';


// **********--********  Variable Types  *********--*********
// Types help in static typing and intelisense
    // 1. static type - returns type error while writing the code
    // 2. intellisene - suggests methods related to the data type

    
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Wasim';

// let's u write multiple line with string literal
let sentence = `My name is ${name}
I am a biginner in Typescript`;
console.log(sentence)


// ***** Null & Undefined **** 
// - not so much of use - also called as subtypes of all other types *****
let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;


// *** Array ******
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [3, 4, 5];

// **** tuple *****
// -> fixed no.of values with different type
let person1: [string, number] = ['Wasim', 12]


// ****** Type - enum ********
enum Color { Red=3, Green, Blue }; // By Default indexing starts with 0
let g: Color = Color.Green;
console.log(g) // o/p - 4


// ******** Type -  any ******* 
// -> works like var in js - no static typing
// encompasses values of every possible type
let randomVariable: any = 10;
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
let randomVariable2: unknown = 11;
randomVariable2 = true;
randomVariable2 = 'Wasim2';

// console.log(randomVariable2.name); // throws error
// randomVariable2(); // throws error
// randomVariable2.toUpperCase(); // throws error

// we can assert type to convince the compiler that we know better

// check if randomVariable2 is of type object and has name as one of its property
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(randomVariable2)) {
    console.log(randomVariable2.name);
}

(randomVariable2 as string).toUpperCase(); // type assert that randomVariable2 is of type string


// **** Type Inference *****
let a;  // doesn't provide intellisense
a = 10;
a = true; // doesn't throw error as a is not initialised

let b = 20; // provides intellisense
// b = true; // throws error as b is initialised - tsc inferences as its type as number


// ***** Type Union *****
let multiType: number | boolean; // provides intellisense -> that is why better tha type any
multiType = 10;
multiType = true




// ************ Functions in Typescript ************** //
function add(num1: number, num2: number): number { // with types defined - it provides intellisense to fucntion call
    return num1 + num2;
}
console.log( add(5, 6) ); // o/p = 11

// optional parameter -> ( syntax paramater? )
function add1(num1: number, num2?: number): number { // optional parameter must be after th required parameters
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add1(5, 6)); //  o/p = 11
console.log(add1(5)); // o/p = 5

// default parameter
// default parameter is optional parameter with a set value
function add2(num1: number, num2: number = 10 ): number { // default parameter must be after th required parameters
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log( add2(5, 6)); // o/p = 11
console.log(add2(5)); // o/p  = 15



// ************ Interface In Typescript ************
// objects can be a type with the help of interface
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${ person.firstName } ${ person.lastName }`)
}

const p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}
fullName(p);



// ************ Classes In Typescript ************
class Employee {
    employeeName: string;
    
    constructor(name: string) {
        this.employeeName = name;
    }
    
    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

const emp1 = new Employee('Wasim');
console.log(emp1.employeeName);
emp1.greet();

// Inheritance
class Manager extends Employee {
    constructor( managerName: string ) {
        super(managerName)
    }
    
    delegateWork() {
        console.log('Manager delegating tasks')
    }
}

const mng1 = new Manager('Bruce');
mng1.greet();
mng1.delegateWork()
console.log(mng1.employeeName)


// Access Modifiers in Typescript
 // -> keywords which set the accessiblity of property and methods in the code

// *** public - free accesible anywhere in the file
// *** Private - Only Accesible within the class where the variable is defined
// *** Protected - Accessible only within the class and the classes derived from it

class Student {
    public studentName: string;
    protected age: number;
    private isPass: boolean;
    
    constructor( name: string, age: number, isPass: boolean) {
        this.studentName = name;
        this.age = age
        this.isPass = isPass;
    }
    
    greet() {
        console.log(`Good Morning ${this.studentName} of age ${this.age}, Pass Status: ${this.isPass}`)
    }
}

const stdnt1 = new Student('Wasim', 24, true);
console.log(stdnt1.studentName);
// console.log(stdnt1.age); // Property 'age' is protected and only accessible within class 'Student' and its subclasses
// console.log(stdnt1.isPass); // Property 'isPass' is private and only accessible within class 'Student'
stdnt1.greet();

// Inheritance
class Teacher extends Student {
    constructor( teacherName: string, age: number, isPass: boolean ) {
        super(teacherName, age, isPass);
    }
    
    teachStudents() {
        // // Property 'isPass' is private and only accessible within class 'Student'.
        // console.log(`Teacher teaching students ${this.studentName} ${this.age} ${this.isPass} `)
        
        console.log(`Teacher teaching students ${this.studentName} ${this.age} `)
    }
}

const tch1 = new Teacher('Bruce', 37, true);
console.log(tch1.studentName)
// console.log(tch1.age); // Property 'age' is protected and only accessible within class 'Student' and its subclasses
// console.log(tch1.isPass); // Property 'isPass' is private and only accessible within class 'Student'
tch1.greet();
tch1.teachStudents()
