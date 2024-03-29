class BMICalculator {
  calculateMetric(options) {
    const weight = options.weight;
    const height = options.height;
    const bmiValue = (weight / (height * height)).toFixed(2);
    const parsedBmiValue = parseFloat(bmiValue);
    const bmiResults = {
      value: parsedBmiValue,
      clasification: this.getBMIClasification(parsedBmiValue),
    };
    return bmiResults;
  }
  getBMIClasification(value) {
    if (value < 18.5) {
      return "Underweight";
    } else if (value < 24.9) {
      return "Normal";
    } else if (value < 29.9) {
      return "Overweight";
    } else if (value < 34.9) {
      return "Obesity Class 1";
    } else if (value < 39.9) {
      return "Obesity Class 2";
    } else {
      return "Extreme Obesity Class 3";
    }
  }
}

function onCalculateClick() {
  const weight = document.getElementById("weight").valueAsNumber;
  const height = document.getElementById("height").valueAsNumber;
  const resultDiv = document.getElementById("results");
  if (isNaN(weight) || isNaN(height)) {
    resultDiv.innerHTML = "<h2>Please specify your weight and height!</h2>";
  } else if (height === 0) {
    resultDiv.innerHTML = "<h2>Are you really THAT short?</h2>";
  } else if (height < 0 || weight < 0) {
    resultDiv.innerHTML = "<h2>Please write positive values!</h2>";
  } else {
    const calculator = new BMICalculator();
    const result = calculator.calculateMetric({
      weight: weight,
      height: height,
    });
    resultDiv.innerHTML = `<h2>Your BMI value is <strong>${result.value}</strong> and you are in <strong>${result.clasification}</strong> category! </h2>`;
  }
}

const button = document.getElementById("calculateBtn");
button.addEventListener("click", onCalculateClick);

if (typeof module !== "undefined" && module.exports) {
  module.exports = BMICalculator;
}
