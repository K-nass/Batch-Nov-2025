// Day 5 — Event Loop I (Foundations)

// Concepts: call stack, heap, task vs microtask queues, timers, promise jobs

// Hands-on: predict-the-output puzzles (setTimeout(0), Promise.then)

// Deliverable: event-loop timeline notes

// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 0)
// console.log("three");

//one
//three
//two

// console.log("----------------");
// console.log("one");
// setTimeout(() => {
//     console.log("two");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("three");
// })

//one
//three
//two

// Promise.resolve().then(() => {
//   console.log('A');
//   Promise.resolve().then(() => console.log('B'));
// });

// console.log('C');

// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// setTimeout(() => console.log('C'), 0);
// Promise.resolve().then(() => console.log('D'));

//B
//D
//A
//C


// console.log('A');

// setTimeout(() => {
//   console.log('B');
//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');
//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });

// console.log('F');

//A
//F
//D
//B
//C
//E
