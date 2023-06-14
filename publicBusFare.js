function publicBusFare(totalPeople) {
    var totalFare = 1;
    if (totalPeople <= 61)
        return totalFare = 0;
    else {
        var busSeat = totalPeople % 50;
        var microBus = busSeat % 11;
        totalFare = microBus * 250;
        return totalFare;
    }
}
var totalCost = publicBusFare(365);
console.log(totalCost);