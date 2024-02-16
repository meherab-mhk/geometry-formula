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
//parallelogram
document.getElementById('para-calculate-btn').addEventListener('click', function(){
    const paraBaseInput = document.getElementById('para-base-input').value;
    const paraHeightInput = document.getElementById('para-height-input').value;
    const resultDisplay = document.getElementById('para-result-display');
    const parallelogramBase = parseFloat(paraBaseInput);
    const parallelogramHeight = parseFloat(paraHeightInput);
    const area = parallelogramBase * parallelogramHeight;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});
//rhombus
document.getElementById('rhom-calculate-btn').addEventListener('click', function(){
    const rhomDiagonal1Input = document.getElementById('rhom-diagonal1-input').value;
    const rhomDiagonal2Input = document.getElementById('rhom-diagonal2-input').value;
    const resultDisplay = document.getElementById('rhom-result-display');
    const rhombusDiagonal1 = parseFloat(rhomDiagonal1Input);
    const rhombusDiagonal2 = parseFloat(rhomDiagonal2Input);
    const area = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});
//pentagon
document.getElementById('pen-calculate-btn').addEventListener('click', function(){
    const pentagonInput = document.getElementById('pentagon-input').value;
    const apothemInput = document.getElementById('apothem-input').value;
    const resultDisplay = document.getElementById('pen-result-display');
    const pentagon = parseFloat(pentagonInput);
    const apothem = parseFloat(apothemInput);
    const area = 0.5 * pentagon * apothem;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});
//ellipse
document.getElementById('ellip-calculate-btn').addEventListener('click', function(){
    const ellipseAInput = document.getElementById('ellipse-a-input').value;
    const ellipseBInput = document.getElementById('ellipse-b-input').value;
    const resultDisplay = document.getElementById('ellip-result-display');
    const ellipseA = parseFloat(ellipseAInput);
    const ellipseB = parseFloat(ellipseBInput);
    const area = 3.1416 * ellipseA * ellipseB;
    resultDisplay.innerText = "Area is: "+ area + " m2";
});