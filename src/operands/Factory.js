import { OperandType } from '../enums/OperandType.js';
import Int8 from './Int8.js';
import Int16 from './Int16.js';
import Int32 from './Int32.js';
import Float from './Float.js';
import Double from './Double.js';
import BigDecimal from './BigDecimal.js';

export const Operands = [
  { name: 'int8', class: Int8, type: OperandType.INT8 },
  { name: 'int16', class: Int16, type: OperandType.INT16 },
  { name: 'int32', class: Int32, type: OperandType.INT32 },
  { name: 'float', class: Float, type: OperandType.FLOAT },
  { name: 'double', class: Double, type: OperandType.DOUBLE },
  { name: 'bigdecimal', class: BigDecimal, type: OperandType.BIGDECIMAL },
];

export function createOperand(operandInput)
{
  const matches = operandInput.match(/(int8|int16|int32|float|double|bigdecimal)\((-?[0-9]+(?:\.[0-9]+)?)\)/);
  if (!matches)
    throw new Error(`${operandInput} is not a valid Operand`);
  const name = matches[1];
  const value = matches[2];
  const operand = Operands.find(operand => operand.name === name);
  return new operand.class(operand.type, value);
}
