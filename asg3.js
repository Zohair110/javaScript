// 3- Task: Create a Function to Determine the Discount Amount for a Product
// Breakdown:
// · Create a function that takes a product price and a discount percentage as input 
// and calculates the discount amount for the product using the formula:
//  discount amount = product price * (discount percentage / 100).
// · If the discount percentage is greater than or equal to 50%, the function should return an error message
//  indicating that the discount percentage is invalid.
// · Display the original price, discount percentage, discount amount, and final price of the product to the
//  user as output.
// · Test the function with different product prices and discount percentages.
function discountPercentage(productPrice, discountPercentage) {
    var discountAmount = productPrice * (discountPercentage / 100);
    var finalPrice = productPrice - discountAmount;
    if (discountPercentage >= 50) {
        console.log("the discount percentage is invalid.");
    }
    else {
        console.log("Orignal price is ".concat(productPrice));
        console.log("Discount price is ".concat(discountPercentage, "%"));
        console.log("Discount amount is ".concat(discountAmount));
        console.log("Final Price is ".concat(finalPrice));
    }
}
discountPercentage(4000, 45);
