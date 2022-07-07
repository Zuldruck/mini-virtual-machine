import { OperandType } from '../enums/index.js';
import { Operands } from './Factory.js';

export class IOperand
{
  constructor() {
    if (this.constructor === IOperand
    || this.constructor === AOperand) {
      throw new TypeError(`Cannot instantiate ${this.constructor.name}`);
    }
  }

  get type() {}
  get value() {}
  toString() {}
  add() {}
  sub() {}
  mul() {}
  div() {}
  mod() {}
}

function createOperandFromParents(operandTypeA, operandTypeB, value)
{
  const maxOperandType = Math.max(operandTypeA, operandTypeB);
  const newOperandInfo = Operands.find(op => op.type === maxOperandType);
  return new newOperandInfo.class(maxOperandType, value.toString());
}

export class AOperand extends IOperand
{
  constructor(type, value, precision) {
    super(type, value);
    if (!Object.values(OperandType).includes(type)) {
      throw new Error(`Operand Type ${type} doesn\'t exist`);
    }

    this._type = type;
    this._value = value;
    this._precision = precision;
  }

  get type() {
    return this._type;
  }

  set type(_type) {
    this._type = _type; 
  }

  get value() {
    return this._value;
  }

  set value(_value) {
    this._value = _value;
  }

  get precision() {
    return this._precision;
  }

  set precision(_precision) {
    this._precision = _precision;
  }

  toString() {
    return this._value % 1 === 0 ? this._value : parseFloat(this._value.toFixed(this._precision));
  }

  add(operand) {
    const value = this._value + operand.value;
    return createOperandFromParents(operand.type, this._type, value);
  }

  sub(operand) {
    const value = this._value - operand.value;
    return createOperandFromParents(operand.type, this._type, value);
  }

  mul(operand) {
    const value = this._value * operand.value;
    return createOperandFromParents(operand.type, this._type, value);
  }

  div(operand) {
    if (operand.value === 0)
      throw new Error('Cannot divide by 0');
    const value = this._value / operand.value;
    return createOperandFromParents(operand.type, this._type, value);
  }

  mod(operand) {
    if (operand.value === 0)
      throw new Error('Cannot divide by 0');
    const value = this._value % operand.value;
    return createOperandFromParents(operand.type, this._type, value);
  }
}
