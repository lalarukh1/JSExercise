var field, theDiv;

function init() {
    console.log("page loaded, DOM is ready");
    field = document.querySelector("#inputField");
    theDiv = document.querySelector("#theDiv");
}

function showWhatWeTyped(){
    theDiv.innerHTML = field.value;
}