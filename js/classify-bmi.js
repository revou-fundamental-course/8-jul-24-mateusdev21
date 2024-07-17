let resultData = []

fetch("./data/results.json")
    .then((response) => response.json())
    .then((data) => {
        resultData = data.data.result
    })
    .catch((error) => console.error("Error loading JSON file", error));

// Check if the number is within the range
function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

// Classify the results based on the BMI value
export function classifyBmi(bmi) {
    let result = {};

    resultData.map((data) => {
        if (inRange(bmi, data['min-value'], data['max-value'])) {
            result = data;
            result.value = bmi.toFixed(1);
        };
    });
    console.log(result);

    return result;
};
