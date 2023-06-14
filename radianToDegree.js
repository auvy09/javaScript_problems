function radianToDegree(radian) {
    const totaldegree = radian * (180 / Math.PI);

    degree = totaldegree.toFixed(2);
    degree = parseFloat(degree);
    return degree;
}

const degrees = radianToDegree(25);
console.log(degrees);