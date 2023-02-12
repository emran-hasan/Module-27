// Step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 2: get the deposit amount from the deposit input
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step 3: get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 4: add number to set the total amount

    currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalAmount.innerText = currentDepositTotal;

    // Step 5: get the balance total

    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const totalBalance = newDepositAmount + previousBalance;
    balanceTotal.innerText = totalBalance;

    
    depositField.value ='';
})