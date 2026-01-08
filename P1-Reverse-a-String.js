function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

const str = "hello";
const reversed = reverseString(str);
console.log(reversed);
