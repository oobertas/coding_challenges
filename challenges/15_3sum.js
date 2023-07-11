/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let triplet = [];
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; i < nums.length - 1; i++) {
      for (let k = 2; i < nums.length - 2; i++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          triplet.push(nums[i], nums[j], nums[k]);
          arr.push(triplet);
        }
      }
    }
  }
  return arr;
};

let nums1 = [-1, 0, 1, 2, -1, -4];
let nums2 = [0, 1, 1];
let nums3 = [0, 0, 0];

console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));
