/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    const stack = [];
    const nextGreater = new Map();

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];

        // Remove elements from the stack that are smaller than or equal to the current number
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            nextGreater.set(num, stack[stack.length - 1]);
        } else {
            nextGreater.set(num, -1);
        }

        // Push the current number onto the stack
        stack.push(num);
    }

    // Build the result for nums1 using the nextGreater map
    const result = [];
    for (let num of nums1) {
        result.push(nextGreater.get(num));
    }

    return result;
}


/*
Time Complexity:
O(n + m), where n is the length of nums1 and m is the length of nums2.
We traverse nums2 once to fill the nextGreater map.
We then traverse nums1 to build the result array by accessing the nextGreater map.
Each operation (push, pop, map access) takes constant time, so the total time complexity is proportional to the sum of the lengths of nums1 and nums2.

Space Complexity:
O(m + n), where m is the length of nums2 and n is the length of nums1.
We use a stack to store elements from nums2 and a map to store the next greater elements for each element in nums2.
Additionally, we store the result array for nums1, which contributes space complexity of O(n).
*/