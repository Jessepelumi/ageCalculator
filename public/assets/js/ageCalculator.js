const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const form = document.getElementById("form");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

form.addEventListener("submit", (e) => {

    if (dayInput.value === "" || dayInput.value === null) {
        dayError.textContent = `This field is required`;
        dayInput.classList.add("error-field");
        dayLabel.classList.add("error-label");
    }
    if (monthInput.value === "" || monthInput.value === null) {
        monthError.textContent = `This field is required`;
        monthInput.classList.add("error-field");
        monthLabel.classList.add("error-label");
    }
    if (yearInput.value === "" || yearInput.value === null) {
        yearError.textContent = `This field is required`;
        yearInput.classList.add("error-field");
        yearLabel.classList.add("error-label");
    }

    e.preventDefault();
})