 // operations on all elements of an array
let arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, current) => accumulator + current );
const prod = arr.reduce((accumulator, current) => accumulator * current );





// remove duplicates from array
// using set type
function removeDupesSet(arr) {
  const set = new Set(arr);
  return [...set];
}

// using for loop
function removeDupesFor(arr) {
  let newArr = [];
  
  for (let i=0; i<arr.length; i++) {
    if (arr.indexOf(arr[i], i+1) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

arr = [1, 2, 4, 3, 4, 5, 4, 3];
removeDupesFor(arr);




// flatten multilevel array with a trick
function flattenBuiltin(depthArr) {
  return depthArr.join().replace(/,/g,' ').split(' ');
}

// flatten multilevel array with recursion
function flattenRecursion(depthArr, newArr) {  
  for (let item of depthArr) {
    if (Array.isArray(item)) {
      newArr.concat(flattenRecursion(item, newArr))
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

let depthArr = [1,[ 2, 3, 4, [5, 6]], 7, 8, [ 9, 10 ]];
let newArray = [];
flattenRecursion(depthArr, newArray);




// find if str is palindrome 
function isPalindrome(str) {
  return str.replace(/ /g, '').split('').reverse().join('') === str.replace(/ /g, '') ? true : false
}
isPalindrome('was it a car or a cat i saw');





// find if strA and strB are annagrams
function isAnnagram(strA, strB) {
  // comparing length is somewhat a cheap gate keeper
  if (strA.length === strB.length) {
    if (strA.split('').sort().join('') === strB.split('').sort().join('')) {
      return true;
    }
  } 
  return false;
}

// find if strA and strB are annagrams - lower complexity
function isAnnagramFast(strA, strB) {
  if (strA.length === strB.length) {
    
    function createCounterObj(str) {
      let counter = {};

      for (let item of str) {
        counter.hasOwnProperty(item) ? counter[item] ++ : counter[item] = 1;
      }
      
      return counter;
    }
    
    const counterA = createCounterObj(strA);
    const counterB = createCounterObj(strB);
    
    if (Object.keys(counterA).length === Object.keys(counterB).length) {
      for (let item of strA) {
        if (counterA[item] !== counterB[item]){
          return false
        }
      }
      
      return true;
    }
  }
  
  return false;
}
isAnnagramFast('macos', 'macox');

