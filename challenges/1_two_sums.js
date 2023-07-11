/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexArr = [];
  let length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        indexArr.push(i, j);
      }
    }
  }
  return indexArr;
};
//case 1
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));

//case2
nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));

//case3
nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));
