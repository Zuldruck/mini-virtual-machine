import Stack from './lib/Stack.js';
import Int8 from './operands/Int8.js';
import { OperandType } from './enums/OperandType.js';
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
    const operandA = this._stack.pop();
    const operandB = this._stack.pop();
    const newOperand = operandA.add(operandB);
    this._stack.push(newOperand);
  }

  sub() {
    const operandA = this._stack.pop();
    const operandB = this._stack.pop();
    const newOperand = operandA.sub(operandB);
    this._stack.push(newOperand);
  }

  mul() {
    const operandA = this._stack.pop();
    const operandB = this._stack.pop();
    const newOperand = operandA.mul(operandB);
    this._stack.push(newOperand);
  }

  div() {
    const operandA = this._stack.pop();
    const operandB = this._stack.pop();
    const newOperand = operandA.div(operandB);
    this._stack.push(newOperand);
  }

  mod() {
    const operandA = this._stack.pop();
    const operandB = this._stack.pop();
    const newOperand = operandA.mod(operandB);
    this._stack.push(newOperand);
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
    const value = this._stack.peek().value;
    this.assert(new Int8(OperandType.INT8, value.toString()));
    console.log(String.fromCharCode(value));
  }

  exit() {
    process.exit(0);
  }
}
