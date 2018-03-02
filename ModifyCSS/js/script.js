var divElem;

function init(){
    console.log("page loaded and DOM is ready!");
    divElem = document.querySelector("#theDiv");
}

function changeStyle() {
    console.log("adding different css");
    divElem.style.border = "5px solid blue";
    divElem.style.padding = "50px";
    divElem.style.backgroundColor = "cyan";
}