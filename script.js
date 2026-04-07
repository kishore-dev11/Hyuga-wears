// Pop-Up bar

var closepopup = document.getElementById("closepopup")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    closepopup.remove("closepopup")
})
// Get all Order Now buttons (works for multiple cards)
document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('button');

    // Function to create popup
    const createPopup = () => {
        const popup = document.createElement('div');
        popup.id = 'order-popup';
        popup.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-11/12 relative border-4 border-blue-400 animate-pulse">
                <button id="close-popup" class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 transition-all duration-200">
                    ×
                </button>
                <div class="text-center">
                    <div class="w-20 h-20 bg-sky-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <svg class="w-12 h-12 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Your order is ready! 🎉</h2>
                    <p class="text-gray-600 mb-6">Thank you for your purchase. We'll prepare your order shortly.</p>
                </div>
            </div>
        `;
        return popup;
    };

    // Function to create overlay - LIGHT GREY OPACITY
    const createOverlay = () => {
        const overlay = document.createElement('div');
        overlay.id = 'order-overlay';
        overlay.className = 'fixed inset-0 bg-gray-100 bg-opacity-100 backdrop-blur-sm z-50 flex items-center justify-center p-4';
        return overlay;
    };

    // Handle button clicks
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Create overlay and popup
            const overlay = createOverlay();
            const popup = createPopup();
            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            // Close on overlay click
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });

            // Close on X button click
            const closeBtn = document.getElementById('close-popup');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });

            // Auto close after 4 seconds
            setTimeout(() => {
                if (overlay.parentNode) {
                    document.body.removeChild(overlay);
                }
            }, 4000);
        });
    });
});
