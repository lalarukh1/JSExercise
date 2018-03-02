function buildTable() {
    addLineToHTMLTable("Lala","Rukh");
    addLineToHTMLTable("Tim","Lee");
    addLineToHTMLTable("Tata","Industries");
}

function addLineToHTMLTable(firstName, lastName) {
    var tableBody = document.querySelector("#tableContactBody");
    var newRow = tableBody.insertRow();
    var firstNameCell = newRow.insertCell();
    firstNameCell.innerHTML = firstName;
    var lastNameCell = newRow.insertCell();
    lastNameCell.innerHTML = lastName;
}