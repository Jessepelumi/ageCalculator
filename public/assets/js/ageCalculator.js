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

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

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

    while (monthInput.value !== "") {
        if (monthInput.value < 1 || monthInput.value > 12) {
            monthError.textContent = `Must be a valid month`;
            monthInput.classList.add("error-field");
            monthLabel.classList.add("error-label");
        }
        break;
    }

    while (dayInput.value !== "" && monthInput.value !== "") {
        switch (monthInput.value) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                if (dayInput.value < 1 || dayInput.value > 31) {
                    dayError.textContent = `Must be a valid day`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                }
                break;
            case "2":
                if (dayInput.value < 1 || dayInput.value > 29) {
                    dayError.textContent = `Must be a valid day`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                }
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                if (dayInput.value < 1 || dayInput.value > 30) {
                    dayError.textContent = `Must be a valid day`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                }
                break;
            default:
                dayError.textContent = `Must be a valid date`;
                dayInput.classList.add("error-field");
                dayLabel.classList.add("error-label");
        }
        break;
    }

    while (yearInput.value !== "") {
        if (yearInput.value > currentYear) {
            yearError.textContent = `Must be in the past`;
            yearInput.classList.add("error-field");
            yearLabel.classList.add("error-label");
        }
        if (yearInput.value < 1) {
            yearError.textContent = `Must be a valid year`;
            yearInput.classList.add("error-field");
            yearLabel.classList.add("error-label");
        }
        break;
    }

    while (dayInput.value !== "" && monthInput.value !== "" && yearInput.value !== "") {
        switch (monthInput.value) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                if (dayInput.value < 1 || dayInput.value > 31) {
                    dayError.textContent = `Must be a valid date`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                    monthInput.classList.add("error-field");
                    monthLabel.classList.add("error-label");
                    yearInput.classList.add("error-field");
                    yearLabel.classList.add("error-label");
                }
                break;
            case "2":
                if (dayInput.value < 1 || dayInput.value > 29) {
                    dayError.textContent = `Must be a valid date`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                    monthInput.classList.add("error-field");
                    monthLabel.classList.add("error-label");
                    yearInput.classList.add("error-field");
                    yearLabel.classList.add("error-label");
                }
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                if (dayInput.value < 1 || dayInput.value > 30) {
                    dayError.textContent = `Must be a valid date`;
                    dayInput.classList.add("error-field");
                    dayLabel.classList.add("error-label");
                    monthInput.classList.add("error-field");
                    monthLabel.classList.add("error-label");
                    yearInput.classList.add("error-field");
                    yearLabel.classList.add("error-label");
                }
                break;
            default:
                dayError.textContent = `Must be a valid date`;
                dayInput.classList.add("error-field");
                dayLabel.classList.add("error-label");
                monthInput.classList.add("error-field");
                monthLabel.classList.add("error-label");
                yearInput.classList.add("error-field");
                yearLabel.classList.add("error-label");
        }
        break;
    }

    e.preventDefault();
})