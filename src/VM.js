import Stack from './lib/Stack.js';
import { Operands } from './operands/Factory.js';

export default class VM
{
  _stack = new Stack();

  push(value) {
    this._stack.push(value);
  }

  pop() {
    if (this._stack.isEmpty())
      throw new Error('Stack is empty, cannot pop');
    this._stack.pop();
  }

  dump() {
    const elements = this._stack.toArray().reverse();
    for (const element of elements) {
      console.log(element.toString());
    }
  }

  clear() {
    this._stack.clear();
  }

  dup() {
    if (this._stack.isEmpty())
      throw new Error('Stack is empty, cannot dup');
    const value = this._stack.peek();
    this.push(value);
  }

  swap() {
    if (this._stack.size() < 2)
      throw new Error('Stack size is not big enough, cannot swap');
      const first = this._stack.pop();
      const second = this._stack.pop();
      this._stack.push(first);
      this._stack.push(second);
    }

  assert(register) {
    const topRegister = this._stack.peek();
    const topRegisterInfo = Operands.find(op => op.type === topRegister.type);
    const registerInfo = Operands.find(op => op.type === register.type);
    if (topRegister.value !== register.value
    || topRegister.type !== register.type)
      throw new Error(`Top register : ${topRegisterInfo.name}(${topRegister.value}) is not equal to ${registerInfo.name}(${register.value})`);
  }

  add() {
    throw new Error('add is not implemented yet');
  }

  sub() {
    throw new Error('sub is not implemented yet');
  }

  mul() {
    throw new Error('mul is not implemented yet');
  }

  div() {
    throw new Error('div is not implemented yet');
  }

  mod() {
    throw new Error('mod is not implemented yet');
  }

  load(register) {
    const stack = this._stack.toArray();
    const value = stack[register.value];
    if (!value)
      throw new Error(`Register ${register.value} does not exist`);
    this._stack.push(value);
  }

  store(register) {
    if (this._stack.size() < 1)
      throw new Error('Stack size is not big enough');
    const stack = this._stack.toArray();
    const value = stack.pop();
    if (!stack[register.value - 1])
      throw new Error(`Register ${register.value} does not exist`);
    stack[register.value - 1] = value;
    this._stack = Stack.fromArray(stack);
  }

  print() {
    if (this._stack.size() < 1)
      throw new Error('Stack size is not big enough');
    console.log(String.fromCharCode(this._stack.peek().value));
  }

  exit() {
    process.exit(0);
  }
}
