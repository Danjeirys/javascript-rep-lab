// Part II: JavaScript Reps

for (let i = 0; i <= 20; i++) {
    console.log (i)
}

// For Loop - only EVEN numbers - 0 through 200

for (let i = 0; i <= 200; i+=2) {
    console.log (i)
}

// Fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log (' Fizzbuzz')
    } else if (i % 5 === 0) {
        console.log ('Buzz')
    } else if (i % 3 === 0) {
        console.log ('Fizz')
    }
}


