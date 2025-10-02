const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
    cursor.setAttribute("style", "left: " + event.pageX + "px; top: " + event.pageY + "px;");
    console.log(event);
});