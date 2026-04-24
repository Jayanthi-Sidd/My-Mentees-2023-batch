// ============ APP STATE ============
const AppState = {
    onboarded: false,
    currentTrip: null,
    members: [],
    expenses: [],
    settlements: [],
    balances: {}
};

// ============ LOCAL STORAGE ============
function saveState() {
    localStorage.setItem('splitsmartState', JSON.stringify(AppState));
}

function loadState() {
    const saved = localStorage.getItem('splitsmartState');
    if (saved) {
        const loaded = JSON.parse(saved);
        Object.assign(AppState, loaded);
    }
}

// ============ SETTLEMENTS ============
function calculateSettlements() {
    if (AppState.members.length === 0) {
        AppState.settlements = [];
        return;
    }
    const balances = {};
    AppState.members.forEach(m => balances[m] = 0);
    AppState.expenses.forEach(exp => {
        const share = exp.amount / exp.participants.length;
        exp.participants.forEach(p => {
            balances[p] -= share;
        });
        balances[exp.paidBy] += exp.amount;
    });
    AppState.balances = balances;

    const pos = [], neg = [];
    Object.entries(balances).forEach(([name, bal]) => {
        if (bal > 0.01) pos.push({ name, amount: bal });
        else if (bal < -0.01) neg.push({ name, amount: -bal });
    });
    pos.sort((a, b) => b.amount - a.amount);
    neg.sort((a, b) => b.amount - a.amount);

    const txns = [];
    let i = 0, j = 0;
    while (i < pos.length && j < neg.length) {
        const settle = Math.min(pos[i].amount, neg[j].amount);
        txns.push({ from: neg[j].name, to: pos[i].name, amount: Math.round(settle) });
        pos[i].amount -= settle;
        neg[j].amount -= settle;
        if (pos[i].amount < 0.01) i++;
        if (neg[j].amount < 0.01) j++;
    }
    AppState.settlements = txns;
}

// ============ ONBOARDING ============
function renderOnboarding() {
    return `
        <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px">
            <div style="background:white;border-radius:16px;padding:32px;max-width:400px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,0.15)">
                <div style="font-size:56px;text-align:center;margin-bottom:12px">💸</div>
                <h2 style="color:#FF6B6B;margin-bottom:4px;font-size:24px;text-align:center">SplitSmart</h2>
                <p style="color:#636e72;margin-bottom:24px;text-align:center">நண்பர்களுடன் செலவு பகிரலாம்!</p>

                <div class="form-group">
                    <label>உங்கள் பெயர் *</label>
                    <input type="text" id="onboardName" placeholder="eg: Ragu"
                           onkeypress="if(event.key==='Enter') completeOnboarding()">
                </div>
                <div class="form-group">
                    <label>Trip பெயர்</label>
                    <input type="text" id="onboardTrip" placeholder="eg: Ooty Trip 🏔️"
                           onkeypress="if(event.key==='Enter') completeOnboarding()">
                </div>
                <div class="form-group">
                    <label>ஆரம்ப தொகை ₹ (optional)</label>
                    <input type="number" id="onboardAmt" placeholder="Trip budget எவ்வளவு?">
                </div>

                <button class="btn btn-primary" onclick="completeOnboarding()"
                        style="width:100%;padding:14px;font-size:16px;margin-top:8px">
                    🚀 தொடங்கலாம்!
                </button>
            </div>
        </div>
    `;
}

function completeOnboarding() {
    const name = document.getElementById('onboardName').value.trim();
    if (!name) { showMessage('பெயர் உள்ளிடவும்!', 'error'); return; }

    const tripName = document.getElementById('onboardTrip').value.trim() || 'My Trip 🌟';
    const amt = parseFloat(document.getElementById('onboardAmt').value) || 0;

    AppState.onboarded = true;
    AppState.members = [name];
    AppState.currentTrip = { id: Date.now(), name: tripName };
    AppState.expenses = [];

    if (amt > 0) {
        AppState.expenses.push({
            id: 'init_' + Date.now(),
            description: 'ஆரம்ப தொகை',
            amount: amt,
            category: 'Other',
            paidBy: name,
            splitType: 'equal',
            participants: [name],
            customShares: {},
            date: new Date().toISOString().split('T')[0]
        });
    }

    calculateSettlements();
    saveState();
    renderApp();
}

// ============ MEMBERS ============
function addMember() {
    const input = document.getElementById('memberNameInput');
    const name = input.value.trim();
    if (!name) { showMessage('பெயர் உள்ளிடவும்!', 'error'); return; }
    if (AppState.members.includes(name)) { showMessage('Already exists!', 'error'); return; }
    AppState.members.push(name);
    input.value = '';
    calculateSettlements();
    saveState();
    renderApp();
    showMessage(name + ' சேர்க்கப்பட்டார்! 🎉', 'success');
}

function removeMember(name) {
    if (confirm('Remove ' + name + '?')) {
        AppState.members = AppState.members.filter(m => m !== name);
        AppState.expenses = AppState.expenses.map(exp => ({
            ...exp,
            participants: exp.participants.filter(p => p !== name)
        }));
        calculateSettlements();
        saveState();
        renderApp();
    }
}

// ============ EXPENSES ============
function addExpense() {
    const desc = document.getElementById('expenseDesc').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;
    const paidBy = document.getElementById('expensePaidBy').value;
    const participants = Array.from(document.querySelectorAll('input[name="participants"]:checked')).map(el => el.value);

    if (!desc || !amount || !paidBy) { showMessage('எல்லாம் fill பண்ணுங்க!', 'error'); return; }
    if (participants.length === 0) { showMessage('யாருக்கு split?', 'error'); return; }

    AppState.expenses.push({
        id: Date.now().toString(),
        description: desc,
        amount,
        category,
        paidBy,
        splitType: 'equal',
        participants,
        customShares: {},
        date: new Date().toISOString().split('T')[0]
    });

    document.getElementById('expenseDesc').value = '';
    document.getElementById('expenseAmount').value = '';
    calculateSettlements();
    saveState();
    renderApp();
    showMessage('Expense சேர்க்கப்பட்டது! ✅', 'success');
}

function deleteExpense(id) {
    if (confirm('Delete?')) {
        AppState.expenses = AppState.expenses.filter(e => e.id !== id);
        calculateSettlements();
        saveState();
        renderApp();
    }
}

// ============ SETTLEMENTS ============
function markAsPaid(idx) {
    if (!AppState.paidTransactions) AppState.paidTransactions = [];
    AppState.paidTransactions.push({ ...AppState.settlements[idx], date: new Date().toISOString() });
    AppState.settlements.splice(idx, 1);
    saveState();
    renderApp();
    showMessage('Settled! ✅', 'success');
}

function openUPI(from, to, amount) {
    const upi = `upi://pay?pa=example@upi&pn=${encodeURIComponent(to)}&am=${amount}&tn=TripSettle&cu=INR`;
    window.open(upi, '_blank');
}

// ============ RENDER ============
function renderApp() {
    const root = document.getElementById('root');
    if (!AppState.onboarded) {
        root.innerHTML = `<div class="container">${renderOnboarding()}</div>`;
        return;
    }
    root.innerHTML = `<div class="container">${renderHeader()}${renderMain()}</div>`;
}

function renderHeader() {
    return `
        <div class="header">
            <div>
                <div class="header-title">💳 SplitSmart</div>
                <div style="font-size:13px;color:#636e72">${AppState.currentTrip?.name || ''}</div>
            </div>
            <div style="text-align:right">
                <div style="font-size:12px;color:#636e72">மொத்தம்</div>
                <div style="font-size:22px;font-weight:bold;color:#FF6B6B">
                    ₹${AppState.expenses.reduce((s,e) => s+e.amount, 0).toLocaleString()}
                </div>
            </div>
        </div>
    `;
}

function renderMain() {
    return `
        <div class="content">
            <div>
                ${renderMembers()}
                ${renderBalances()}
            </div>
            <div>
                ${renderExpenses()}
            </div>
        </div>
        ${renderSettlements()}
    `;
}

function renderMembers() {
    return `
        <div class="card">
            <div class="card-title">👥 நண்பர்கள்</div>
            <div class="form-group">
                <input type="text" id="memberNameInput" placeholder="பெயர் உள்ளிடவும்"
                       onkeypress="if(event.key==='Enter') addMember()">
            </div>
            <button class="btn btn-primary" onclick="addMember()">➕ சேர்</button>
            <div style="margin-top:16px">
                ${AppState.members.map(m => `
                    <div class="member-item">
                        <div class="member-info">
                            <div class="member-name">${m}</div>
                            <div class="member-balance ${(AppState.balances[m]||0) >= 0 ? 'balance-owed' : 'balance-owes'}">
                                ${(AppState.balances[m]||0) >= 0 ? 'பெறவேண்டும்' : 'கொடுக்கவேண்டும்'}:
                                ₹${Math.abs(Math.round(AppState.balances[m]||0))}
                            </div>
                        </div>
                        <button class="btn btn-danger btn-small" onclick="removeMember('${m}')">நீக்கு</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderBalances() {
    const total = AppState.expenses.reduce((s,e) => s+e.amount, 0);
    const avg = AppState.members.length > 0 ? total / AppState.members.length : 0;
    return `
        <div class="balance-summary">
            <div class="summary-stat">
                <div class="summary-label">மொத்த செலவு</div>
                <div class="summary-value">₹${total.toLocaleString()}</div>
            </div>
            <div class="summary-stat">
                <div class="summary-label">தலா செலவு</div>
                <div class="summary-value">₹${Math.round(avg).toLocaleString()}</div>
            </div>
            <div class="summary-stat">
                <div class="summary-label">Settlements</div>
                <div class="summary-value">${AppState.settlements.length}</div>
            </div>
        </div>
    `;
}

function renderExpenses() {
    return `
        <div class="card">
            <div class="card-title">💰 செலவுகள்</div>
            <div class="form-group">
                <label>என்ன செலவு?</label>
                <input type="text" id="expenseDesc" placeholder="eg: Hotel, Petrol">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>தொகை ₹</label>
                    <input type="number" id="expenseAmount" placeholder="0">
                </div>
                <div class="form-group">
                    <label>வகை</label>
                    <select id="expenseCategory">
                        <option>Food</option><option>Hotel</option>
                        <option>Petrol</option><option>Toll</option>
                        <option>Activity</option><option>Other</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>யார் pay பண்ணாங்க?</label>
                <select id="expensePaidBy">
                    ${AppState.members.map(m => `<option value="${m}">${m}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>யாருக்கு split?</label>
                <div class="checkbox-group">
                    ${AppState.members.map(m => `
                        <div class="checkbox-item">
                            <input type="checkbox" name="participants" value="${m}" id="p-${m}" checked>
                            <label for="p-${m}">${m}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="btn btn-primary" onclick="addExpense()">➕ செலவு சேர்</button>
            <div style="margin-top:20px">
                ${AppState.expenses.length === 0
                    ? '<div class="empty-state">இன்னும் செலவு இல்லை</div>'
                    : AppState.expenses.slice().reverse().map(exp => `
                        <div class="expense-item">
                            <div class="expense-info">
                                <div class="expense-desc">${exp.description}</div>
                                <div class="expense-meta">${exp.paidBy} paid ₹${exp.amount} · ${exp.category}</div>
                            </div>
                            <button class="btn btn-danger btn-small" onclick="deleteExpense('${exp.id}')">நீக்கு</button>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    `;
}

function renderSettlements() {
    return `
        <div class="card">
            <div class="card-title">🤝 தீர்வு (Settlements)</div>
            ${AppState.settlements.length === 0
                ? '<div class="empty-state">🎉 எல்லாம் சரியாகிவிட்டது!</div>'
                : AppState.settlements.map((s, idx) => `
                    <div class="settlement-card">
                        <div class="settlement-from"><strong>${s.from}</strong> கொடுக்கணும்</div>
                        <div class="settlement-amount">₹${s.amount}</div>
                        <div class="settlement-to"><strong>${s.to}</strong>-க்கு</div>
                        <div class="settlement-buttons">
                            <button class="upi-button" onclick="openUPI('${s.from}','${s.to}',${s.amount})">
                                💳 UPI Pay
                            </button>
                            <button class="upi-button" onclick="markAsPaid(${idx})">
                                ✅ Done
                            </button>
                        </div>
                    </div>
                `).join('')
            }
        </div>
    `;
}

// ============ TOAST MESSAGE ============
function showMessage(text, type = 'success') {
    const div = document.createElement('div');
    div.className = type + '-message';
    div.textContent = text;
    div.style.cssText = 'position:fixed;top:20px;right:20px;z-index:2000;padding:12px 20px;border-radius:8px;font-weight:bold;animation:slideIn 0.3s ease';
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

// ============ INIT ============
if (!document.getElementById('anim-style')) {
    const s = document.createElement('style');
    s.id = 'anim-style';
    s.textContent = '@keyframes slideIn{from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1}}';
    document.head.appendChild(s);
}

loadState();
renderApp();