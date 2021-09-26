const inputs = document.querySelectorAll(".area-of-triangle");

const submitBtn = document.querySelector("#area-submit-btn");

const output = document.querySelector("#output");

function sumArea(a,b){
    const sumOfArea = a*b;
    return sumOfArea;
    
}


function calculateArea(){
    const sumOfArea = sumArea(Number(inputs[0].value),Number(inputs[1].value));
    const areaOfTriangle = 1/2*(sumOfArea);
    output.innerHTML = "Area Of the Triangle is "+ areaOfTriangle +"cm";
   
}


submitBtn.addEventListener('click',calculateArea)