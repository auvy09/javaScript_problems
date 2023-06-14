function oilPrice(dQuantity, pQuantity, oQuantity) {
    const dPrice = 114;
    const pPrice = 130;
    const oPrice = 135;
    const dTotal = dPrice * dQuantity;
    const pTotal = pPrice * pQuantity;
    const oTotal = oPrice * oQuantity;

    const sum = dTotal + pTotal + oTotal;
    return sum;

}

let totalCost = oilPrice(1, 1, 1);
console.log(totalCost);
totalCost = oilPrice(30, 20, 10);
console.log(totalCost);