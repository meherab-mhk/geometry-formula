document.getElementById('calculate-btn').addEventListener('click', function(){
    const triBaseInput = document.getElementById('tri-base-input').value;
    const triHeightInput = document.getElementById('tri-height-input').value;
    const resultDisplay = document.getElementById('result-display');
    const triangBase = parseFloat(triBaseInput);
    const triangleHeight = parseFloat(triHeightInput);
    const area = 0.5 * triangBase * triangleHeight;
    resultDisplay.innerText = "Area is: "+ area.toFixed(3) + " m2";
});

