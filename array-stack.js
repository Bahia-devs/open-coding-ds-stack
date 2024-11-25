class Stack{
  constructor(){
    this.items = []
    this.size = 0
  }

  push(item){
    this.items[this.size++] = item
    return item
  }

  pop(){
    if(this.isEmpty()) return null
    const removed = this.items[this.size - 1]
    delete this.items[this.size - 1]
    this.size--
    return removed
  }

  top(){
    if(this.isEmpty()) return null
    return this.items[this.size - 1]
  }

  isEmpty(){
    this.size ? false : true
  }

  getStack(){
    let stack = []
    for(let i=0;i<this.size;i++){
      stack[i] = (this.items[i])
    }
    return stack;
  }
}

const stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log("---")
console.log(stack.getStack())
console.log("---")
console.log(stack.pop())
console.log(stack.getStack())
console.log(stack.top())