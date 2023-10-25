
document.addEventListener("DOMContentLoaded", function () {
    const departureDateInput = document.getElementById("departure-date");
    const returnDateInput = document.getElementById("return-date");
    const departureDatePickerButton = document.getElementById("show-departure-datepicker");
    const returnDatePickerButton = document.getElementById("show-return-datepicker");

    // Initialize departure date picker
    $(departureDateInput).datepicker({
        dateFormat: "mm/dd/yy",
        showButtonPanel: true,
    });

    // Initialize return date picker
    $(returnDateInput).datepicker({
        dateFormat: "mm/dd/yy",
        showButtonPanel: true,
    });

    departureDatePickerButton.addEventListener("click", function () {
        $(departureDateInput).datepicker("show");
    });

    returnDatePickerButton.addEventListener("click", function () {
        $(returnDateInput).datepicker("show");
    });
});
