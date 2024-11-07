// JavaScript for handling quiz logic with animated feedback

function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
        button.textContent = "✅ Correct!";
    } else {
        button.classList.add("incorrect");
        button.textContent = "❌ Incorrect, try again!";
    }

    // Disable other buttons in the same question
    const buttons = button.parentNode.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
}
