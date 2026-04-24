/**
 * Minimum Transactions Greedy Algorithm
 * 
 * This algorithm calculates the minimum number of transactions needed
 * to settle all debts between group members.
 * 
 * Time Complexity: O(n²) where n is number of members
 * This is significantly better than naive approach which requires O(n³)
 */

class SettlementCalculator {
    /**
     * Calculate net balance for each member
     * @param {Array} expenses - Array of expense objects
     * @param {Array} members - Array of member names
     * @returns {Object} - Map of member -> net balance
     */
    static calculateBalances(expenses, members) {
        const balances = {};
        
        // Initialize all members with 0 balance
        members.forEach(member => {
            balances[member] = 0;
        });
        
        // Process each expense
        expenses.forEach(expense => {
            const { paidBy, amount, participants, splitType, customShares } = expense;
            
            // Person who paid gets positive balance (money in)
            balances[paidBy] += amount;
            
            let shares = {};
            
            if (splitType === 'equal') {
                // Equal split among participants
                const perPerson = amount / participants.length;
                participants.forEach(participant => {
                    shares[participant] = perPerson;
                });
            } else if (splitType === 'custom' && customShares) {
                // Custom shares provided
                shares = { ...customShares };
            } else if (splitType === 'byShares' && customShares) {
                // Split by shares (e.g., 1:2:3 ratio)
                const totalShares = Object.values(customShares).reduce((a, b) => a + b, 0);
                Object.keys(customShares).forEach(participant => {
                    shares[participant] = (customShares[participant] / totalShares) * amount;
                });
            }
            
            // Subtract each participant's share
            participants.forEach(participant => {
                balances[participant] -= (shares[participant] || 0);
            });
        });
        
        return balances;
    }
    
    /**
     * Calculate minimum transactions using greedy algorithm
     * @param {Object} balances - Member balances
     * @returns {Array} - Array of settlement transactions
     */
    static calculateMinimumTransactions(balances) {
        const transactions = [];
        
        // Create arrays of debtors and creditors
        const debtors = []; // People who owe money (negative balance)
        const creditors = []; // People who are owed money (positive balance)
        
        Object.entries(balances).forEach(([member, balance]) => {
            if (balance < -0.01) { // Negative balance = owes money
                debtors.push({
                    member,
                    amount: Math.abs(balance)
                });
            } else if (balance > 0.01) { // Positive balance = owed money
                creditors.push({
                    member,
                    amount: balance
                });
            }
        });
        
        // Greedy algorithm: match largest debtor with largest creditor
        while (debtors.length > 0 && creditors.length > 0) {
            const debtor = debtors[0];
            const creditor = creditors[0];
            
            // Determine transaction amount (minimum of what debtor owes and creditor is owed)
            const amount = Math.min(debtor.amount, creditor.amount);
            
            // Record the transaction
            transactions.push({
                from: debtor.member,
                to: creditor.member,
                amount: parseFloat(amount.toFixed(2))
            });
            
            // Update balances
            debtor.amount = parseFloat((debtor.amount - amount).toFixed(2));
            creditor.amount = parseFloat((creditor.amount - amount).toFixed(2));
            
            // Remove if fully settled
            if (debtor.amount < 0.01) {
                debtors.shift();
            }
            if (creditor.amount < 0.01) {
                creditors.shift();
            }
        }
        
        return transactions;
    }
    
    /**
     * Calculate settlements for a trip
     * @param {Array} expenses - Array of expense objects
     * @param {Array} members - Array of member names
     * @returns {Object} - Contains balances and transactions
     */
    static calculateSettlements(expenses, members) {
        const balances = this.calculateBalances(expenses, members);
        const transactions = this.calculateMinimumTransactions(balances);
        
        return {
            balances,
            transactions,
            totalExpenses: expenses.reduce((sum, e) => sum + e.amount, 0),
            transactionCount: transactions.length
        };
    }
    
    /**
     * Get settlement status for a specific member
     * @param {string} member - Member name
     * @param {Object} balances - Member balances
     * @returns {Object} - Status object
     */
    static getMemberStatus(member, balances) {
        const balance = balances[member] || 0;
        
        if (Math.abs(balance) < 0.01) {
            return {
                status: 'settled',
                amount: 0,
                message: `${member} is settled`
            };
        } else if (balance < 0) {
            return {
                status: 'owes',
                amount: Math.abs(balance),
                message: `${member} owes ₹${Math.abs(balance).toFixed(2)}`
            };
        } else {
            return {
                status: 'owed',
                amount: balance,
                message: `${member} is owed ₹${balance.toFixed(2)}`
            };
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SettlementCalculator;
}
