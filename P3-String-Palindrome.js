function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

const str = "madam";
console.log(isPalindrome(str));
