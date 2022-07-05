import fs from 'fs';
import Instruction from './Instruction.js';

export default class CommandLineInterpreter
{
  _inputs = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n');
  _instructions = [];

  run() {
    for (const input of this._inputs) {
      if (input.trim() === '')
        continue;
      this._instructions.push(new Instruction(input));
    }
  }
}
