const bmiForm = document.getElementById("bmiForm");
const resultText = document.getElementById("resultText");
const classification = document.getElementById("classification");

bmiForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Validate input
    if (!height || !weight || height <= 0 || weight <= 0) {
        resultText.textContent = "Please enter valid height and weight!";
        resultText.style.color = "red";
        classification.textContent = "";
        return;
    }

    // BMI formula
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    resultText.textContent = `Your BMI: ${bmi}`;
    resultText.style.color = "#101820";

    let status = "";
    let color = "";

    if (bmi < 18.5) {
        status = "Underweight 😔";
        color = "#1e90ff";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal weight 😊";
        color = "#28a745";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight 😕";
        color = "#ffc107";
    } else {
        status = "Obese 😞";
        color = "#dc3545";
    }

    classification.textContent = `Category: ${status}`;
    classification.style.color = color;
});
