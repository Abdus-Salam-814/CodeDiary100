// ### Task-1

// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// **Input:**
// </br>
// The first line of the input is the taka you have.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.

// **Output:**
// </br>
// Print the result.

// ---

// **Sample Input:**
// </br>
// 1000
// </br>
// 700

// **Sample Output:**
// </br>
// 300


const myTaka = 1000;
const applePrice = 700;

const returTaka = 1000 - 700;
console.log(returTaka)

function buyApples(myTaka, kg){
    const returnTotalTaka = myTaka - 700 * kg;
    const totalCoust = myTaka - returnTotalTaka;
    let returnTaka = ``;
    let lone = ``;
    if(returnTotalTaka > 0){
         returnTaka = `Retur return ${Math.abs(returnTotalTaka) } Taka.`;
    }
    if(returnTotalTaka < 0){
         lone = ` Your Lone Is ${Math.abs(returnTotalTaka)}`;
    }
    return `You give Me ${myTaka}.  Total cust ${totalCoust} Taka. ${returnTaka} ${lone}
    `
}


const myBDT = 2000;
const applesKG = 7;

const resultBuyApples = buyApples(myBDT, applesKG);
console.log(resultBuyApples);