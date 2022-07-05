import { OperandType } from '../enums/OperandType.js';
import { AOperand } from './Operand.js';

export default class Int8 extends AOperand
{
  constructor(type, value) {
    if (type !== OperandType.INT8)
      throw new Error('Wrong operand type');
    if (!value.match(/^-?[0-9]+$/))
      throw new Error('Wrong operand value');
    const valueAsNumber = parseInt(value);
    if (valueAsNumber < -128 || valueAsNumber > 127)
      throw new Error(`Value ${value} is out of bounds.`);
    super(type, valueAsNumber);
  }
}
