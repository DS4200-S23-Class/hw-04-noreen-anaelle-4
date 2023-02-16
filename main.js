//  CIRCLE FUNCTIONALITIES //
// create an event listener for all circles
let circles = document.getElementsByClassName("circle"); 
for(let i = 0; i<circles.length; i++){
    circles[i].addEventListener("click", onClick(circles[i]));
}

function onClick(circle){
    console.log("on click ran")
    displayCoords(circle);
}

// when click display coordinates of last clicked circle and outline it
function displayCoords(circle){
    if (circle.style.stroke == "black"){
        circle.style.removeProperty("stroke");
    }
    else{
        circle.style.setProperty("stroke", "black");
    }
    
    let point = circle.getAttribute('id');
    document.getElementById("coordinates").innerHTML = point;
    console.log("displayCoords ran");
}
//     ADDING NEW POINTS //

// gets input x and y and converts them to cx and cy and converts them to 
function getCoords(){
    let x = document.getElementById("xRange").value;
    let y = document.getElementById("yRange").value;
    let plotx = (50*x) +5;
    let ploty = 495 - (50*y);
    document.querySelector('circle').insertAdjacentHTML('beforeend', addPoint(cx,cy));
    console.log("getCoords ran");
}
// adds HTML of a new circle
function addPoint(cx,cy){
    console.log("add point ran");
        return `<circle id= "(${x}, ${y})" cx=${cx} cy=${cy} r="5" onclick="onClick()" />`;      
}

// Set color back when mouse out
// function onClick(){
//     let circles = document.getElementsByClassName("circle")
//     console.log(circles)
//     console.log(circles[1])

// }
//function addPoint(){}
// let xs = document.getElementById('xvalues')

// console.log(xs.value);