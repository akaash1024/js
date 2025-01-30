
// !  Think of it like:

// !  Promise is like giving someone a task
// !  resolve() is like saying "I finished the task successfully!"
// !  reject() is like saying "Sorry, I couldn't complete the task"
// !  .then() is what happens after success
// !  .catch() is what happens after failure

// !  Want me to show you more examples or explain any part deeper?


const buyIceCream = new Promise((resolve, reject) => {
    // Let's say we have $5
    const money = 5
    const iceCreamPrice = 10

    if(money >= iceCreamPrice){
        resolve("Here's your ice cream! 🍦")
    } else {
        reject("Not enough money for ice cream 😢")
    }
})

buyIceCream
    .then((successMessage) => {
        // This function runs if we got ice cream
        console.log(successMessage)
    })
    .catch((errorMessage) => {
        // This function runs if we couldn't get ice cream
        console.log(errorMessage)
    })