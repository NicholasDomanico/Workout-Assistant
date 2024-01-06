const addWorkoutButton = document.getElementById("add-workout-button");
const workoutPopup = document.getElementById("add-workout-popup");
const opaqueBackground = document.getElementById("opaque-background");
const submitButton = document.getElementById("workout-submit-button");
const mainGrid = document.getElementsByClassName("main-body");

addWorkoutButton.addEventListener("click", displayWorkoutPopup);
submitButton.addEventListener("click", closeWorkoutPopup);

function displayWorkoutPopup() {
    workoutPopup.classList.remove("hidden");
    workoutPopup.classList.add("visible");
    opaqueBackground.className = "visible";
}

function closeWorkoutPopup() {
    workoutPopup.classList.remove("visible");
    workoutPopup.classList.add("hidden");
    opaqueBackground.className = "hidden";
}
