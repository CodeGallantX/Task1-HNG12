const colors = ["red", "blue", "purple", "orange", "indigo", "green", "cyan", "maroon", "yellow", "teal"];
let score = 0;
let targetColor = "";

function startGame(resetScore = false) {
    if (resetScore) {
        score = 0;
        document.getElementById("score").textContent = score;
    }

    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";

    const colorOptionsContainer = document.getElementById("colorOptions");
    colorOptionsContainer.innerHTML = "";
    
    let shuffledColors = [...colors].sort(() => 0.5 - Math.random()).slice(0, 6);
    shuffledColors.forEach(color => {
        let btn = document.createElement("button");
        btn.classList.add("colorOption");
        btn.style.backgroundColor = color;
        btn.setAttribute("data-testid", "colorOption");
        
        btn.onclick = function () {
            if (color === targetColor) {
                document.getElementById("gameStatus").textContent = "Correct! 🎉";
                score++;
                document.getElementById("score").textContent = score;
                setTimeout(startGame, 1000);
            } else {
                document.getElementById("gameStatus").textContent = "Wrong! Try again.";
            }
        };
        
        colorOptionsContainer.appendChild(btn);
    });
}

document.getElementById("newGameButton").addEventListener("click", () => startGame(true));
startGame();