document.getElementById('btn-depesit').addEventListener('click', function() {
    const depesitField = document.getElementById('depesit-field');
    const newdepositAmountString = depesitField.value;
    const newDepesitAmount = parseFloat(newdepositAmountString);
    // console.log(typeof newDepesitAmount); 


    const depesitAmountTotal = document.getElementById('deposit-total');
    const previusedepesitTotalString = depesitAmountTotal.innerText;
    const priviseDepesitTotal = parseFloat(previusedepesitTotalString);
    // depesitAmountTotal.innerText = newdepositAmount; 
    // console.log(typeof priviseDepesitTotal); 

    const totaldepesitField = priviseDepesitTotal + newDepesitAmount;
    depesitAmountTotal.innerText = totaldepesitField;

    const balanceTotalElement = document.getElementById('balance-total');
    const priviseBalanceTotalString = balanceTotalElement.innerText;
    const prieviseTotal = parseFloat(priviseBalanceTotalString);

    // step 6 calculate total Balance 

    const balanceAdd = prieviseTotal + newDepesitAmount;

    // set the balance Total 
    balanceTotalElement.innerText = balanceAdd;



    //clear the depesit field
    depesitField.value = " ";
})