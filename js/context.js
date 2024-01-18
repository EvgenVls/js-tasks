function foo() {
  console.log(this);
}

foo(); // window









// function showThis() {
//     console.log("this in showThis:", this);
// }

// const user = {
//     username: "Poly",
// }

// user.showContext = showThis;

// showThis();

// user.showContext();



// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const person = {
//   name: "Alice"
// };

// const greet = sayHello.bind(person);

// greet("Hello");


// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// const user = {
//   username: 'Mango',
// }

// user.showContext = showThis;

// showThis();
// user.showContext();


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();