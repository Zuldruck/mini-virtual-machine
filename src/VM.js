import Stack from './lib/Stack.js';

export default class VM
{
  _stack = new Stack();

  push(value) {
    this._stack.push(value);
  }

  pop() {
    this._stack.pop();
  }

  dump() {
    const elements = this._stack.toArray().reverse();
    for (const element of elements) {
      console.log(element);
    }
  }

  clear() {
    this._stack.clear();
  }

  dup() {
    throw new Error('dup is not implemented yet');
  }

  swap() {
    throw new Error('swap is not implemented yet');
  }

  assert(value) {
    throw new Error('assert is not implemented yet');
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

  load(value) {
    throw new Error('load is not implemented yet');
  }

  store(value) {
    throw new Error('store is not implemented yet');
  }

  print() {
    throw new Error('print is not implemented yet');
  }

  exit() {
    throw new Error('exit is not implemented yet');
  }
}
