document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const getPhoneNumber = document.querySelector('#phoneNumber').value;
    const getPinNumber = document.getElementById('pinNumber').value;

    if(getPhoneNumber === '01833911156' && getPinNumber === '1234'){
        // alert('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong pin or phone number');
    }
});