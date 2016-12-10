'use strict';

const instructions = require('fs').readFileSync('input').toString();

const coords = (x, y) => ({x, y});

const KEYPAD = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

const L = 'L'; 
const D = 'D';
const U = 'U'; 
const R = 'R';
const INSTRUCTION_DELTA = {
        L: coords(-1, 0),
        D: coords(0, -1),
        U: coords(0, 1),
        R: coords(1, 0)
      };

const keyAt = (coord) => { return KEYPAD[coord.x][coord.y]; }

const move = (pos, instruction) => {
  let delta = INSTRUCTION_DELTA[instruction];

  let new_pos = coords(pos.x + delta.x, pos.y + delta.y);
  
  if (new_pos.x < 0) new_pos.x = 0;
  if (new_pos.x > 2) new_pos.x = 2;
  if (new_pos.y < 0) new_pos.y = 0;
  if (new_pos.y > 2) new_pos.y = 2;

  return new_pos;
} 

let code = "", position = coords(1, 1);

for(let instruction of instructions) {
  if(instruction == "\n") {
    code += keyAt(position);
    console.log('encountered newline, added to code.');
  } else {
    position = move(position, instruction);
    console.log(`pos: ${position} ins: ${instruction} code: ${code}`);
  }
}

console.log(`Code: ${code}`);
