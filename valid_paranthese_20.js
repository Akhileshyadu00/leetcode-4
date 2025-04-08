/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    const map = {
        '(':')',
        '{':'}',
        '[':']'
    }

    for(let i = 0; i<s.length; i++) {
        const char = s[i];

        if(map[char]) {
            stack.push(map[char]);
        }else {
            if(stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

/*

Time Complexity:
O(n), where n is the length of the string. We loop through each character in the string once, and each push and pop operation on the stack takes constant time.

Space Complexity:
O(n), in the worst case, the stack could contain all the opening parentheses if all characters are opening ones. Thus, we need extra space proportional to the size of the input string.

*/