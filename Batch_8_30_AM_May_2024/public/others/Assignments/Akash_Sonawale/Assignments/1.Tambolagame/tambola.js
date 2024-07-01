let AddCircle = () => {
    let container = document.getElementById("CircleContainer");

    for (let i = 1; i <= 90; i++) {
        let circle = document.createElement("div");
        circle.className = "CircleContainer";
        circle.textContent = i;
        container.appendChild(circle);
    }
};

AddCircle();
