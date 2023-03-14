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

function discountPercentage(productPrice:number , discountPercentage:number):void{
 let discountAmount:number = productPrice * (discountPercentage / 100);
 let finalPrice:number = productPrice - discountAmount;
    if(discountPercentage >= 50){
        console.log( `the discount percentage is invalid.`)
    }else{
        console.log(`Orignal price is ${productPrice}`);
        console.log(`Discount price is ${discountPercentage}%`);
        console.log(`Discount amount is ${discountAmount}`);
        console.log(`Final Price is ${finalPrice}`);
    }
}

discountPercentage(4000 , 45);