function hasTargetSum(array, target) {
  // Write your algorithm here
  // 1.iterate through the outer array for(let i =0;i<array.length-1;i++)
  for (let i = 0; i < array.length - 1; i++) {
    // 2.create a variable called `complemant` const complement=target-array[i]
    const complement = target - array[i]
    //3.iterate through the inner array for(let j =i+1;i<array.length;i++)
    for (let j = i + 1; j < array.length; j++) {
      // 4.if array[j]===complement return true 
      if (array[j] === complement) return true
    }
  }
  //5. else return false
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
create a function called  `hasTargetSum(array, target)
1.iterate through the outer array for(let i =0;i<array.length-1;i++)
2.create a variable called `complemant` const complement=target-arry[i]
3.iterate through the inner array for(let j =i+1;i<array.length;i++)  
4.if array[j]===complement return true 
5.else return false
*/

/*
  Add written explanation of your solution here
 create a function called  `hasTargetSum(array, target)`that takes two arrguments `array` & `target`
  if two numbers in the array equal the target return true 
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
