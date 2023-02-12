document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawTotal = parseFloat(withdrawAmountString);
    
    withdrawField.value = '';

    if(isNaN(newWithdrawTotal) && newWithdrawTotal !== 'string'){
        alert('Input valid amount!')
        return;
    }
    
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    
    
    const previousWithdrawBalance = document.getElementById('balance-total');
    const previousBalanceElementString = previousWithdrawBalance.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceElementString);

    
    if(newWithdrawTotal > previousBalanceTotalElement ){
        alert('Baper bank e taka nei!!');
        return;
    }
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    previousWithdraw.innerText = currentWithdrawTotal;

    
    const newBalanceTotal = previousBalanceTotalElement - newWithdrawTotal ;
    previousWithdrawBalance.innerText = newBalanceTotal;
    



})