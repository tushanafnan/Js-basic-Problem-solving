// 1st Problem / Seer To Mon
function seerToMon(seer) {
    // !Alert Providing
    if (typeof seer == String) {
        return 'Please enter a valid number';
    }
    if (seer < 0) {
        return 'The Input Value Should be Minimum 1'
    }
    /* 1 mon = 40 seer */
    let mon = seer / 40;
    return mon;
}
/* Seer Input and Mon Converted Result */
const convertedMon = seerToMon(80);
console.log(convertedMon);



// 2nd Problem / totalSales
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // Alert Part
    if (shirtQuantity <= 0) {
        return 'Please Provide Correct Quantity';
    }
    if (pantQuantity <= 0) {
        return 'Please Provide Correct Quantity';
    }
    if (shoeQuantity <= 0) {
        return 'Please Provide Correct Quantity';
    }
    /* Price Declare */
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    /* Quantity and Price Calculation */
    const shirtPriceQuantity = shirtQuantity * perShirtPrice;
    const pantPriceQuantity = pantQuantity * perPantPrice;
    const shoePriceQuantity = shoeQuantity * perShoePrice;
    /* Total Calculation */
    const totalPrice = shirtPriceQuantity + pantPriceQuantity + shoePriceQuantity;
    return totalPrice;
}
const total = totalSales(5, 4, 5);
console.log(total);



// 3rd Problem / deliveryCost
function deliveryCost(tshirtQuantity) {
    /* !Alert Providing */
    if (typeof tshirtQuantity != "number") {
        return 'Please enter a valid number';
    }
    /* Quantity for first 100 (1 to 100) */
    if (tshirtQuantity <= 100) {
        let totalCost = tshirtQuantity * 100;
        return totalCost;
    }
    /* Quantity more than 100 (101-200) */
    else if (tshirtQuantity <= 200) {
        const totalCost = 10000;
        let secondTshirtQuantity = tshirtQuantity - 100;
        let cost = secondTshirtQuantity * 80;
        let finalCost = cost + totalCost;
        return finalCost;
    }
    /* Quantity 200++ (201 to infinity) */
    else {
        const totalCost = 18000;
        let thirdTshirtQuantity = tshirtQuantity - 200;
        let cost = thirdTshirtQuantity * 50;
        let finalCost = cost + totalCost;
        return finalCost;
    }
}
/* Delivery Quantity Declare */
const myCost = deliveryCost(400);
console.log(myCost);





// 4th Problem / perfectFriend
function perfectFriend(friendsname) {
    /* alert proving */
    if (typeof friendsname != "object") {
        return 'Please provide valid friends name';
    }
    /* Starting Loop */
    for (let i = 0; i < friendsname.length; i++) {
        let element = friendsname[i];
        if (element.length == 5) {
            return element;
        }
    }
}
/* providing Friends Name */
let friendsname = ['Kishore', 'Musa', 'Robin', 'Samira'];
let bestFriend = perfectFriend(friendsname);
console.log(bestFriend);