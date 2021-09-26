const sides = document.querySelectorAll(".side-input");
const hypotenusBtn = document.querySelector("#hypotenus-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumSquare = a**2 + b**2;
    return sumSquare
}

function calculateHypotenuse(){
    const sumOfSqures = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));    
    const lengthOfHypotenuse = Math.sqrt(sumOfSqures)
    output.innerHTML = "length of hypotenuse  "+ lengthOfHypotenuse;

}

hypotenusBtn.addEventListener("click",calculateHypotenuse)