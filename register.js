function uptodate() {
    var name1 = document.getElementById("name").value;
    var age1 = document.getElementById("age").value;
    var course1 = document.getElementById("course").value;
    var mail = document.getElementById("email").value;

    var genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (
        name1 === "" ||
        age1 === "" ||
        course1 === "select" ||
        mail === "" ||
        !genderElement
    ) {
        alert("Please fill in all fields!");
        return;
    }

    var gender = genderElement.value;

    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1);

    row.insertCell(0).textContent = name1;
    row.insertCell(1).textContent = age1;
    row.insertCell(2).textContent = course1;
    row.insertCell(3).textContent = gender;
    row.insertCell(4).textContent = mail;

    var actionCell = row.insertCell(5);
    var deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.onclick = function () {
        table.deleteRow(row.rowIndex);
    };

    actionCell.appendChild(deleteButton);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").selectedIndex = 0;
    document.getElementById("email").value = "";

    document.querySelectorAll('input[name="gender"]').forEach(
        function (radio) {
            radio.checked = false;
        }
    );
}

