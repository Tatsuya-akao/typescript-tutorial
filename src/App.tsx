import React from 'react';
import './App.css';

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name:string) => never;


// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: 'Tatsuya',
// }

// let lotsOfPeople: Person[];

let personName: unknown;


function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
