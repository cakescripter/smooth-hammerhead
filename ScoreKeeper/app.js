const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");

const p1Span = document.querySelector("#p1Score");
const p2Span = document.querySelector("#p2Score");

let p1Score = 0;
let p2Score = 0;

let WinningScore = 5;
let isGameOver = false;

const resetBtn = document.querySelector("#resetButton");
const WinningScoreSelect = document.querySelector("#playto");

p1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        if (p1Score !== WinningScore) {
            p1Score += 1;
            if (p1Score === WinningScore) {
                p1Span.classList.add("has-text-success");
                p2Span.classList.add("has-text-danger");
                isGameOver = true;
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
            p1Span.textContent = p1Score;
        }
    }
});

p2Btn.addEventListener("click", function () {
    if (!isGameOver) {
        if (p2Score !== WinningScore) {
            p2Score += 1;
            if (p2Score === WinningScore) {
                p2Span.classList.add("has-text-success");
                p1Span.classList.add("has-text-danger");
                isGameOver = true;
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
            p2Span.textContent = p2Score;
        }
    }
});

WinningScoreSelect.addEventListener('change', function () {
    WinningScore = parseInt(this.value);
    resetDisplay();

})

resetBtn.addEventListener("click", resetDisplay)

function resetDisplay() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    p1Span.classList.remove("has-text-success", "has-text-danger");
    p2Span.classList.remove("has-text-success", "has-text-danger");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}