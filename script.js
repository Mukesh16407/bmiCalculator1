// bmi < 18.5 -> UnderWeight.
// bmi >= 18.5 && bmi <= 24.9 -> Normal Weight.
// bmi >= 25 && bmi <= 29.9 -> Overweight.
// bmi >= 30 -> Obese.

const btn = document.getElementById("calculate"),
  result = document.getElementById("bmi"),
  status1 = document.getElementById("status");

  
btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  

  // Validate Input
  if (height === "" || isNaN(height)) {
    return (status1.innerHTML = "Provide a valid Height!");
  } else if (weight === "" || isNaN(weight)) {
    return (status1.innerHTML = "Provide a valid Height!");
  } else {
    height = height / 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);
   
    //   Categorize result
    if (bmi < 18.5) {
      showResult("Underweight", `<span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult("Norma", `<span>${bmi}</span>`, "green");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      showResult("Overweight", `<span>${bmi}</span>`, "blue");
    } else {
      showResult("Obese", `<span>${bmi}</span>`, "red");
    }
  }
  
}

function showResult(status2,val, color) {
    result.style.backgroundColor = color;
  return (result.innerHTML = val, status1.innerHTML =status2);
}

