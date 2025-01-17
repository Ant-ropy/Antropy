function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}





document.getElementById('captureButton').addEventListener('click', async () => {
    const video = document.getElementById('liveStream');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas image to Base64
    const frameData = canvas.toDataURL('image/png');

    // Send Base64 frame data to backend
    const response = await fetch('https://your-backend-url/capture-frame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frameData }),
    });

    if (response.ok) {
        const result = await response.json();
        alert(`Hash captured: ${result.hash}`);
    } else {
        alert('Failed to capture hash. Try again.');
    }
});