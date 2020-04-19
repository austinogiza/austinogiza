let array = [];

function divide(arr) {
  for (let number = 1; number <= arr; number++) {
    let word = "";
    // if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
    //   word = "yu";
    // }
    if (number % 2 === 0) {
      word = "yu";
    } else if (number % 3 === 0) {
      word = "gi";
    } else if (number % 5 === 0) {
      word = "oh";
    } else if (number % 2 && number % 3 === 0) {
      word = "yu-gi";
    } else {
      word = number;
    }

    array.push(word);
  }

  console.log(array);
}

console.log(divide(10));
