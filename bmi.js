function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "" || weight === ""){
        document.getElementById("result").innerText = "Please enter height and weight";
        return;
    }

    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);

    let status = "";
    let tip = "";
    let exercise = "";
    let diet = "";
    let suggestions = "";

    if(bmi < 18.5){
        status = "Underweight";
        tip = "You should focus on healthy weight gain.";
        exercise = "Light strength training, yoga, stretching.";
        diet = "Rice, potatoes, nuts, milk, eggs, bananas, protein foods.";
        suggestions = "Eat more frequently and sleep 7-8 hours.";
    }
    else if(bmi >= 18.5 && bmi < 25){
        status = "Normal";
        tip = "You are in a healthy range.";
        exercise = "Cardio, jogging, cycling, bodyweight exercises.";
        diet = "Balanced meals with vegetables, fruits, proteins.";
        suggestions = "Maintain routine and stay active.";
    }
    else if(bmi >= 25 && bmi < 30){
        status = "Overweight";
        tip = "You should focus on weight loss.";
        exercise = "Walking, jogging, skipping, HIIT workouts.";
        diet = "More vegetables, fruits, lean protein, less sugar.";
        suggestions = "Avoid junk food and drink more water.";
    }
    else{
        status = "Obese";
        tip = "You should follow a structured fitness plan.";
        exercise = "Brisk walking, cardio, low-impact workouts.";
        diet = "High fiber foods, salads, whole grains, less oil.";
        suggestions = "Consult a doctor or nutritionist.";
    }

    let resultDiv = document.getElementById("result");

    resultDiv.innerText = "Your BMI: " + bmi + " (" + status + ")";
    resultDiv.className = "status";

    if(status === "Underweight"){
        resultDiv.classList.add("underweight");
    }
    else if(status === "Normal"){
        resultDiv.classList.add("normal");
    }
    else if(status === "Overweight"){
        resultDiv.classList.add("overweight");
    }
    else{
        resultDiv.classList.add("obese");
    }

    document.getElementById("tips").innerText = "Health Tip: " + tip;
    document.getElementById("exercise").innerText = exercise;
    document.getElementById("diet").innerText = diet;
    document.getElementById("suggestions").innerText = suggestions;
}