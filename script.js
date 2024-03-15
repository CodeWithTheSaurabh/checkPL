function checkPL() {
    const input = document.getElementById('input').value.trim();
    const resultDiv = document.getElementById('result');

    if (input.length !== 8 || !/^\d{8}$/.test(input)) {
        resultDiv.textContent = "Invalid input length. Please provide 8 digits.";
        return;
    }

    let total = 0;
    for (let i = 0; i < 7; i++) {
        const digit = parseInt(input.charAt(i));
        total += (8 - i) * digit;
    }

    const a8 = parseInt(input.charAt(7));
    const div = total % 11;

    const result = div === a8 ? "It is PL." : "It is not PL.";
    resultDiv.textContent = result;
    resultDiv.className = div === a8 ? "pl" : "not-pl";
}




