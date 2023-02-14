// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2.5. also make sure to convert the input into a number by using parsefloat
// 3. Get previous withdraw total
// 4. calculate total withdraw amount
// step 5 .set total withdorw amount
// set the balance total




//step 7:clear the input field

// 1 step : add event handler with the withdrow button
//
document.getElementById('btn-withdrow').addEventListener('click', function() {
    const withdrowField = document.getElementById('withdrow-field');
    const newWithDrowAmountSting = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithDrowAmountSting);
    console.log(typeof newWithdrowAmount);
    if (isNaN(newWithdrowAmount)) {
        alert('Please provide a valid Amount:');
        return;
    }

    //step 3: privise withdrow 
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previouseWithdrowTotalString = withdrowTotalElement.innerText;
    const previouseWithdrowTotal = parseFloat(previouseWithdrowTotalString);
    console.log(previouseWithdrowTotal);




    //step -5
    const balanceTotalElement = document.getElementById('balance-total');
    const previcesTotalSting = balanceTotalElement.innerText;
    const priviuseBalanceTotal = parseFloat(previcesTotalSting);

    //step7
    withdrowField.value = "";
    if (newWithdrowAmount > priviuseBalanceTotal) {
        alert('Bapper Bank a Ato Taka Nai ');
        return;
    }
    //step 4 
    const currentWithdrowTotal = previouseWithdrowTotal + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowTotal;

    // step 6 
    const newBalanceTotal = priviuseBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;





})