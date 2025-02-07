function sumUp(num) {
  let newNum = 0;
  for (i = 1; i <= num; i++) {
    newNum = newNum + i;
  }

  return newNum;
}

console.log(sumUp(100));

// Another approach

function addUp(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUp(3));
