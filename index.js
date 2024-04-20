document.getElementById("yearForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var year = parseInt(document.getElementById("year").value);
    var resultDiv = document.getElementById("result");
    if (isNaN(year)) {
        resultDiv.innerText = "Please enter a valid year.";
    } else if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        resultDiv.innerText = year + " is a leap year!";
    } else {
        resultDiv.innerText = year + " is not a leap year.";
    }
});
