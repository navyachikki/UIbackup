document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('btn');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Login Successful");

        const loginName = document.getElementById("uname").value;
        const loginPassword = document.getElementById("passInput").value;

        // Retrieve stored data
        const userData = JSON.parse(localStorage.getItem("accountDetails"));
        console.log("Retrieved stored values", userData);

        const nameErr = document.querySelector(".nameErr");
        const passErr = document.querySelector(".passErr");

        // Validating Inputs
        const validations = [
            { input: loginName, errorElement: nameErr },
            { input: loginPassword, errorElement: passErr }
        ];

        let valid = true;
        validations.forEach(({ input, errorElement }) => {
            if (!input) {
                errorElement.style.display = "block";
                valid = false;
            } else {
                errorElement.style.display = "none";
            }
        });

        // Checking validations
        if (valid) {
            if (userData && userData.FullName === loginName && userData.password === loginPassword) {
                alert("Login successful!");
                window.location.href = 'index.html';
                
            } else {
                alert("Invalid username or password");
            }
        }
    });
});
