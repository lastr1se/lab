const distance2D = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

const euclideanDistance = (pointA, pointB) => 
    Math.hypot(...pointA.map((coord, index) => pointB[index] - coord));

console.log(distance2D(1, 1, 2, 2));
console.log(euclideanDistance([1, 1], [2, 2]));
console.log(euclideanDistance([1, 1, 1], [2, 2, 2]));
console.log(euclideanDistance([1, 1, 1, 1], [2, 2, 2, 2]));
