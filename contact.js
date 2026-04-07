// Create Success Popup - Pure JS
function createSuccessPopup(message = "Request is submitted!") {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); z-index: 8999;
        display: flex; justify-content: center; align-items: center;
    `;

    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white; padding: 25px; border-radius: 12px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        text-align: center; max-width: 320px; width: 90%;
        transform: translateY(-20px); opacity: 0;
        transition: all 0.3s ease;
    `;

    // Add animation on show
    setTimeout(() => {
        popup.style.transform = 'translateY(0)';
        popup.style.opacity = '1';
    }, 10);

    // Popup content
    popup.innerHTML = `
        <div style="font-size: 32px; margin-bottom: 15px;">✅</div>
        <h3 style="color: #28a745; margin: 0 0 10px 0; font-size: 20px;">Success!</h3>
        <p style="margin: 0 0 25px 0; color: #666; font-size: 16px;">${message}</p>
        <button id="closePopup" style="
            background: #28a745; color: white; border: none;
            padding: 12px 24px; border-radius: 6px; cursor: pointer;
            font-size: 14px; font-weight: 500;
        ">OK</button>
    `;

    // Close functionality
    const closeBtn = popup.querySelector('#closePopup');
    closeBtn.onclick = () => removePopup(overlay);

    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) removePopup(overlay);
    };

    // ESC key close
    document.onkeydown = (e) => {
        if (e.key === 'Escape') removePopup(overlay);
    };

    // Append to body
    document.body.appendChild(overlay);
    overlay.appendChild(popup);

    // Focus close button for accessibility
    closeBtn.focus();
}

// Remove popup with animation
function removePopup(overlay) {
    const popup = overlay.querySelector('div');
    popup.style.transform = 'translateY(-20px)';
    popup.style.opacity = '0';

    setTimeout(() => {
        document.body.removeChild(overlay);
        document.onkeydown = null;
    }, 300);
}

// Usage Examples:
createSuccessPopup(); // Default message

