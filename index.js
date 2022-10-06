/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1")
const arrayOfPositivesOfNo = [2, 4, 7, 9, 1]
console.log(arrayOfPositivesOfNo)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 2")
const myDetails = {
  firstName: "Victor",
  surName: "Oluwole",
  emailAddress: "victoroluwole@gmail.com",
  age: 30
}

console.log("My details ---->", myDetails)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 3")

myDetails.hasDriversLicense = true
console.log(myDetails)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 4")

delete myDetails.age
console.log(myDetails)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 5")

const secondDetails = Object.assign({}, myDetails)

secondDetails.firstName = "Jayson"
secondDetails.surName = "Lord"
secondDetails.emailAddress = "jaysonlord@gmail.com"
secondDetails.hasDriversLicense = false
secondDetails.age = 17
console.log(secondDetails)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 6")

/*const totalShoppingCart = 40
let costApplies = 10
const promotionApplies =
  totalShoppingCart >= 50
    ? "eligibleForFreeShipping"
    : "notEligibleForFreeShipping + costApplies"
console.log(totalShoppingCart)
*/

const totalShoppingCart = 35
let shippingCost = 10
let totalAmount

totalAmount =
  totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart + shippingCost
console.log("\n", "Your total amount with shipping is:", totalAmount)

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 7")

let blackFridayDiscount = (totalShoppingCart * 20) / 100
let totalWithDiscount = totalShoppingCart - blackFridayDiscount
totalAmount =
  totalWithDiscount > 50 ? totalWithDiscount : totalWithDiscount + shippingCost
console.log(
  "\n",
  "Your total amount with black friday discount and shipping is",
  totalAmount
)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 8")

const favoriteCar = {
  brand: "Audi",
  model: "Q7",
  licensePlate: "FB76FAD"
}

console.log(favoriteCar)

const favoriteCar2 = Object.assign({}, favoriteCar)
favoriteCar2.licensePlate = "GB87JAR"
console.log(favoriteCar2)

const favoriteCar3 = Object.assign({}, favoriteCar)
favoriteCar3.licensePlate = "HR89LQW"
console.log(favoriteCar3)

const favoriteCar4 = Object.assign({}, favoriteCar)
favoriteCar4.licensePlate = "BN01PST"
console.log(favoriteCar4)

const favoriteCar5 = Object.assign({}, favoriteCar)
favoriteCar5.licensePlate = "UH25ERS"
console.log(favoriteCar5)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 9")
const carsForRent = [
  "favoriteCar",
  "favoriteCar2",
  "favoriteCar3",
  "favoriteCar4",
  "favoriteCar5"
]

console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 10")

carsForRent.shift()
console.log(carsForRent)

carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 11")

console.log(favoriteCar)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 12")
console.log(
  "\n------------------------PUSH Cars INTO ARRAY-------------------------"
)
const carsForSale = []
console.log(carsForSale)
carsForSale.push("Audi", "Tesla", "Ford")
console.log(carsForSale)

const totalCars = carsForSale.concat(carsForRent)
console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 13")
for (let i = 0; i < carsForSale.length; i++) {
  console.log(i)
  console.log(carsForSale[i])
}

console.log(carsForSale)
