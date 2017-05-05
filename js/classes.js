/**
 * Created by lykovartem on 05.05.2017.
 */

let calcNewPosition = require('./functions').calcNewPosition;

class Circle {
    constructor(x, y, radius, color, id, parent) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.id = id;
        this.parent = parent;
        this.element = document.createElement('div');
    }

    draw() {
        this.element.setAttribute('id', this.id);
        this.element.style.position = 'absolute';
        this.element.style.borderRadius = `${this.radius}px`;
        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.backgroundColor = this.color;
        document.querySelector(this.parent).appendChild(this.element);
    }
}

class InnerCircle extends Circle {
    constructor(x, y, radius, color) {
        super(x, y, radius, color, 'inner', '#outer');
    }

    setMouseover(circleOuter, circleInner) {
        this.element.onmouseover = function (e) {
            let newPos = calcNewPosition(circleOuter, circleInner);
            this.style.top = `${newPos.newY}px`;
            this.style.left = `${newPos.newX}px`
        }
    }
}

class OuterCircle extends Circle {
    constructor(x, y, radius, color) {
        super(x, y, radius, color, 'outer', 'body');
    }
}

module.exports = {
    Circle, InnerCircle, OuterCircle
};
