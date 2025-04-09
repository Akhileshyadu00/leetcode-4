/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];

    for(let char of s) {
        if(stack.length > 0 && stack[stack.length -1 ]=== char) {
            stack.pop()
        }else {
            stack.push(char);
        }
    }
    return stack.join("");
};

/*

Time Complexity:-

O(n), where n is the length of the string s.
We iterate through each character in the string exactly once.
For each character, we perform constant-time operations: either a push or a pop on the stack.

Space Complexity:-

O(n), where n is the length of the string s.
In the worst case, the stack could end up storing all n characters (if there are no adjacent duplicates).
The space used is proportional to the number of characters in the string that are not removed.


*/