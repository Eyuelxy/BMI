function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi;
    } else {
        document.getElementById("bmiResult").innerHTML = "Please enter valid values for weight and height.";
    }
}