function reverse(str) {
  let newStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
    console.log(str[i]);
  }
  return newStr;
}

console.log(reverse("biruk"));
