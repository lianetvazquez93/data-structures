// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution #1
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let step = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     console.log(step);
//   }
// }

//Solution #2
function steps(n, row = 0, step = "") {
  if (n === row) {
    return;
  }

  if (n === step.length) {
    console.log(step);
    return steps(n, row + 1);
  }

  if (step.length <= row) {
    step += "#";
  } else {
    step += " ";
  }

  steps(n, row, step);
}

module.exports = steps;
