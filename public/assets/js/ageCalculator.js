document.addEventListener("DOMContentLoaded", () => {
    
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");

    const dayLabel = document.getElementById("dayLabel");
    const monthLabel = document.getElementById("monthLabel");
    const yearLabel = document.getElementById("yearLabel");

    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");

    const yearContainer = document.getElementById("yearContainer");
    const monthContainer = document.getElementById("monthContainer");
    const dayContainer = document.getElementById("dayContainer");

    const button = document.getElementById("calculateButton");

    const currentDate = new Date();

    dayInput.addEventListener("input", function() {

        if (dayError.textContent !== "Must be a valid date") {
            dayInput.classList.remove("error-field");
            dayLabel.classList.remove("error-label");
            monthInput.classList.remove("error-field");
            monthLabel.classList.remove("error-label");
            yearInput.classList.remove("error-field");
            yearLabel.classList.remove("error-label");

            dayError.textContent = "";
            monthError.textContent = "";
            yearError.textContent = "";
        }

        if (dayInput.value > 31) {

            dayError.textContent = "Must be a valid day";
            dayInput.classList.add("error-field");
            dayLabel.classList.add("error-label");

        } else {
            dayInput.classList.remove("error-field");
            dayLabel.classList.remove("error-label");
        }

    });

    monthInput.addEventListener("input", function() {

        if (dayError.textContent === "Must be a valid date") {
            dayInput.classList.remove("error-field");
            dayLabel.classList.remove("error-label");
            monthInput.classList.remove("error-field");
            monthLabel.classList.remove("error-label");
            yearInput.classList.remove("error-field");
            yearLabel.classList.remove("error-label");

            dayError.textContent = "";
            monthError.textContent = "";
            yearError.textContent = "";
        }

        if (monthInput.value > 12) {
            monthError.textContent = "Must be a valid month";
            monthInput.classList.add("error-field");
            monthLabel.classList.add("error-label");
        } else {
            monthInput.classList.remove("error-field");
            monthLabel.classList.remove("error-label");
        }

    });

    yearInput.addEventListener("input", function() {

        if (dayError.textContent === "Must be a valid date") {
            dayInput.classList.remove("error-field");
            dayLabel.classList.remove("error-label");
            monthInput.classList.remove("error-field");
            monthLabel.classList.remove("error-label");
            yearInput.classList.remove("error-field");
            yearLabel.classList.remove("error-label");

            dayError.textContent = "";
            monthError.textContent = "";
            yearError.textContent = "";
        }

        if (yearInput.value > currentDate.getFullYear()) {
            yearError.textContent = "Must be in the past";
            yearInput.classList.add("error-field");
            yearLabel.classList.add("error-label");
        } else {
            yearInput.classList.remove("error-field");
            yearLabel.classList.remove("error-label");
        }

    });

    button.addEventListener("click", function() {

        day = dayInput.value;
        month = monthInput.value;
        year = yearInput.value;

        if (!day) {
            dayInput.classList.add("error-field");
            dayLabel.classList.add("error-label");
            dayError.textContent = "This field is required";
        }

        if (!month) {
            monthInput.classList.add("error-field");
            monthLabel.classList.add("error-label");
            monthError.textContent = "This field is required";
        }

        if (!year) {
            yearInput.classList.add("error-field");
            yearLabel.classList.add("error-label");
            yearError.textContent = "This field is required";
        }

        if (!day || !month || !year) {
            return;
        }

        const date = new Date(year, month - 1, day);


        let ageYear = currentDate.getFullYear() - date.getFullYear();
        let ageMonth = 0;
        let ageDay = 0;

        if (currentDate < new Date(currentDate.getFullYear(), month - 1, day)) {
            ageYear = ageYear - 1;
            ageMonth = currentDate.getMonth() + 1;
            ageDay = currentDate.getDate();
        } else {
            if (currentDate.getMonth() + 1 === month) {
              ageMonth = 0;
              ageDay = currentData.getDate() - day;
              console.log(ageDay);
            } else {
              ageMonth = currentDate.getMonth() + 1 - month;
              if (currentDate.getDate() < day) {
                ageMonth = ageMonth - 1;
                ageDay = currentDate.getDate() + new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - day;
              } else {
                ageDay = currentDate.getDate() - day;
              }
            }
      
        }

        yearContainer.textContent = ageYear;
        monthContainer.textContent = ageMonth;
        dayContainer.textContent = ageDay;

    });

});