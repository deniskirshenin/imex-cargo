import {trackShipment} from './track-shipment';
const trackButton = document.querySelector('#track-button');
const trackingCodeInput = document.querySelector('#tracking-code');
const trackingResult = document.querySelector('#tracking-result');

const initializeTracking = () => {
    trackButton.addEventListener('click', async () => {
        const trackingCode = trackingCodeInput.value;
        trackingResult.style.display = 'flex';

        trackingResult.innerHTML = 'Looking for your shipment...';
        try {
            const trackingData = await trackShipment(trackingCode);
            if (trackingCode !== "") {
                trackingResult.innerHTML = `
                <h2>Tracking Details</h2>
                <p><strong>Tracking Code:</strong> ${trackingData.trackingCode}</p>
                <p><strong>Shipment Status:</strong> ${trackingData.shipmentStatus}</p>
                <p><strong>Estimated Delivery Date:</strong> ${trackingData.estimatedDeliveryDate}</p>
                <!-- Include other relevant information here -->
            `;
            } else {
                trackingResult.innerHTML = `Please enter your tracking number`;
            }
            
            
        } catch (error) {
            console.error('Error tracking shipment:', error);
            trackingResult.innerHTML = 'An error occurred while tracking the shipment.';
        }
    });
};

export {initializeTracking};