import fs from 'fs';
import Instruction from './Instruction.js';
import VM from './VM.js';

export default class CommandLineInterpreter
{
  _inputs = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n');

  _vm = new VM();

  trimLine(input) {
    return input.replace(/;.+/, '').trim();
  }

  run() {
    for (const input of this._inputs) {
      const trimmedInput = this.trimLine(input);
      if (trimmedInput === '')
        continue;
      const instruction = new Instruction(trimmedInput);
      this._vm[instruction.name](instruction.value);
    }
  }
}
