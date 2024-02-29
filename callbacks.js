// Timing is Everything

// class Clock {
//     constructor() {
//       // 1. Create a Date object.
//     //   const d = new Date();
//       // 2. Store the hours, minutes, and seconds.
//       this.hours = 0;
//       this.minutes = 0;
//       this.seconds = 0;
//       // 3. Call printTime.
//       this.printTime();
//       // 4. Schedule the tick at 1 second intervals.
//       setInterval(this._tick.bind(this), 1000);
//       // we lose the context when we call _tick() as a callback in setInterval, so we need to bind
//     }
  
//     printTime() {
//       // Format the time in HH:MM:SS
//       // Use console.log to print it.
//       const time = `${this.hours}:${this.minutes}:${this.seconds}`;
//       console.log(time);
//     }
  
//     _tick() {
//       // 1. Increment the time by one second.
//       // 24 hour, reset when hour hits 24
//       // when seconds hit 60, reset to 0
//       // when minutes hit 60, reset to 0
//       // add 1 to minute, and 1 to hour

//         this.seconds++;
//         if (this.seconds === 60){
//             this.seconds = 0;
//             this.minutes++;
//         } 
//         if (this.minutes === 60){
//             this.minutes = 0;
//             this.hours++;
//         } 
//         if (this.hours === 24){
//             this.hours = 0;
//         } 
      
//       // 2. Call printTime.
//         this.printTime();
//     }
//   }
  
//   const clock = new Clock();


// addNumbers

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) { // 60 , 0, cc
//   if (numsLeft > 0) {
//     reader.question("Please enter a number:", answer => {
//       const num = parseInt(answer);
//       sum += num;
//       console.log(`Partial Sum: ${sum}`);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     }); 
//   } else {
//     completionCallback(sum);
//     reader.close();
//   }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// myBind

// Function.prototype.myBind = function (ctx, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(ctx, bindArgs.concat(callArgs));
//   };
// };


// absurdBubbleSort
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.

  reader.question(`Is ${el1} greater than ${el2}? `, answer => {
    if (answer.toLowerCase() === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i < arr.length - 1) { // i = 0
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // 123
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      reader.close();
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});