    // Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    var totalCost = 0;
    var tip = 0;
    var tax = 0;
    tip = meal_cost * (tip_percent / 100);
    tax = meal_cost * (tax_percent / 100);
    totalCost = meal_cost + tip + tax;
    totalCost = Math.round(totalCost);
    console.log(totalCost);

}
