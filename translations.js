const TRANSLATIONS = {
    en: {
        // Header
        appTitle: 'SplitSmart - Group Expense Splitter',
        
        // Navigation
        navTrips: 'Trips',
        navExpenses: 'Expenses',
        navMembers: 'Members',
        navSettlements: 'Settlements',
        
        // Trip Management
        tripTitle: 'Manage Trip',
        tripName: 'Trip Name',
        tripDate: 'Trip Date',
        tripDescription: 'Description',
        createTrip: 'Create Trip',
        updateTrip: 'Update Trip',
        deletTrip: 'Delete Trip',
        noTrips: 'No trips yet. Create one to get started!',
        tripCreated: 'Trip created successfully',
        tripUpdated: 'Trip updated successfully',
        tripDeleted: 'Trip deleted successfully',
        
        // Members
        membersTitle: 'Group Members',
        memberName: 'Member Name',
        addMember: 'Add Member',
        removeMember: 'Remove',
        owes: 'owes',
        owed: 'owed',
        settled: 'settled',
        noMembers: 'No members added yet',
        memberAdded: 'Member added successfully',
        memberRemoved: 'Member removed successfully',
        memberShare: 'Share units',
        shareLabel: 'Share',
        invalidShare: 'Enter a valid share value',
        
        // Expenses
        expensesTitle: 'Add Expense',
        expenseDescription: 'Description',
        expenseAmount: 'Amount (₹)',
        expenseCategory: 'Category',
        expensePaidBy: 'Paid By',
        expenseSplitType: 'Split Type',
        expenseParticipants: 'Participants',
        addExpense: 'Add Expense',
        deleteExpense: 'Delete',
        noExpenses: 'No expenses added yet',
        expenseAdded: 'Expense added successfully',
        expenseDeleted: 'Expense deleted successfully',
        expenseAmount: 'Amount: ₹',
        
        // Categories
        categoryFood: 'Food',
        categoryHotel: 'Hotel',
        categoryPetrol: 'Petrol',
        categoryToll: 'Toll',
        categoryTransport: 'Transport',
        categoryActivity: 'Activity',
        categoryOther: 'Other',
        
        // Split Types
        splitEqual: 'Equal',
        splitCustom: 'Custom',
        splitByShares: 'By Shares',
        
        // Settlements
        settlementsTitle: 'Settlements',
        settlementFrom: 'From:',
        settlementTo: 'To:',
        settlementAmount: '₹',
        payNow: 'Pay Now',
        marked: 'Marked as Paid',
        upiPay: 'Pay via UPI',
        noSettlements: 'Everyone is settled!',
        settlementsCalculated: 'Settlements calculated optimally',
        minTransactions: 'Minimum Transactions Algorithm',
        
        // Summary
        totalExpenses: 'Total Share Amount',
        totalShareUnits: 'Total Shares',
        yourShare: 'Your Share',
        youOwe: 'You Owe',
        youAreOwed: 'You Are Owed',
        balanceSettled: 'Balance: Settled',
        
        // Actions
        select: 'Select',
        selectAll: 'Select All',
        clearAll: 'Clear All',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        export: 'Export',
        import: 'Import',
        
        // Validation
        required: 'This field is required',
        invalidAmount: 'Please enter a valid amount',
        selectParticipants: 'Select at least one participant',
        
        // Messages
        success: 'Success!',
        error: 'Error!',
        confirm: 'Are you sure?',
        
        // Language
        english: 'English',
        tamil: 'தமிழ்',
    },
    
    ta: {
        // Header
        appTitle: 'SplitSmart - குழு செலவு பிரிப்பான்',
        
        // Navigation
        navTrips: 'பயணங்கள்',
        navExpenses: 'செலவுகள்',
        navMembers: 'உறுப்பினர்கள்',
        navSettlements: 'தீர்வுகள்',
        
        // Trip Management
        tripTitle: 'பயணத்தை நிர்வகி',
        tripName: 'பயணத்தின் பெயர்',
        tripDate: 'பயணத்தின் தேதி',
        tripDescription: 'விளக்கம்',
        createTrip: 'பயணத்தை உருவாக்கு',
        updateTrip: 'பயணத்தை புதுப்பி',
        deletTrip: 'பயணத்தை நீக்கு',
        noTrips: 'இன்னும் பயணங்கள் இல்லை. ஒன்றை உருவாக்க தொடங்குங்கள்!',
        tripCreated: 'பயணம் வெற்றிகரமாக உருவாக்கப்பட்டது',
        tripUpdated: 'பயணம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது',
        tripDeleted: 'பயணம் வெற்றிகரமாக நீக்கப்பட்டது',
        
        // Members
        membersTitle: 'குழு உறுப்பினர்கள்',
        memberName: 'உறுப்பினரின் பெயர்',
        addMember: 'உறுப்பினரை சேர்',
        removeMember: 'நீக்கு',
        owes: 'செலுத்த வேண்டும்',
        owed: 'பெற வேண்டும்',
        settled: 'தீர்வுற்றது',
        noMembers: 'இன்னும் உறுப்பினர்கள் சேர்க்கப்படவில்லை',
        memberAdded: 'உறுப்பினர் வெற்றிகரமாக சேர்க்கப்பட்டார்',
        memberRemoved: 'உறுப்பினர் வெற்றிகரமாக நீக்கப்பட்டது',
        memberShare: 'பங்கு அலகுகள்',
        shareLabel: 'பங்கு',
        invalidShare: 'சரியான பங்கு மதிப்பை உள்ளிடவும்',
        
        // Expenses
        expensesTitle: 'செலவை சேர்',
        expenseDescription: 'விளக்கம்',
        expenseAmount: 'தொகை (₹)',
        expenseCategory: 'வகை',
        expensePaidBy: 'யார் செலுத்தினார்',
        expenseSplitType: 'பிரிப்பு வகை',
        expenseParticipants: 'பங்கேற்பாளர்கள்',
        addExpense: 'செலவை சேர்',
        deleteExpense: 'நீக்கு',
        noExpenses: 'இன்னும் செலவுகள் சேர்க்கப்படவில்லை',
        expenseAdded: 'செலவு வெற்றிகரமாக சேர்க்கப்பட்டது',
        expenseDeleted: 'செலவு வெற்றிகரமாக நீக்கப்பட்டது',
        expenseAmount: 'தொகை: ₹',
        
        // Categories
        categoryFood: 'உணவு',
        categoryHotel: 'விடுதி',
        categoryPetrol: 'பெட்ரோல்',
        categoryToll: 'சாலைக்கட்டணம்',
        categoryTransport: 'பரிவहन',
        categoryActivity: 'செயல்பாடு',
        categoryOther: 'மற்றவை',
        
        // Split Types
        splitEqual: 'சம பிரிப்பு',
        splitCustom: 'தனிப்பயன்',
        splitByShares: 'பங்கு மூலம்',
        
        // Settlements
        settlementsTitle: 'தீர்வுகள்',
        settlementFrom: 'யாரிடமிருந்து:',
        settlementTo: 'யாருக்கு:',
        settlementAmount: '₹',
        payNow: 'இப்போது செலுத்து',
        marked: 'செலுத்தியதாக குறிப்பிடப்பட்டது',
        upiPay: 'UPI வழியாக செலுத்து',
        noSettlements: 'அனைவரும் தீர்வுற்றுவிட்டார்கள்!',
        settlementsCalculated: 'தீர்வுகள் உகந்ததாக கணக்கிடப்பட்டுள்ளன',
        minTransactions: 'குறைந்தபட்ச பரிமாற்றம் வழிமுறை',
        
        // Summary
        totalExpenses: 'மொத்த பங்கு தொகை',
        totalShareUnits: 'மொத்த பங்குகள்',
        yourShare: 'உங்கள் பங்கு',
        youOwe: 'நீங்கள் செலுத்த வேண்டும்',
        youAreOwed: 'நீங்கள் பெற வேண்டும்',
        balanceSettled: 'நிலை: தீர்வுற்றது',
        
        // Actions
        select: 'தேர்வு',
        selectAll: 'அனைத்தையும் தேர்வு',
        clearAll: 'அனைத்தையும் நீக்கு',
        save: 'சேமி',
        cancel: 'ரத்து',
        delete: 'நீக்கு',
        edit: 'திருத்து',
        close: 'மூடு',
        export: 'ஏற்றுமதி',
        import: 'இறக்குமதி',
        
        // Validation
        required: 'இந்த புலம் தேவை',
        invalidAmount: 'சரியான தொகையை உள்ளிடவும்',
        selectParticipants: 'குறைந்தபட்சம் ஒரு பங்கேற்பாளரைத் தேர்வு செய்யவும்',
        
        // Messages
        success: 'வெற்றி!',
        error: 'பிழை!',
        confirm: 'நீங்கள் உறுதியாக உள்ளீர்களா?',
        
        // Language
        english: 'English',
        tamil: 'தமிழ்',
    }
};

let currentLanguage = 'en';

function t(key) {
    return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS['en'][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    renderApp();
}

function getLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Initialize language from localStorage
currentLanguage = getLanguage();
