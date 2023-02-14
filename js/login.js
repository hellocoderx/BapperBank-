document.getElementById('btn-submit').addEventListener('click', function() {
    // 2nd step get the email address inside the email input fild 
    // always remember us.value to get text from input field 
    const emailFild = document.getElementById('email-fild');
    const email = emailFild.value;

    //3 step 
    const passwordFild = document.getElementById('password-fild');
    const password = passwordFild.value;

    if (email === 'coderhossain@gmail.com' && password === '123456') {
        window.location.href = 'bank.html'
    } else {
        alert('Invaild Password');
    }

})