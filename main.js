function getInputValue(input) {
    const inputValue = document.getElementById(input).value;
    const value  = parseFloat(inputValue);
    return value;
}
function getArea(input1, input2){
    const result = 0.5 * input1 * input2;
    return result;
}
function getArea2(input1, input2){
    const result = input1 * input2;
    return result;
}
function setDisplay(){
    const setDisplay = document.getElementById('result-display');
    return setDisplay;
}

//triangle
function calculateTriangleArea() {
    const base = getInputValue('tri-base-input');
    const height = getInputValue('tri-height-input');
    const result = getArea(base, height);
    const showResult = setDisplay();
    showResult.innerText = "Triangle area is: " + result + " cm2";
}

//rectangle
function calculateRectangleArea() {
    const width = getInputValue('rect-width-input');
    const length = getInputValue('rect-length-input');
    const result = getArea2(width, length);
    const showResult = setDisplay();
    showResult.innerText = "Rectangle area is: " + result + " cm2";
}

//parallelogram
function calculateParalellogramArea() {
    const base = getInputValue('para-base-input');
    const height = getInputValue('para-height-input');
    const result = getArea2(base, height);
    const showResult = setDisplay();
    showResult.innerText = "Paralellogram area is: " + result + " cm2";
}

//rhombus
function calculateRhombusArea(){
    const diagonal1 = getInputValue('rhom-diagonal1-input');
    const diagonal2 = getInputValue('rhom-diagonal2-input');
    const result = getArea(diagonal1, diagonal2);
    const showResult = setDisplay();
    showResult.innerText = "Rhombus area is: " + result + " cm2";
}

//pentagon
function calculatePentagonArea() {
    const pentagon = getInputValue('pentagon-input');
    const apothem = getInputValue('apothem-input');
    const result = getArea(pentagon, apothem);
    const showResult = setDisplay();
    showResult.innerText = "Pentagon area is: " + result + " cm2";
}

//ellipse
function calculateEllipseArea(){
    const ellipseAInput = getInputValue('ellipse-a-input');
    const ellipseBInput = getInputValue('ellipse-b-input');
    const result = 3.1416 * ellipseAInput * ellipseBInput;
    const showResult = setDisplay();
    showResult.innerText = "Ellipse area is: " + result + " cm2";
}