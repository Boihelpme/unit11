

// alert(`Welcome to 20! This is competition to see
//  which player gets closer to the number 20. You are 
//  going to be playing agains the computer. \n\n You will draw from 1 to 10.
//  The computer will stop at 16. \n\n Pay attention to the screen to see what your total is, and if you need another number, press "y".`)

// alert(`Now... Its computer's turn.`)


// // computer number
// do {
//     compc = 0;
//     userc = 0;
//     do {

//         var numbers = Math.floor(Math.random() * 10 ) + 1;
//         compc = compc + numbers;
//         alert(`Computer got ${numbers}. Computer new total is ${compc}`)


//     } while (compc <= 16)


//     alert("Now its your turn")

//     do { 
//         var numbers = Math.floor(Math.random() * 10 ) + 1;
//         userc = userc + numbers;
//         alert(`Your new number is ${numbers}. Your totat is ${userc}`)
//         var p1 = prompt(`Would you like to go again? y = Yes. n = No`)
        
//     } while ((userc <= 19) && (p1 == "y"))

//     alert(`Computer: ${compc}. Human: ${userc}.`)

//     if (compc <= userc) {
//         alert(` You won`)
//     } else{
//         alert(` You lost `)
//     }

//     var p2 = prompt(`Would you like to play again? y = yes n = no`)

// } while (p2 == "y") 
   



function username() {
    var user = prompt("Whats your name?")
    return user
}


function rannum() {
    var numbers = Math.floor(Math.random() * 10 ) + 1;
    return numbers
}
// var user = console.log(username())

var numbers = rannum()


function rannum1(x){
    var a1 = `The user got ${x}`
    return a1
}

function rannum2(y){
    var a2 = `The computer got ${y}`
    return a2
}

console.log(rannum1(rannum()))
console.log(rannum2(rannum()))




