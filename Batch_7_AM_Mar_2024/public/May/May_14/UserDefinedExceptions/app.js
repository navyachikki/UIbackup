var userData = {};
var registerUser = () => {
    userData.name = $("#sname").val();
    userData.age = $("#sage").val();
    userData.gender = $("input[name=gender]:checked").val();
    console.log(userData);

    $("#msgBlock").text('User Got registered Succesflyu');
}