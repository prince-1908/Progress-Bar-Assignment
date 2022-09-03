// initializing all the variables
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");

let next = document.getElementById("next1");
let back = document.getElementById("back");
let submit = document.getElementById("submit");

let progress = document.querySelector("progress");

// click event to go the the second screen of the form
next.addEventListener("click", function nextScreen() {
    form1.style.display = "none";
    form2.style.display = "block";
    progress.value = 50;
    document.getElementById("progress-report").innerHTML = `${progress.value}% form filled up..`;
});

// click event to went back to the first screen of the form
back.addEventListener("click", function backScreen() {
    form1.style.display = "block";
    form2.style.display = "none";
    progress.value = 0;
    document.getElementById("progress-report").innerHTML = `${progress.value}% form filled up.`;
});

// click event to show that the form is completely filled and submitted
submit.addEventListener("click", function submit() {
    progress.value = 100;
    document.getElementById("progress-report").innerHTML = `${progress.value}% form filled up.....`;
});