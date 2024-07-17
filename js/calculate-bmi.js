// Convert weight into kilogram
function convertWeight(value, units) {
    return units == 'lbs' ? value / 2.205 : value;
};

// Convert height into meters
function convertHeight(value, units) {
    return units == 'cm' ? value / 100 : value;
};

// Calculate BMI value
export function calculateBmi(data) {
    data.weight = convertWeight(parseFloat(data.weight), data.weightUnits);
    data.height = convertHeight(parseFloat(data.height), data.heightUnits);

    return data.weight / Math.pow(data.height, 2);
};
