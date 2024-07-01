function readUserDetail() {
   
    const name = document.getElementById('uName').value;
    const age = document.getElementById('uAge').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const location = document.getElementById('uLocation').value;

    if (name === '' || age === '' || location === '') {
        alert('Please fill out all fields');
        return;
    }

    const table = document.getElementById('userTable');
    table.style.display = 'block';

  
    const tbody = document.getElementById('userDetails');
    const row = tbody.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = gender;
    row.insertCell(3).textContent = location;


    const actionsCell = row.insertCell(4);
    actionsCell.innerHTML = `<input type="button" value="Edit" onclick="editUserDetail(this)">
                             <input type="button" value="Delete" onclick="deleteUserDetail(this)">`;
    document.getElementById('uName').value = '';
    document.getElementById('uAge').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('uLocation').value = '';
}

function editUserDetail(button) {

    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');


    document.getElementById('uName').value = cells[0].textContent;
    document.getElementById('uAge').value = cells[1].textContent;
    document.querySelector(`input[name="gender"][value="${cells[2].textContent}"]`).checked = true;
    document.getElementById('uLocation').value = cells[3].textContent;


    row.parentNode.removeChild(row);
}

function deleteUserDetail(button) {

    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
