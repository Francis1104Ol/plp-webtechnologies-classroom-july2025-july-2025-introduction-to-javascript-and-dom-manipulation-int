/************************************
 * PART 1: VARIABLES & CONDITIONALS
 ************************************/

let userName = "Student";
let userScore = 75;

if (userScore >= 50) {
    console.log(userName + " has passed the test.");
} else {
    console.log(userName + " has failed the test.");
}


/************************************
 * PART 2: CUSTOM FUNCTIONS
 ************************************/

// Function 1: Greet the user
function greetUser(name) {
    return "Welcome, " + name + "!";
}

// Function 2: Calculate total score
function calculateTotal(score1, score2) {
    return score1 + score2;
}

console.log(greetUser(userName));
console.log("Total Score:", calculateTotal(40, 35));


/************************************
 * PART 3: LOOPS
 ************************************/

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
}

// Loop 2: While loop
let count = 1;
while (count <= 3) {
    console.log("While Loop Count:", count);
    count++;
}


/************************************
 * PART 4: DOM INTERACTIONS
 ************************************/

// DOM Interaction 1: Select elements
const title = document.getElementById("main-title");
const changeTextBtn = document.getElementById("changeTextBtn");
const showListBtn = document.getElementById("showListBtn");
const numberList = document.getElementById("numberList");

// DOM Interaction 2: Change text content on click
changeTextBtn.addEventListener("click", function () {
    title.textContent = "Text Updated Using JavaScript!";
});

// DOM Interaction 3: Create and append elements using a loop
showListBtn.addEventListener("click", function () {
    numberList.innerHTML = ""; // Clear list first

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Number " + i;
        numberList.appendChild(li);
    }
});
