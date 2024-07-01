const createCircle = () => {
    const container = document.getElementById("circleContainer");
    let row;

    for (let i = 1; i <= 90; i++) {
        if (i % 10 === 1) {
            row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
        }
        const circle = document.createElement("div");
        circle.className = "circleContainer";
        circle.textContent = i;
        row.appendChild(circle);
    }
};
createCircle();