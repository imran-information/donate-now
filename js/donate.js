// Home to blogs
// document.getElementById('home-btn').addEventListener('click', function () {
//     location.href = './index.html'

// });



// Noakhali Donate Calculation
document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const noakhaliInputValue = getInputValueById('noakhali-input');
    const noakhaliBalanceNumber = getTextValueById('noakhali-balance');
    const newBalance = noakhaliBalanceNumber + noakhaliInputValue;
    document.getElementById('noakhali-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - noakhaliInputValue;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;
});


// Feni Donate Calculation
document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const feniInputValue = getInputValueById('feni-input');
    const feniBalanceNumber = getTextValueById('feni-balance');
    const newBalance = feniBalanceNumber + feniInputValue;
    document.getElementById('feni-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - feniInputValue;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;
});


// Quota Donate Calculation
document.getElementById('quota-btn').addEventListener('click', function () {
    const quotaInput = getInputValueById('quota-input');
    const quotaBalanceNumber = getTextValueById('quota-balance');
    const newBalance = quotaBalanceNumber + quotaInput;
    document.getElementById('quota-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - quotaInput;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;
})
