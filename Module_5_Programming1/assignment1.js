const weeklyIncome = parseInt(prompt("Weekly Income:"));
const foodCost = parseInt(prompt("Food Cost:"));
const housingCost = parseInt(prompt("Housing Cost:"));
const transportationCost = parseInt(prompt("Transportation Cost:"));
const otherCost = parseInt(prompt("Other Cost:"));
const wantToSaveYear = parseInt(prompt("How much do you want to save?:"));

const desiredWeeklySavings = wantToSave / 52;
const weeklyTotalCost = foodCost + housingCost + transportationCost + otherCost;
const weeklySavings = weeklyIncome - weeklyTotalCost;

if (weeklySavings < desiredWeeklySavings) {
    console.log(`We can save ${weeklySavings} a week.`)
} else {
    console.log(`We are spending too much.`);
}