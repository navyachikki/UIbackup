document.getElementById('register').addEventListener('click', function() {
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const location = document.getElementById('location').value;

    if (studentName && age && gender && location) {
        addStudentToTable(studentName, age, gender, location);
        clearForm();
    } else {
        alert('Please fill all fields');
    }
});

function addStudentToTable(studentName, age, gender, location) {
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = studentName;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = location;

    const actionCell = newRow.insertCell(4);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => newRow.remove());
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => editStudent(newRow, studentName, age, gender, location));

    actionCell.appendChild(deleteButton);
    actionCell.appendChild(editButton);
    actionCell.classList.add('action-buttons');
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('age').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('location').value = '';
}

function editStudent(row, studentName, age, gender, location) {
    document.getElementById('studentName').value = studentName;
    document.getElementById('age').value = age;
    document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
    document.getElementById('location').value = location;

    row.remove();
}
