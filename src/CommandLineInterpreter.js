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

  run() {
    for (const input of this._inputs) {
      if (input.trim() === '')
        continue;
      const instruction = new Instruction(input);
      this._vm[instruction.name](instruction.value);
    }
  }
}
