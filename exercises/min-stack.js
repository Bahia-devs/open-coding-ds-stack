/**
 * https://leetcode.com/problems/min-stack/description/
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * Implement the MinStack class:
 * 
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 */


var MinStack = function() {
    this.stack = []
    this.minHistory = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    const minTopIndex = this.minHistory.length - 1
    if(this.minHistory.length === 0){
      this.minHistory.push(val)
    } else if (val < this.minHistory[minTopIndex]){
      this.minHistory.push(val)
    } else {
      this.minHistory.push(this.minHistory[minTopIndex])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minHistory.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minHistory[this.minHistory.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const stack = new MinStack()
stack.push(1)
stack.push(2)
stack.push(-1)
console.log(stack.top())
console.log(stack.pop())
console.log(stack.getMin())