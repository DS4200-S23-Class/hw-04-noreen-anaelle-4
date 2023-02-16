//  CIRCLE FUNCTIONALITIES //
// When a point is added, collect necessarry parameters to add functional points
// gets input x and y and converts them to cx and cy and converts them to x and y

let circles = document.querySelectorAll('.circle');
console.log(circles)

function getCoords(){
    let x = document.getElementById("xRange").value;
    let y = document.getElementById("yRange").value;
    let plotx = (50*x) +5;
    let ploty = 495 - (50*y);
    document.querySelector('svg').insertAdjacentHTML('beforeend', addPoint(x, y, plotx, ploty));
    circles = document.querySelectorAll('.circle');
    console.log(circles)
    console.log("getCoords ran");
}

//     ADDING NEW POINTS //
// adds HTML of a new circle
function addPoint(x,y,cx,cy){
    console.log("add point ran");
    console.log(cx, cy, x,y)
        return `<circle class="circle" id="(${x},${y})" cx="${cx}" cy="${cy}" r="5" />`;      
}

// For all items with class circle, add an event listener that checks for clicks, and performs functions on 
// a click
console.log(circles + "Old")
circles = document.querySelectorAll('.circle');
console.log(circles + "New Circles")

circles.forEach(circle => {
    circle.addEventListener('click',
    function handleClick(event){
        console.log("circle clicked");
        // add stroke to circle conditional on if it has one already
        if (circle.style.stroke == "black"){
            circle.style.removeProperty("stroke");
        }
        else{
            circle.setAttribute('style','stroke: black; stroke-width:3px');
        }
        // add to page the last circle clicked
        document.getElementById("coordinates").innerHTML = circle.id;
    });
}
)

/* When we create a point for some reason, it will have the functionality of the hover color change but 
not the outline. However, we identified the source of the issue. The new circles are not assigned eventListeners,
 as that only occurs in the beginning with the original points. We could not figure out how to
  implement eventListeners to the new circles without triggering it for all of the old circles.  */

