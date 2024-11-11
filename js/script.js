// Function to calculate the area of a triangle
function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for base and height.';
        return;
    }

    // Calculate the area of the triangle
    const area = (base * height) / 2;

    // Display the result
    resultDiv.textContent = `The area of the triangle is ${area.toFixed(2)} square units.`;
}

// Function to calculate the area of a triangle using Heron's formula
function calculateHeronArea() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const resultDiv = document.getElementById('heronResult');

    // Validate inputs
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for all sides.';
        return;
    }

    // Calculate semi-perimeter
    const s = (a + b + c) / 2;

    // Check if the sides form a valid triangle
    if (s <= a || s <= b || s <= c) {
        resultDiv.textContent = 'The given sides do not form a valid triangle.';
        return;
    }

    // Calculate area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    resultDiv.textContent = `The area of the triangle is ${area.toFixed(2)} square units.`;
}


// Function to calculate the area of a rectangle
function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const resultDiv = document.getElementById('rectangleResult');

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for length and width.';
        return;
    }

    const area = length * width;
    resultDiv.textContent = `The area of the rectangle is ${area.toFixed(2)} square units.`;
}

// Function to calculate the area of a circle
function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    const resultDiv = document.getElementById('circleResult');

    if (isNaN(radius) || radius <= 0) {
        resultDiv.textContent = 'Please enter a valid positive number for radius.';
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);
    resultDiv.textContent = `The area of the circle is ${area.toFixed(2)} square units.`;
}


// Function to calculate the area of a parallelogram
function calculateParallelogramArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('parallelogramResult');

    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for base and height.';
        return;
    }

    // Calculate the area of the triangle
    const area = (base * height);

    // Display the result
    resultDiv.textContent = `The area of the parallelogram is ${area.toFixed(2)} square units.`;
}

// Function to calculate the area of a trapezium
function calculateTrapeziumArea() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const h = parseFloat(document.getElementById('sideC').value);
    const resultDiv = document.getElementById('trapeziumResult');

    // Check if the inputs are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(h) || a <= 0 || b <= 0 || h <= 0) {
        resultDiv.textContent = 'Please enter valid positive numbers for base and height.';
        return;
    }

    // Calculate the area of the triangle
    const area = 0.5 * (a + b) * h;

    // Display the result
    resultDiv.textContent = `The area of the trapezium is ${area.toFixed(2)} square units.`;
}