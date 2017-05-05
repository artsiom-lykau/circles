/**
 * Created by lykovartem on 05.05.2017.
 */

let OuterCircle = require('./classes').OuterCircle;
let InnerCircle = require('./classes').InnerCircle;

let circleOuter = new OuterCircle(0, 0, 250, 'darkmagenta');
let circleInner = new InnerCircle(100, 200, 50, 'red');
circleOuter.draw();
circleInner.draw();
circleInner.setMouseover(circleOuter, circleInner);

console.log(circleOuter);
console.log(circleInner);
