document.getElementById('captureButton').addEventListener('click', async () => {
    const resultBox = document.getElementById('result');
    resultBox.textContent = "⏳ Capturing and analyzing...";

    try {
        const response = await fetch('https://antropy-api.onrender.com/generate');
        const data = await response.json();

        if (data.error) {
            resultBox.textContent = `❌ Error: ${data.error}`;
            return;
        }

        resultBox.innerHTML = `
            <strong>Binary:</strong><br><code>${data.binary}</code><br><br>
            <strong>SHA-256 Hash:</strong><br><code>${data.hash}</code><br><br>
            <strong>Shannon Entropy:</strong> ${data.entropy}
        `;
    } catch (err) {
        resultBox.textContent = "❌ Failed to connect to backend.";
    }
});
