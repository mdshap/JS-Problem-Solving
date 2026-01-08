

function maxInArray(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [5, 1, 9, 3];
const max = maxInArray(arr);
console.log(max);
