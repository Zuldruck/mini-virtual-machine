import { OperandType } from '../enums/index.js';

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
    return this._value + operand.value;
  }

  sub(operand) {
    return this._value - operand.value;
  }

  mul(operand) {
    return this._value * operand.value;
  }

  div(operand) {
    return this._value / operand.value;
  }

  mod(operand) {
    return this._value % operand.value;
  }
}
