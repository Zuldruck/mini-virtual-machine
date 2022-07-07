# mini-virtual-machine

The goal of this project is to create a simple virtual machine that is able to interpret programs that are written in a simplified assembler language.

To be precise, it consists in a stack machine that is able to calculate simple arithmetical expressions.

These very arithmetical expressions are given to the machine in the form of simple assembler programs.

## Instructions

- **comments**

They begin with a semicolon (;) and end at the end of a line. A comment may be indifferent at the beginning of a line or after an instruction.

- **push v**

Stack the v value at the top. The v value will naturally take one of the following forms: int8(n), int16(n), int32(n), float(z),  double(z) or bigdecimal(z).
(For example : int16(n) - create an signed 16-bit integer with the value n)

- **pop**

Unstacks the value at the top of the stack.

- **clear**

Clears the stack. Rendering it empty.

- **dup**

Duplicates the value on the top of the stack, and stacks the copy of the value.

- **swap**

Reverses the order of (swaps) the top two values on the stack.

- **dump**

Display each value on the stack from the newest to the oldest, without modifying the stack.
Each value is separated from the next with a line break.

- **assert v**

Verify that the value at the top of the stack is equal to the one passed as parameter in this instruction.
If it’s not the case, the program execution stops and send an error.
The v value, of course, has the same form as those passed as parameter during the push instruction.

- **add**

Unstack the first two values in the stack, add them, and then stack the result.

- **sub**

Unstack the first two values in the stack, substract them, and then stack the result.

- **mul**

Unstack the first two values in the stack, multiply them, and then stack the result.

- **div**

Unstack the first two values in the stack, divide them, and then stack the result. 

- **mod**

Unstack the first two values in the stack, calculate their modulo, and then stack the result.

- **load v**

Copy the value from the register v and stack it at the top.

- **store v**

Unstack the first value and store it to the register v.

- **print**

Interpret it like an ASCII value and display the corresponding character on the standard output.

- **exit**

Quit the program execution that is underway.


## Standard Input Example

```
; ---------------
; - example . avm -
; ---------------
push int32(33)
push int32(42)
add
push float(44.55)
mul
push double(42.42)
push int32(42)
dump
pop
assert double(42.42)
exit
```