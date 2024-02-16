//triangle
document.getElementById('calculate-btn').addEventListener('click', function(){
    const triBaseInput = document.getElementById('tri-base-input').value;
    const triHeightInput = document.getElementById('tri-height-input').value;
    const resultDisplay = document.getElementById('result-display');
    const triangleBase = parseFloat(triBaseInput);
    const triangleHeight = parseFloat(triHeightInput);
    const area = 0.5 * triangleBase * triangleHeight;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});
//rectangle
document.getElementById('rect-calculate-btn').addEventListener('click', function(){
    const rectWidthInput = document.getElementById('rect-width-input').value;
    const rectLengthInput = document.getElementById('rect-length-input').value;
    const resultDisplay = document.getElementById('rect-result-display');
    const rectWidth = parseFloat(rectWidthInput);
    const rectlength = parseFloat(rectLengthInput);
    const area = rectWidth * rectlength;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});


