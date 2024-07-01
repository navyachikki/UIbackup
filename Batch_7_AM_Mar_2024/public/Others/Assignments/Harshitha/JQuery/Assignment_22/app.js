function addDataToTable(name,age,gender,country,mail,actions){
    var table= $("#registration-table");
    if ($('#registration-table').length === 0) {
        $('body').append('<table id="registration-table"></table>')
        
        //adding row header values
        var headerRow = $("<tr>");
        headerRow.append('<th>Name</th>');
        headerRow.append('<th>Age</th>');
        headerRow.append('<th>Gender</th>')
        headerRow.append('<th>Country</th>');   
        headerRow.append('<th>Email</th>');
        headerRow.append('<th>Actions</th>')
        table.append(headerRow);
    }
    //add data to row
    var dataRow = $('<tr>');
    dataRow.append('<td>'+name+'</td>');
    dataRow.append('<td>'+age+'</td>');
    dataRow.append('<td>'+gender+'</td>');
    dataRow.append('<td>'+country+'</td>');
    dataRow.append('<td>'+mail+'</td>');
    dataRow.append('<td><button class="edit-btn">Edit</button> <button class="del-btn">Delete</button></td>');
        
    
    table.append(dataRow);
}
//Data submit
$(document).ready(function(){
    $('#registration-form').on('submit',function(event){
        event.preventDefault();
//Get from data
var name=$('#name').val();
var age=$('#age').val();
var gender=$('#gender').val();
var country=$('#country').val();
var mail=$('#mail').val();


//add data to table
addDataToTable(name,age,gender,country,mail);

// Clear form data
$('#registration-form')[0].reset();

})
})

//Edit button click handler
$(document).on("click",'.edit-btn',function(){
    console.log('edit')
    var row= $(this).closest('tr');
    $('name').val(row.find('td:eq(0)').text());
    $("age").val(row.find('td:eq(1)').text());
    $("gender").val(row.find('td:eq(2)').text())
    $("country").val(row.find('td:eq(3)').text());
    $("mail").val(row.find('td:eq(4)').text());
    // row.remove()
});

//Delete button click handler
$(document).on('click','del-btn',function(){
    $(this).closest('tr').remove();
})
