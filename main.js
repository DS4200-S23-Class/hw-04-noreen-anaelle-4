// Get circle div

// Set color back when mouse out
function onClick(){
    let circles = document.getElementById("circle")
    console.log(circles)
    if (circles.style.stroke == "black"){
        circles.style.removeProperty("stroke")
    }
    else{
        circles.style.setProperty("stroke", "black");
    }
}