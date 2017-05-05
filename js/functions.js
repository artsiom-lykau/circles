/**
 * Created by lykovartem on 05.05.2017.
 */

function pointInCircle(x, y, cx, cy, radius) {
    return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= radius * radius;
}

function getRandomInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function calcNewPosition(outer, inner) {
    let newX = getRandomInt(0, parseInt(outer.element.style.width));
    let newY = getRandomInt(0, parseInt(outer.element.style.height));

    if (pointInCircle(newX, newY, outer.x + outer.radius, outer.y + outer.radius, outer.radius - inner.radius * 2)) {
        return {newX, newY}
    }
    else {
        return calcNewPosition(outer, inner)
    }
}

module.exports = {
    calcNewPosition
};
