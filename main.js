// Get circle div

// create an event listener for all circles
let circles = document.getElementsByClassName("circle"); 
console.log(circles[0].getAttribute('id'))
for(let i = 0; i<circles.length; i){
    circles[i].addEventListener("click", displayCoords(circles[i]));
}

// when click display coordinates of last clicked circle and outline them
function displayCoords(circle){
    if (circle.style.stroke == "black"){
        circle.style.removeProperty("stroke")
    }
    else{
        circle.style.setProperty("stroke", "black");
    }
    
    let point = circle.getAttribute('id')
    document.getElementById("coordinates").innerHTML = point}

function coordCalc(){

}

// Set color back when mouse out
function onClick(){
    let circles = document.getElementsByClassName("circle")
    console.log(circles)
    console.log(circles[1])

}
//function addPoint(){}
let xs = document.getElementById('xvalues')

console.log(xs.value);