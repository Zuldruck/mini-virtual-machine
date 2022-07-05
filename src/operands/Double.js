import { OperandType } from '../enums/OperandType.js';
import { AOperand } from './Operand.js';

export default class Double extends AOperand
{
  constructor(type, value) {
    if (type !== OperandType.DOUBLE)
      throw new Error('Wrong operand type');
    if (!value.match(/^-?[0-9]+(?:\.[0-9]+)?$/))
      throw new Error('Wrong operand value');
    const valueAsNumber = parseFloat(value);
    if (valueAsNumber < -2147483648 || valueAsNumber > 2147483647)
      throw new Error(`Value ${value} is out of bounds.`);
    super(type, valueAsNumber, 15);
  }
}
