function isBestFriend(friend1, friend2) {
    if (friend1.name === friend2.friend)
        return true;
    else return false;

}

var far1 = { name: "abul", friend: "babul" };
var far2 = { name: "babul", friend: "abul" };
var bestFriend = isBestFriend(far1, far2);
console.log(bestFriend);
