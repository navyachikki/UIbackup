
let AddCircle = () => {
    let container = document.getElementById("CircleContainer");
    let getRandomValue = () => {
        return Math.floor(Math.random() * 90) + 1;
    };

    for (let i = 1; i <= 90; i++) {
        let circle = document.createElement("div");
        circle.className = "circle";
        circle.textContent = i;
        container.appendChild(circle);
    }

    let button = document.createElement("button");
    button.innerText = "Try your luck";
    
    button.addEventListener('click', function() {
        let randomNumber = getRandomValue();
        document.getElementById("LuckyNumberDisplay").innerText = `Your lucky number is: ${randomNumber}`;
        
        document.querySelectorAll('.circle').forEach(circle => {
            circle.classList.remove('highlight');
        });

        document.querySelector(`.circle:nth-child(${randomNumber})`).classList.add('highlight');
    });

    container.appendChild(button);

    let luckyNumberDisplay = document.createElement("div");
    luckyNumberDisplay.id = "LuckyNumberDisplay";
    luckyNumberDisplay.style.marginTop = "20px";
    luckyNumberDisplay.style.fontSize = "20px";
    luckyNumberDisplay.style.fontWeight = "bold";
    luckyNumberDisplay.style.textAlign = "center";
    container.appendChild(luckyNumberDisplay);
};

AddCircle();