import Instructions from './Instructions.js';

export default class Instruction
{
  _name = null;
  _value = null;

  constructor(input) {
    const tokens = input.split(' ');
    const instruction = Instructions.find(instruction => instruction.name === tokens[0]);
    if (!instruction)
      throw new Error(`Instruction ${tokens[0]} doesn\'t exist`);
    if (tokens.length - 1 !== instruction.argsLength)
      throw new Error(`Instruction ${instruction.name} takes ${instruction.argsLength || 'no'} argument. ${tokens.length - 1} was given.`);
    this._name = tokens[0];
    if (instruction.argsLength > 0)
      this._value = tokens[1];
  }
}
