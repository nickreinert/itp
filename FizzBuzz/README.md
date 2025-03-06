## Documentation file
- First I looked through my google docs of notes to find helpful information we used in class, and I stumbled upon `for (let i = 1500; i <= 2700; i++) {  if (i % 7 === 0 && i % 5 === 0) { //% 5 === 0 means is divisible by 5
    console.log(i);}}`
- I then changed these values to fit the requirements of this assignment, and added a couple other if statements `for (let i = 1500; i <= 2700; i++) {  if (i % 7 === 0 && i % 5 === 0) { //% 5 === 0 means is divisible by 5
    console.log(i);}}`
- I wanted to address the rest of the outcomes, so I just put an else at the end for all of the normal numbers `else {console.log(i);}`
- I then tested my code
- I got the error "ReferenceError: Fizz is not defined (line 4 in function eval)" because I forgot to make the Fizz, Buzz, and FizzBuzz a string
- I retested after fixing `for (let i = 1; i <= 100; i++) {if (i % 3 === 0 && i % 5 === 0) {console.log("FizzBuzz");}  if (i % 3 === 0) {console.log("Fizz");} if (i % 5 === 0) {console.log("Buzz");} else {console.log(i);}
- The code worked!
- I realized I could take out the semi-colons so I did so