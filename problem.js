/* let biriyani = ['chabul', 'tabul', 'chibul', 'dibul', 'tibul', 'nibul', 'chabul', 'nibul', 'tibul'];

function biriyaniBatbo(biriyani) {
    const unique = [];

    for (const element of biriyani) {

        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = biriyaniBatbo(biriyani);
console.log(uniqueNames); */


// let friendsName = ['tushan', 'rohan', 'ishan', 'eitmam', 'tushan', 'ishan'];
// const unique = [];

// function friend(friendsName) {

//     for (const element of friendsName) {
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const amrRealFriends = friend(friendsName);
// console.log(amrRealFriends);




/* let players = ['sakib', 'tamim', 'rafique', 'riyad', 'mushfique', 'tamim', 'sakib'];

const unique = [];

function cricketPlayers(players) {
    for (const element of players) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
let myFvrt = cricketPlayers(players);
console.log(myFvrt);
 */


// REverse


/* var tushan = 'vai ami tushan.. amake ulta korben keno ?';

function reversedLetter(tushan) {
    let reverse = '';

    for (const letter of tushan) {

        reverse = letter + reverse;
    }
    return reverse;
}

let myFvrt = reversedLetter(tushan);
console.log(myFvrt); */


// sum

/* function math(a, b) {
    let element = a + b;
    return element;
}
const myFvrt = math(5, 500);
console.log(myFvrt); */



/* 

chocolate = 10
chips = 50
juice = 15

*/

// cost calculator

/* function totalCost(chocoQuantity, chipsQuantity, juiceQuantity) {

    const perChocoPrice = 10;
    const perChipsPrice = 50;
    const perJuicePrice = 15;

    const totalChocoPrice = perChocoPrice * chocoQuantity;
    const totalChipsPrice = perChipsPrice * chipsQuantity;
    const totalJuicePrice = perJuicePrice * juiceQuantity;

    const total = totalChocoPrice + totalChipsPrice + totalJuicePrice;

    return total;
}

const myTotal = totalCost(0, 0, 1);
console.log(myTotal); */

// recursion


/* function math(i) {
    if (i == 8) {
        return 1;
    }

    return i + math(i + 1);

}
console.log(math(6)); */