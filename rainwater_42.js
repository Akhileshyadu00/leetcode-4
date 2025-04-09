/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length-1;
    leftMax = 0
    rightMax = 0;
    let waterTrapped = 0;

    while(left<right) {
        if(height[left] < height[right]) {
            if(height[left] >= leftMax) {
                leftMax = height[left];
            }else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        }else {
            if(height[right] >= rightMax) {
                rightMax = height[right];
            }else {
                 waterTrapped += rightMax- height[right]
            }
           right--;
        }

    }
    return waterTrapped;

};

/*

Time Complexity:-

In our solution, we have two pointers (left and right), which move towards each other from both ends of the array. We process each element of the array at most once, performing constant time operations (like comparisons, assignments, and arithmetic operations) for each element.
Initially, left starts at 0 and right starts at n-1 (the last index).
In each iteration of the while loop, either left moves to the right (left++) or right moves to the left (right--), but they never move past each other.
This means the total number of iterations in the loop is at most n (since each pointer moves at most n times in total).
Therefore, the time complexity is O(n), where n is the length of the input array height.

Space Complexity:-

In the solution, we only use a constant amount of extra space:
We use a few integer variables (left, right, leftMax, rightMax, waterTrapped), all of which take up constant space.
No additional data structures (like arrays, lists, or hashmaps) are used that grow with the size of the input.
Since the space used does not scale with the size of the input array and is always constant, the space complexity is O(1).


*/