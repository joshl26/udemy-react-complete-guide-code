// Primitives: number, string, boolean
// More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
  isEmployee: boolean;
};

let person: Person[];

let people: Person[];

//Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

//Functions and types

function add(a: number, b: number) {
  return a + b;
}
