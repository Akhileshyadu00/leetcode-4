/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0);
    for(let i=0; i<heights.length; i++) {
        while(stack.length>0 && heights[i]<heights[stack[stack.length-1]]) {
            let height = heights[stack.pop()];
            let width = stack.length > 0 ? i - stack[stack.length - 1] -1 : i

            maxArea = Math.max(maxArea, height*width);
        }
        stack.push(i);
    }
    return maxArea;
};


/*


Time Complexity:-
O(n), where n is the length of the heights array.
Each element is pushed onto the stack exactly once and popped from the stack exactly once. Therefore, each element is processed at most twice (once when it's pushed and once when it's popped).

Space Complexity:-
O(n), where n is the length of the heights array.
In the worst case, when the heights are in increasing order, the stack will store all n indices.
Thus, the space complexity is O(n) due to the stack.


*/