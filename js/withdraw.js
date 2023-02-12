document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawTotal = parseFloat(withdrawAmountString);
    
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    previousWithdraw.innerText = currentWithdrawTotal;
    console.log(currentWithdrawTotal);

    const previousWithdrawBalance = document.getElementById('balance-total');
    const previousBalanceElementString = previousWithdrawBalance.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceElementString);
    console.log(previousBalanceTotalElement);


    
    const newBalanceTotal = previousBalanceTotalElement - currentWithdrawTotal ;
    previousWithdrawBalance.innerText = newBalanceTotal;
    console.log(newBalanceTotal);

    withdrawField.value = '';


})