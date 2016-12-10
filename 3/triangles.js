'use strict';

const triangles = require('fs').readFileSync('input').toString().trim()
                  .split("\n")
                  .map((s) => (
                    s.trim().split(/\D+/).map((st) => (parseInt(st, 10)))
                  ))
                  .map((t) => (
                    t[1] + t[2] > t[0] && 
                    t[2] + t[0] > t[1] && 
                    t[0] + t[1] > t[2]
                  ))
                  .reduce((t, v) => (t + (v ? 1:0)), 0)

console.log(triangles);
