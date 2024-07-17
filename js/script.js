import { calculateBmi } from './calculate-bmi.js'
import { classifyBmi } from './classify-bmi.js';

const form = document.getElementById('bmi-form');
const resetButton = document.getElementById('reset-btn');
const resultColumn = document.getElementById('result-column');
const resultBox = document.getElementById('result-box');
const resultDetail = document.getElementById('result-detail');

// Reset Form
resetButton.addEventListener('click', () => {
    form.reset();
    resultColumn.classList.add('hidden');
});


// Handle event when form is submitted
form.addEventListener('submit', function (element) {
    element.preventDefault();
    getData(element.target);
});

// Get data from form
function getData(form) {
    let formData = new FormData(form);
    let userData = Object.fromEntries(formData);

    // User age checking
    if (parseInt(userData.age) < 20) {
        alert('Sorry, this calculator is only intended for adults aged 20 years and over.')
    } else {
        let bmi = calculateBmi(userData);
        let resultData = classifyBmi(bmi);
        showResult(resultData)
    }
};

// Display Result
function showResult(data) {
    resultColumn.classList.remove('hidden');

    resultBox.className = '';
    resultBox.classList.add(`bg-${data.color}`);
    resultBox.innerHTML = `
        <p class="text-center text-lg">${data.text}</p>
        <p class="font-bold text-xl text-center mt-10">${data.value}</p>
        <p class="text-center mt-10">${data.description}</p>
        <div class="flex mt-10">
            <button class="button-primary" onclick="alert('Sorry, This Feature Is Under Development')">
                Download BMI Result
            </button>
        </div>
    `;
    resultDetail.innerHTML = `
        <p class="mt-10">${data.category}</p>
        <p>${data.advice}</p>
        <p>${data.solution}</p>
        <button class="button-primary" onclick="alert('Sorry, This Feature Is Under Development')">
            Nutritionist Consultation Via App
        </button>
        <button class="button-primary" onclick="alert('Sorry, This Feature Is Under Development')">
            Online Registration Of Nutritionists
        </button>
        <p>BMI does not fully represent a complete diagnosis of a person's health and risk of disease. You need
            to consult further about your risks and concerns related to your weight.</p>
    `;
};
