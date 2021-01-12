// myRemoveWithoutCopy.js
// const myRemoveWithoutCopy = (arr, item) =>
//   arr.forEach((element, index, array) =>
//     element === item ? array.splice(index, 1) : undefined
//   );



// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 1));


function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

module.exports = myRemoveWithoutCopy;