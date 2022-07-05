import { OperandType } from '../enums/OperandType.js';
import { AOperand } from './Operand.js';

export default class Int16 extends AOperand
{
  constructor(type, value) {
    if (type !== OperandType.INT16)
      throw new Error('Wrong operand type');
    if (!value.match(/^-?[0-9]+$/))
      throw new Error('Wrong operand value');
    const valueAsNumber = parseInt(value);
    if (valueAsNumber < -32768 || valueAsNumber > 32767)
      throw new Error(`Value ${value} is out of bounds.`);
    super(type, valueAsNumber);
  }
}
