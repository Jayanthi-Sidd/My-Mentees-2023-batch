/**
 * UPI Integration Module
 * Handles deep linking to UPI payment apps (GPay, PhonePe, etc)
 */

class UPIHandler {
    /**
     * Generate UPI deep link
     * Format: upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&tn=NOTE&tr=TRANSACTION_REF
     */
    static generateUPILink(fromName, toUPI, toName, amount, description = '') {
        try {
            // Validate UPI ID format (basic validation)
            if (!this.isValidUPI(toUPI)) {
                return null;
            }
            
            // URL encode parameters
            const pa = encodeURIComponent(toUPI);
            const pn = encodeURIComponent(toName || 'SplitSmart');
            const am = parseFloat(amount).toFixed(2);
            const tn = encodeURIComponent(`${fromName} to ${toName}${description ? ' - ' + description : ''}`);
            const tr = this.generateTransactionRef();
            
            // Construct UPI link
            return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&tn=${tn}&tr=${tr}`;
        } catch (error) {
            console.error('Error generating UPI link:', error);
            return null;
        }
    }
    
    /**
     * Validate UPI ID format
     * Valid formats: user@bankname, 9999999999@upi, etc
     */
    static isValidUPI(upi) {
        const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
        return upiRegex.test(upi);
    }
    
    /**
     * Generate unique transaction reference
     */
    static generateTransactionRef() {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(7);
        return `SS${timestamp}${random}`.substring(0, 14);
    }
    
    /**
     * Open UPI payment
     */
    static openUPI(upiLink) {
        if (!upiLink) {
            console.error('Invalid UPI link');
            return false;
        }
        
        try {
            // Try to open the UPI link
            window.location.href = upiLink;
            return true;
        } catch (error) {
            console.error('Error opening UPI:', error);
            return false;
        }
    }
    
    /**
     * Get UPI app options for fallback
     */
    static getUPIApps() {
        return [
            {
                name: 'Google Pay',
                id: 'gpay',
                url: 'com.google.android.apps.nbu.paisa.user'
            },
            {
                name: 'PhonePe',
                id: 'phonepe',
                url: 'com.phonepe.app'
            },
            {
                name: 'BHIM',
                id: 'bhim',
                url: 'in.org.npci.upiapp'
            },
            {
                name: 'Paytm',
                id: 'paytm',
                url: 'net.one97.paytm'
            }
        ];
    }
    
    /**
     * Show UPI payment modal with options
     */
    static showPaymentOptions(fromName, toName, toUPI, amount) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'upi-modal';
        
        const upiLink = this.generateUPILink(fromName, toUPI, toName, amount, 'Settlement');
        
        const apps = this.getUPIApps();
        
        let appsHTML = apps.map(app => `
            <button class="btn btn-secondary btn-block" onclick="UPIHandler.openUPI('${upiLink}')">
                <span>${app.name}</span>
                <span>→</span>
            </button>
        `).join('');
        
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="document.getElementById('upi-modal').remove()">×</button>
                <div class="modal-header">${t('upiPay')}</div>
                
                <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <p style="margin: 5px 0; font-size: 12px; color: #666;">
                        ${fromName} sending ₹${parseFloat(amount).toFixed(2)} to ${toName}
                    </p>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <p style="font-size: 12px; color: #999; margin-bottom: 10px;">UPI: ${toUPI}</p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${appsHTML}
                </div>
                
                <p style="font-size: 11px; color: #999; margin-top: 15px; text-align: center;">
                    Select your UPI app to complete payment
                </p>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UPIHandler;
}
