document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Sending...';

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString(),
        });

        if (response.ok) {
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.style.color = 'green';
            form.reset();
        } else {
            throw new Error('Failed to send message.');
        }
    } catch (error) {
        statusDiv.textContent = 'An error occurred. Please try again later.';
        statusDiv.style.color = 'red';
        console.error('Error:', error);
    }
});
