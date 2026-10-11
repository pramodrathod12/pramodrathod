
const helloBtn = document.getElementById("helloBtn");
const changeBtn = document.getElementById("changeBtn");
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const result = document.getElementById("result");

// Button 1: Show a welcome message
helloBtn.addEventListener("click", function () {
    result.textContent = "Hello Pramod! Welcome to JavaScript.";
});

// Button 2: Change the heading
changeBtn.addEventListener("click", function () {
    heading.textContent = "JavaScript Is Working!";

    message.textContent =
        "You have successfully connected HTML, CSS, and JavaScript.";

    result.textContent = "Great job! Your website is interactive.";
});
