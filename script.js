const colors = ["red", "blue", "purple", "orange", "indigo", "green",  "cyan", "maroon", "yellow", "teal", ];
        let score = 0;
        let targetColor = "";
        
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    
    const buttons = document.querySelectorAll(".colorOption");
    buttons.forEach((btn, index) => {
    btn.style.backgroundColor = colors[index];
            btn.onclick = function () {
                if (colors[index] === targetColor) {
                    document.getElementById("gameStatus").textContent = "Correct! 🎉";
                    score++;
                    
                } else {
                    document.getElementById("gameStatus").textContent = "Wrong! Try again.";
                }
                document.getElementById("score").textContent = score;
            };
        });
    }
        
    document.getElementById("newGameButton").addEventListener("click", startGame);
    startGame();