# SplitSmart - Quick Start Guide & Troubleshooting

## 🚀 Quick Start (2 minutes)

### 1. Open the App
- Double-click `index.html` OR
- Drag `index.html` to your browser OR
- Right-click → Open with → Choose browser

### 2. Sample Data Loads Automatically
```
✅ Ooty Trip with 4 friends already loaded
✅ Sample expenses: ₹10,300 total
✅ Try the demo features
```

### 3. Explore Features
- 👥 View Members (Ragu, Priya, Arun, Divya)
- 💰 Check expenses by category
- 🔄 See settlements (3 transactions)
- 💳 Click UPI payment button

### 4. Add Your Own Data
- Remove sample data or start fresh
- Click "Add Member"
- Click "Add Expense"
- Select participants
- View settlements auto-calculate

---

## 🎮 Step-by-Step Usage

### Scenario: Weekend Trip with Friends

#### Step 1: Create Trip (Optional)
```
Trip Name: "Goa Weekend"
Date: 2024-05-15
Description: "Beach trip with college friends"
```

#### Step 2: Add Members
```
1. Click "Add Member"
2. Enter: "Raju"
3. Click "Add Member"
4. Enter: "Priya"
5. Enter: "Arjun"
6. Enter: "Neha"
(Total: 4 members)
```

#### Step 3: Track Expenses

**Expense 1: Hotel**
```
Description: Goa Resort (2 nights)
Amount: ₹6,000
Category: Hotel
Paid By: Raju
Split Type: Equal
Participants: All 4 ✓
```

**Expense 2: Petrol**
```
Description: Fuel for road trip
Amount: ₹1,800
Category: Petrol
Paid By: Arjun
Split Type: Equal
Participants: All 4 ✓
```

**Expense 3: Food**
```
Description: Restaurant lunch
Amount: ₹2,000
Category: Food
Paid By: Priya
Split Type: Equal
Participants: All 4 ✓
```

**Expense 4: Activities**
```
Description: Scuba diving
Amount: ₹2,400
Category: Activity
Paid By: Neha
Split Type: Equal
Participants: All 4 ✓
```

#### Step 4: Check Settlements
```
View Settlements section:
- See minimum transactions needed
- Each person's share calculated
- Total expenses tracked
```

#### Step 5: Settle Payments
```
1. Click "Pay via UPI" on any settlement
2. Choose app: GPay / PhonePe / BHIM / Paytm
3. App opens with amount pre-filled
4. Complete payment
5. Return and click "Marked as Paid"
```

---

## 🌍 Language Features

### Switch Languages
```
Top-right corner: Click "English" or "தமிழ்"
Language changes instantly
Persists even after refresh
```

### Supported Languages
- **English**: Complete interface in English
- **Tamil**: Complete interface in தமிழ் (Tamil script)

---

## 📊 Working with Different Split Types

### Equal Split (Default)
```
Amount: ₹1,200
Participants: 3 people
Each pays: ₹1,200 / 3 = ₹400

Use for: Most expenses
```

### Custom Split
```
Amount: ₹1,200
Participant A: ₹600
Participant B: ₹400
Participant C: ₹200
(Total must equal ₹1,200)

Use for: Unequal consumption
```

---

## 💰 Expense Categories

| Category | When to Use |
|----------|------------|
| **Food** | Meals, snacks, groceries, restaurants |
| **Hotel** | Accommodation, resorts, hostels |
| **Petrol** | Fuel for vehicles |
| **Toll** | Road tolls, parking, fees |
| **Transport** | Flights, trains, buses, auto, taxi |
| **Activity** | Tours, entry fees, entertainment |
| **Other** | Everything else |

---

## 🧮 Understanding Settlements

### Example Calculation

```
Trip: 3 people, Total: ₹3,000 (₹1,000 each)

Expenses:
- Ragu paid ₹1,500
- Priya paid ₹1,200
- Arun paid ₹300

Net Balances:
- Ragu: +500 (owed money)
- Priya: +200 (owed money)
- Arun: -700 (owes money)

Settlements:
- Arun → Ragu: ₹500
- Arun → Priya: ₹200
(Total: 2 transactions)
```

### Blue cards in Settlements
```
From: Ragu
To: Divya
Amount: ₹1,375

Means: Ragu owes Divya ₹1,375
```

---

## 🔧 Troubleshooting

### Issue: App won't open
**Solution:**
```
1. Right-click index.html
2. Select "Open with" → Chrome/Firefox/Safari
3. If still fails:
   - Download file again
   - Check file is named "index.html" exactly
   - Check all .js files in same folder
```

### Issue: Data disappears on refresh
**Solution:**
```
✓ This is normal if localStorage disabled
✓ Clear browser cache and try again
✓ Settings → Privacy → Allow LocalStorage

Data is only stored locally in your browser.
Clearing cache will delete it.
```

### Issue: Language changed but text still English
**Solution:**
```
1. Refresh the page (Ctrl+R or Cmd+R)
2. Clear browser cache
3. Try different browser
4. Check browser console (F12) for errors
```

### Issue: UPI button doesn't open app
**Solution:**
```
1. Desktop? → UPI links work on mobile only
2. Mobile? → Install GPay/PhonePe/BHIM/Paytm
3. Not working?
   - Browser settings may block deep links
   - Try different browser
   - Check UPI apps are installed
```

### Issue: Settlement numbers wrong
**Solution:**
```
Check:
1. All expenses added correctly
2. Amount entered correctly
3. Participants selected correctly
4. For custom split: amounts sum to total

Still wrong?
1. Open browser console (F12)
2. Look for error messages
3. Try with sample data first
```

### Issue: Slow performance
**Solution:**
```
1. Close other browser tabs
2. Refresh page
3. Clear localStorage: F12 → Application → Clear Storage
4. Try different browser

Note: Normal up to 100+ people/1000+ expenses
```

### Issue: Mobile display broken
**Solution:**
```
1. Rotate phone to landscape
2. Zoom out on phone (pinch zoom out)
3. Try different mobile browser
4. Check screen is at normal zoom level

All modern phones supported in portrait & landscape
```

---

## 💾 Data Management

### Saving Data
```
✓ Automatically saved to localStorage
✓ Persists after browser close
✓ Persists after computer restart
✓ Data stored locally only
```

### Backup Data
```
Option 1: Screenshot settlements
Option 2: Note down transaction details
Option 3: Export feature (coming soon)
```

### Clear Data
```
1. Open browser Developer Tools (F12)
2. Go to "Application" tab
3. Find "Local Storage"
4. Find your domain
5. Right-click → Delete all
```

### Clearing for Next Trip
```
Option 1: Clear data (above), then refresh
Option 2: Add new members, old ones persist
Option 3: Clear just expenses: delete them individually
```

---

## 🔐 Privacy & Security

### Data Protection
```
✓ Your data never leaves your computer
✓ No login required
✓ No account creation
✓ No server connection
✓ 100% browser-based
✓ Open-source code (verify yourself)
```

### Safe to Use For
- Sensitive financial tracking
- Private group expenses
- Confidential trip budgeting

---

## 🎯 Tips & Tricks

### Tip 1: Pre-fill Expenses
```
For recurring expense types:
1. Add first expense (e.g., "Lunch at Restaurant")
2. Click "Duplicate" (when available)
3. Change only amount, date, participants
```

### Tip 2: Use Categories Well
```
Better search & filtering if:
- Use consistent category names
- Don't use "Other" for categorizable items
- Group similar expenses
```

### Tip 3: Regular Settlements
```
Don't wait until end of trip:
- Settle after Day 2, 3, etc.
- Prevents accumulated confusion
- Ensures people remember details
```

### Tip 4: Verify with Friends
```
Before final settlement:
1. Show each person their balance
2. Confirm everyone agrees
3. Then proceed with payments
```

### Tip 5: Screenshot Everything
```
Keep records:
1. Final settlement screen
2. Each transaction (before UPI payment)
3. Proof of payment (UPI receipt)
```

---

## 📱 Mobile-Specific Tips

### Android
```
✓ Works in Chrome, Firefox, Samsung Internet
✓ Download as shortcut to home screen
✓ UPI deep links: Automatic app selection
```

### iPhone/iPad
```
✓ Works in Safari, Chrome, Firefox
✓ Add to home screen: Share → Add to Home Screen
✓ UPI not supported on iOS (not available)
```

### Data Over WiFi Only
```
1. Open Settings → WiFi
2. Connect to home WiFi
3. Open app (loads faster)
4. Works offline after loading
```

---

## 🚨 Common Mistakes

### Mistake 1: Not Selecting All Participants
```
❌ Wrong: Add expense but forget to select participant
✅ Right: Verify all participants are checked
→ Otherwise they won't owe/be owed correctly
```

### Mistake 2: Wrong Split Type
```
❌ Wrong: Everyone chooses "Custom" for simple expense
✅ Right: Use "Equal" when everyone pays same
→ Avoids manual entry errors
```

### Mistake 3: Forgetting Paid-By Person
```
❌ Wrong: "Ragu paid ₹1,000, split equally among 4"
        → Ragu owes ₹0, others owe ₹250 each (WRONG!)
✓ Right: Make sure Ragu is selected as participant too
        → Ragu owes ₹250, others owe ₹250 (CORRECT!)
```

### Mistake 4: Duplicate Expenses
```
❌ Wrong: Add same expense twice
✓ Right: Check list before adding new expense
→ Otherwise settlement calculations wrong
```

### Mistake 5: Amount Precision
```
❌ Wrong: ₹1000.333333
✓ Right: ₹1000.33 or ₹1000
→ App rounds to 2 decimals for Indian currency
```

---

## ✅ Verification Checklist

Before finalizing settlements:

- [ ] All members added
- [ ] All expenses entered
- [ ] Each expense has payer selected
- [ ] All participants checked
- [ ] Amounts look reasonable
- [ ] Total expense matches actual trip cost
- [ ] Each person's balance makes sense
- [ ] Settlements show minimum transactions
- [ ] No negative balances (all settled)

---

## 🆘 Getting Help

### Where to Look First
1. This troubleshooting guide
2. Browser console (F12 → Console tab) for errors
3. Try sample data to understand flow
4. Compare with worked examples

### Common Error Messages

| Error | Solution |
|-------|----------|
| "Amount must be > 0" | Enter valid amount |
| "Select at least one participant" | Check participant boxes |
| "This field is required" | Fill all mandatory fields |
| "Invalid amount format" | Use numbers only (₹1000.50) |

---

## 📞 Contact & Support

For issues:
1. Check browser console (F12)
2. Verify all .js files in same folder
3. Try different browser
4. Try incognito/private mode
5. Clear cache and try again

---

**You're all set! Enjoy using SplitSmart! 🎉**
