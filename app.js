const inputs = document.querySelectorAll(".angle-input");


const isTriangleBtn = document.querySelector("#is-triangle-btn");

const output = document.querySelector("#output");

function calculateSumOfTriangle(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTraingle(){
    const sumOfAngles = calculateSumOfTriangle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles ==180){
      
        output.innerHTML = "Yay,Angles Form A Triangle";
    }else{
        
        output.innerHTML = "oh oh,Angles does not form a traingle";
    }  
}

isTriangleBtn.addEventListener('click',isTraingle)