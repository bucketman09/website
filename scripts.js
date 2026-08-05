console.log("scripts loaded");

const dragElements = document.querySelectorAll(".draggable"); 

function onMouseDrag(event, element) {
    console.log("click!")
    let leftValue = parseInt(window.getComputedStyle(element).left);
    let topValue = parseInt(window.getComputedStyle(element).top);
    element.style.left = `${leftValue + event.movementX}px`;
    element.style.top = `${topValue + event.movementY}px`;
}

dragElements.forEach((element) => {
    element.addEventListener("mousedown", (e) => {
        const onMove = (event) => onMouseDrag(event, element); 

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMove);
        }, { once: true });
    });
});

dragElements.forEach((element) => {
    element.addEventListener("touchstart", (e) => {
        const onMove = (event) => onMouseDrag(event, element); 

        document.addEventListener("touchmove", onMove);
        document.addEventListener("touchend", () => {
            document.removeEventListener("touchmove", onMove);
        }, { once: true });
    });
});


function place_elems(){
    var x = console.log(localStorage.getItem("x"))
    var y = console.log(localStorage.getItem("y"))
    document.getElementById("note").style.left = x;
    document.getElementById("note").style.top = y;
    
}