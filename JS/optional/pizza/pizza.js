// var sandwich = {
//     bread: "sourdough",
//     protein: "london broil",
//     cheese: "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };

// console.log(sandwich);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = [];
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
};

var pizzaOne = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizzaOne);

var pizzaTwo = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizzaTwo);

var pizza3 = pizzaOven ("hand tossed", "pesto", ["mozzarella"], ["fig", "chicken", "onions"]);
console.log(pizza3);

var pizzaFour = pizzaOven ("thick cut", "spicy marinara", ["three cheese blend"], ["meatball", "pepperoni", "salami"]);
console.log(pizzaFour);