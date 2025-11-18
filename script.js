document.addEventListener('DOMContentLoaded', () => {
    // Select the button using the class name
    const ctaButton = document.querySelector('.cta-button');
    if (!ctaButton) return;

    // Add event listener to track mouse movement over the button
    ctaButton.addEventListener('mousemove', (e) => {
        // Get the button's position and dimensions
        const rect = ctaButton.getBoundingClientRect();
        
        // Calculate mouse position relative to the top-left corner of the button
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  

        // Set the custom CSS variables for the inner glow effect
        ctaButton.style.setProperty('--mouseX', `${x}px`);
        ctaButton.style.setProperty('--mouseY', `${y}px`);
    });
});